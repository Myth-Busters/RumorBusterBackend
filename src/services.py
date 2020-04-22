from mongoengine import connect
from models import Requester, Request, RequestQueue, AnalyzingScheduler, MessagesSent
from messages import *
from datetime import datetime, timedelta
from variables import Variables
from twilio.rest import Client
import random
from decider import handle_request

connect(Variables.databaseName)
client = Client(Variables.account_sid, Variables.auth_token) # twilio client

def requestsEliminator(msgBody, reqer):
    text = msgBody.get('Body', '').lower()
    numOfMedia = msgBody.get('NumMedia', '')
    if numOfMedia == '0' and len(text) < 10:  # change latter to 150
        Request(requester = reqer, message = str(msgBody.to_dict()), status = 99).save()
        return True
    return False 

def greetingMsg(fr):
    info = fr.split('+')  
    r = Requester.objects(phoneNumber=info[1]).first()
    if not r:
        r = Requester(origin=info[0] ,phoneNumber=info[1]).save()
        return messages['greetingmessage'][r.lang]
      
def createRequester(fr): # from 
    if fr:
        info = fr.split('+')  
        r = Requester.objects(phoneNumber=info[1]).first()
        if not r:
            Requester(origin=info[0] ,phoneNumber=info[1]).save()
    return r

def updateLangPref(reqer):
    if reqer:
        reqer.lang = 'en' if reqer.lang == 'ar' else 'ar'
        reqer.save()

def getRequestsForReqtesrt(reqer):
    if reqer:
        return Request.objects(requester=reqer).all() 

def getRequester(fr): 
    r = None
    if fr:
        info = fr.split('+')  
        r = Requester.objects(phoneNumber=info[1]).first()
        if not r:
            r = createRequester(fr)
    return r

#TODO Delete (not being used)
def updateRequesterDeenOptionFlag(pn):
    if pn:
        r = Requester.objects(phoneNumber=pn).first()
        if r:
            r.seenOption = True
            r.save()

def createNewRequest(reqer, msg):
    if reqer and msg:
            r = Request(requester = reqer, message = str(msg)).save()
            addToQueue(reqer, r)

def getQueue(reqer):
    q = RequestQueue.objects(requester=reqer).first()
    if not q:
        q = RequestQueue(requester = reqer)
        q.save()
    return q

def addToQueue(reqer, req):
    q = getQueue(reqer)
    if q.status == 1: # if queue is unlocked (open for busniess): 
        q.requests.append(req)
        q.save()

def getLastReqFromQueue(reqer):
    q = getQueue(reqer)
    if q and len(q.requests) > 0:
        return q.requests[-1]
    return None

def getAnalyzingScheduler(reqer): # if it doesn't exist, create one and return it 
    a = AnalyzingScheduler.objects(requester=reqer).first()
    if not a:
        a = AnalyzingScheduler(requester = reqer).save()
    return a

def increaseSchedulerTime(reqer):
    a = getAnalyzingScheduler(reqer) 
    last_req_in_q = getLastReqFromQueue(reqer)
    if last_req_in_q and last_req_in_q.status == 0:
        check_at = last_req_in_q.created + timedelta(seconds=Variables.secondsToIncreaseSchedulerTimeBy)
        a.check_at = check_at 
        a.check = 1
        a.save()
        return
    a.check = 0
    a.save()
    

def popFromQueue(reqer):
    q = getQueue(reqer)
    if q and len(q.requests) > 0:
        req = q.requests[0]
        if req.status == 1 or req.status == 2 or req.status == 3:
            q.requests.pop(0)
            q.save()

# check for limit  | return true if it passes the limit
def checkLimitOfTheQueue(reqer, q):
    if q:
        if len(q.requests) > Variables.QueueLimitPerRequester:
            q.status = 0
            q.save()
    return q

# change AnalyzingScheduler check to 1 if queue is locked and  
def updateASifQueueEmpty(reqer, q):
    a = getAnalyzingScheduler(reqer)
    if q and a:
        if len(q.requests) > 0 and q.status == 0:
            a.check = 1
            a.save()
        elif len(q.requests) == 0 and q.status == 1:
            a.check = 0
            a.save()

def createNewMessage(reqer, messageType, request = None, extra = None):
    MessagesSent(requester = reqer, messageType = messageType, request = request, extra = extra).save()

# if the 
def getMessageToBeSent(reqer, messageType, req = None, extra = None): # this will return none if message has been sent within an amount of time 
    if reqer and messageType:
        m = MessagesSent.objects(requester=reqer).order_by('-created').first()
        if m:
            if m.messageType == messageType:
                if (datetime.now() - m.created < timedelta(seconds=Variables.secondsToWaitBeforeSendingSameMessage)):
                    return False    
    createNewMessage(reqer, messageType, request = None, extra = None)   
    return True

def handleSubmession(reqer, msg):
    # get queue of the and check if it is open for busniess 
    q = getQueue(reqer)
    q = checkLimitOfTheQueue(reqer, q) # update status of queue and get an updated doceumnt
    if q.status == 0: 
        if len(q.requests) < Variables.QueueLimitPerRequester:
            if getMessageToBeSent(reqer, 'inProgressMessage'):
                return messages['inProgressMessage'][reqer.lang]
        else:
            if getMessageToBeSent(reqer, 'exceededLimitMessage'):
                return messages['exceededLimitMessage'][reqer.lang]   

    createNewRequest(reqer,msg)
    increaseSchedulerTime(reqer)
    return None

def sendWAMessage(mediaURLS, body, phoneNumber):
    message = client.messages \
    .create(
        media_url=mediaURLS,
        from_=Variables.whatsappSender,
        body=body,
        to='whatsapp:+'+phoneNumber
    )

def sendWAMessageToReqer(messageType, reqer, req = None,  checkForLastMessage = True):
    if checkForLastMessage == False:
        mediaURLS = []
        if req:
            body = req.getBody()[0:50] + '....' + '\n\n' +  messages[messageType][reqer.lang]
            mediaURLS = req.getImage()
        else:
            body = messages[messageType][reqer.lang]
        MessagesSent(requester = reqer, request = req, extra = body, messageType = messageType).save()
        sendWAMessage(mediaURLS, body, reqer.phoneNumber)
        return 
    else:
        if getMessageToBeSent(reqer, messageType):
            sendWAMessage([], messages[messageType][reqer.lang], reqer.phoneNumber)

# send as report 1
def sendRumorsForSubmession(reqer, q):
    # for every request in the queue
    #    # send it as with a flag that is is a rumor 
    #    # delete it from queue  
    # send a message to the user and thanking it for using the bot 
    while(len(q.requests) > 0):
        req = q.requests[0]
        req.status = 3
        handle_request(req.message, '2')
    #    # delete it from queue  
        req.save()
        q.requests.remove(req) 
        q.save()
    # send a message to the user and thanking it for using the bot 
    if(len(q.requests) == 0):
        sendWAMessageToReqer('doneWithRumorsSubmissionMessage', reqer)
    pass

# send as checks 2 
def checkReportsInQueue(reqer, q):
    # for every request in the queue 
    while(len(q.requests) > 0):
        req = q.requests[0]
    #    # get decider response 
        deRes = handle_request(req.message, '1')
        req.status = deRes
    #    # send response to user (msg text/media + decider response)
        mediaURLS = req.getImage()
        if deRes == 1:
            sendWAMessageToReqer('itIsRumorMessage', reqer, req, False)
        if deRes == 2:
            sendWAMessageToReqer('itIsNotRumorMessage', reqer, req, False)
        if deRes == 3:
            sendWAMessageToReqer('noDefiniteAnswerMessage', reqer, req, False)
    #    # delete it from queue
        req.save()
        q.requests.remove(req) 
        q.save()
    # send a message to the user and thanking it for using the bot 
    if(len(q.requests) == 0):
        sendWAMessageToReqer('doneWithQueueMessages', reqer)


def handleQueueProccessing(reqer, typeOfCheck):
    # find a locked queue and has requests  
    # lock it if it is not already locked 
    q = getQueue(reqer)
    if q.status == 0 and len(q.requests) > 0:
        if typeOfCheck == '1':
            checkReportsInQueue(reqer, q)
        if typeOfCheck == '2':
            sendRumorsForSubmession(reqer, q)
    else:
        # send invalidCommand
        sendWAMessageToReqer('invalidCommand', reqer, checkForLastMessage = False)
    # unlock it
    if len(q.requests) == 0:
        q.status = 1
        q.save()

    # update AS check to 0
    updateASifQueueEmpty(reqer, q)


#TODO multiprocesses this bad body
def jobToCheckAnalyzingScheduler():
    # get a AnalyzingScheduler where check is 1 and check_at > 3 seconds from now 
    dateToCheck = datetime.now() - timedelta(seconds=Variables.secondsToIncreaseSchedulerTimeBy)
    ass = AnalyzingScheduler.objects(check = 1, check_at__lte = dateToCheck)
    if ass:
        for a in ass:
            reqer = a.requester
            # get the queue where len(requests) > 0 
            q = getQueue(reqer)
            if len(q.requests) > 0:
                # seond the message to the user
                sendWAMessageToReqer('subMessage', reqer)
                # lock the queue
                q.status = 0
                q.save()
            else:
                q.status = 1
                q.save()
            a.check = 0
            a.save()
            return 