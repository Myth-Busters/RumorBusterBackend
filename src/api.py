#!/usr/bin/env python
# -*- coding: utf-8 -*- 

from flask import Flask, request, abort, jsonify
from flask_cors import CORS, cross_origin
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import re, json
from __main__ import app
from services import getTopRumors
from decider import *
from messages import *
# app = Flask(__name__, static_url_path='/static', template_folder='templates')

cors = CORS(app)
app.config['JSON_AS_ASCII'] = False

# Rate limit
limiter = Limiter (
    app,
    key_func=get_remote_address,
    default_limits=["14400 per day", "300 per hour", "100 per minute"]
)

#TODO handle images, input validation, authinication, 


@app.route("/validateMessage", methods=['POST'])
@cross_origin()
@limiter.limit("14400/day;300/hour;100/minute")
def validateMessage():
    try:
        content = request.json
        if connect:
            message = content["message"]
            lang = content["language"]
            d = {} 
            d['Body'] =  message
            deRes = handle_request(str(d), "1")
            if deRes == 3:
                return {"message": messages["noDefiniteAnswerMessage"][lang]}
            if deRes == 1:
                return {"message": messages["itIsRumorMessage"][lang]}
            if deRes == 2:
                return {"message": messages["itIsNotRumorMessage"][lang]}

        return json.dumps({'success': True}), 500, {'ContentType': 'application/json'}
    except Exception as e:
        print(e)
        return abort(500)


@app.route("/reportRumor", methods=['POST'])
@cross_origin()
@limiter.limit("14400/day;300/hour;100/minute")
def reportRumor():
    try:
        content = request.json
        if connect:
            message = content["message"]
            lang = content["language"]
            d = {} 
            d['Body'] =  message
            deRes = handle_request(str(d), "2")
            return {"message": messages["doneWithRumorsSubmissionMessageApp"][lang]}

        return json.dumps({'success': True}), 500, {'ContentType': 'application/json'}
    except Exception as e:
        print(e)
        return abort(500)

@app.route("/getTopRumors", methods=['GET'])
@cross_origin()
@limiter.limit("14400/day;300/hour;100/minute")
def getTopRumors():
    try:
        jsonData = getTopRumors()
        return jsonify(jsonData)
    except:
        return abort(500)


# if __name__ == "__main__":
#     # Because we care about security :)
#     app.run(host='0.0.0.0',ssl_context=('cert.pem', 'key.pem'))