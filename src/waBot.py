#!/usr/bin/env python
# -*- coding: utf-8 -*- 
from flask import request
from twilio.twiml.messaging_response import MessagingResponse
from services import *
from messages import * 
from __main__ import app

from flask import  request
from twilio.twiml.messaging_response import MessagingResponse
from services import *
from __main__ import app

@app.route('/bot', methods=['POST'])
def bot():
    resp = MessagingResponse()
    msg = resp.message()
    responded = True
    recMsg = request.values.to_dict()
    reqer = getRequester(recMsg['From'])

    msg.body(commander(recMsg, reqer))
    if not responded:
        msg.body('I only know about famous quotes and cats, sorry!')
    return str(resp)
