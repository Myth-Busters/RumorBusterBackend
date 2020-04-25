from twilio.rest import Client
from variables import Variables
from messages import *
import requests 
from models import MessagesSent
from datetime import datetime, timedelta

client = Client(Variables.account_sid, Variables.auth_token) # twilio client

def sendWAMessage(mediaURLS, body, phoneNumber):
    message = client.messages \
    .create(
        media_url=mediaURLS,
        from_=Variables.whatsappSender,
        body=body,
        to='whatsapp:+'+phoneNumber
    )

def prepareTGMessage(mediaURLS, body, tgId):  
    json_data = {}
    json_data["chat_id"] = tgId
    if len(mediaURLS) > 0:
        json_data["caption"] = body 
        json_data["photo"] = mediaURLS[0]
        reqType = "sendPhoto"
    else:
        json_data["text"] = body 
        reqType = "sendMessage"
    return {"data":json_data, "reqType":reqType}
    
def sendTGMessage(prepared_data):  
    """
    Prepared data should be json which includes at least `chat_id` and `text`
    """ 
    message_url = Variables.BOT_URL + prepared_data["reqType"]
    requests.post(message_url, json=prepared_data["data"]) 

def sendMessageToReqer(messageType, reqer, req = None,  checkForLastMessage = True):
    if checkForLastMessage == False:
        mediaURLS = []
        if req:
            body = req.getBody()[0:50] + '....' + '\n\n' +  messages[messageType][reqer.lang]
            mediaURLS = req.getImage()
        else:
            body = messages[messageType][reqer.lang]
        MessagesSent(requester = reqer, request = req, extra = body, messageType = messageType).save()
        if reqer.origin == 'whatsapp:':
            sendWAMessage(mediaURLS, body, reqer.phoneNumber)
        elif reqer.origin == 'telegram':
            sendTGMessage(prepareTGMessage(mediaURLS, body, reqer.phoneNumber))
        return 
    else:
        if getMessageToBeSent(reqer, messageType):
            if reqer.origin == 'whatsapp:':
                sendWAMessage([], messages[messageType][reqer.lang], reqer.phoneNumber)
            elif reqer.origin == 'telegram':
                sendTGMessage(prepareTGMessage([], messages[messageType][reqer.lang], reqer.phoneNumber))


def getMessageToBeSent(reqer, messageType, req = None, extra = None): # this will return none if message has been sent within an amount of time 
    if reqer and messageType:
        m = MessagesSent.objects(requester=reqer).order_by('-created').first()
        if m:
            if m.messageType == messageType:
                if (datetime.now() - m.created < timedelta(seconds=Variables.secondsToWaitBeforeSendingSameMessage)):
                    return False    
    MessagesSent(requester = reqer, messageType = messageType, request = req, extra = extra).save()
    return True
print(Variables.BOT_URL)