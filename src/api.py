#!/usr/bin/env python
# -*- coding: utf-8 -*- 

from flask import Flask, request, abort, jsonify
from flask_cors import CORS, cross_origin
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import re, json
from __main__ import app
from services import getSrotedRumors, saveImage
from decider import *
from messages import *
import base64

cors = CORS(app)
app.config['JSON_AS_ASCII'] = False

# Rate limit
limiter = Limiter (
    app,
    key_func=get_remote_address,
    default_limits=["14400 per day", "300 per hour", "100 per minute"]
)

#TODO  authinication, 
@app.route("/validateMessage", methods=['POST'])
@cross_origin()
def validateMessage():
    d = {} 
    try:
        content = request.json
        if content:
            if content['uri'] and len(content['uri']) > 0:
                d['localPath'] =  saveImage(content['uri'])
                d['img'] = content['uri']
            message = content["message"]
            lang = content["language"]
            d['Body'] =  message
            deRes = handle_request(str(d), "1")
            if deRes == 1:
                return {"message": messages["itIsRumorMessage"][lang], 'canReport': False}
            if deRes == 2:
                return {"message": messages["itIsNotRumorMessage"][lang], 'canReport': False}
            if deRes == 3:
                return {"message": messages["noDefiniteAnswerMessage"][lang], 'canReport': True}

        return json.dumps({'success': True}), 500, {'ContentType': 'application/json'}
    except Exception as e:
        print(e)
        return abort(500)

            
@app.route("/reportRumor", methods=['POST'])
@cross_origin()
def reportRumor():
    try: 
        d = {} 
        content = request.json
        if content:
            if content['uri'] and len(content['uri']) > 0:
                d['localPath'] =  saveImage(content['uri'])
                d['img'] = content['uri']
            message = content["message"]
            lang = content["language"]
            d['Body'] =  message
            deRes = handle_request(str(d), "2")
            return {"message": messages["doneWithRumorsSubmissionMessageApp"][lang]}

        return json.dumps({'success': True}), 500, {'ContentType': 'application/json'}
    except Exception as e:
        print(e)
        return abort(500)

@app.route("/getTopRumors", methods=['GET'])
@cross_origin()
def getTopRumors():
    try:
        jsonData = getSrotedRumors(10)
        return jsonify(jsonData)
    except Exception as e:
        print(e)
        return abort(500)
