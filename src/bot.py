#!/usr/bin/env python
# -*- coding: utf-8 -*- 
import sys
sys.path.append('../../')
from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse
from services import *
from messages import * 
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.executors.pool import ThreadPoolExecutor, ProcessPoolExecutor
from __main__ import app


executors = {
    'default': ThreadPoolExecutor(16),
    'processpool': ProcessPoolExecutor(4)
}

#TODO error handlign 
#TODO Handle telegram 
def commander(msg, reqer):
    if not reqer:
         return messages['greetingmessage']['ar']
    incoming_msg = request.values.get('Body', '').lower()
    if incoming_msg == '0':
        updateLangPref(reqer)
        return messages['langChange'][reqer.lang]
    if incoming_msg == '1' or incoming_msg == '2':
        handleQueueProccessing(reqer, incoming_msg)
        return
    if requestsEliminator(msg, reqer):
        return messages['noProcessingForYou'][reqer.lang]
    # submession handling 
    m = handleSubmession(reqer, msg.to_dict())
    return m
 

sched = BackgroundScheduler(timezone='Asia/Seoul', executors=executors)
sched.add_job(jobToCheckAnalyzingScheduler, 'interval', seconds=1)

@app.route('/bot', methods=['POST'])
def bot():
    print(request.values)
    resp = MessagingResponse()
    msg = resp.message()
    responded = True
    reqer = getRequester(request.values.get('From'))
    msg.body(commander(request.values, reqer))
    if not responded:
        msg.body('I only know about famous quotes and cats, sorry!')
    return str(resp)
