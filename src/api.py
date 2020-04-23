from flask import Flask, request, abort, jsonify
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import re, json
from __main__ import app

# app = Flask(__name__, static_url_path='/static', template_folder='templates')


# Rate limit
limiter = Limiter (
    app,
    key_func=get_remote_address,
    default_limits=["14400 per day", "300 per hour", "100 per minute"]
)


@app.route("/", methods=['GET','POST'])
@limiter.limit("14400/day;300/hour;100/minute")
def root():
    return "Bruhhhhh!!"


@app.route("/rumor", methods=['POST'])
@limiter.limit("14400/day;300/hour;100/minute")
def rumor():
    try:
        content = request.json
        text = content['text']
        img_url = content['imgurl']
        payload = content['payload']

        # Sanitation
        text = re.sub(r'[\W_]+', '', text)
        # img_url spatial sanitization, I assume '?' is also going to be prohibited
        img_url = re.sub(r"[-()\"#@;<>{}`+=~|.!?,]", '', img_url)
        payload = re.sub(r'[\W_]+', '', payload)

        # Fawaz calls
        pass


        return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}
    except:
        return abort(500)


@app.route("/api2", methods=['POST'])
@limiter.limit("14400/day;300/hour;100/minute")
def api2():
    try:
        content = request.json
        text = content['text']
        img_url = content['imgurl']
        payload = content['payload']

        # Sanitation
        text = re.sub(r'[\W_]+', '', text)
        # img_url spatial sanitization, I assume '?' is also going to be prohibited
        img_url = re.sub(r"[-()\"#@;<>{}`+=~|.!?,]", '', img_url)
        payload = re.sub(r'[\W_]+', '', payload)

        # Fawaz calls
        pass


        return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}
    except:
        return abort(500)


@app.route("/api3", methods=['GET'])
@limiter.limit("14400/day;300/hour;100/minute")
def api3():
    try:
        # Get data from the database
        # data = function()

        # A sorted array of data \/
        jsonData =   {
        "results": [
            {"rumour":"Hello World.", "id":1},
            {"rumour":"Hello World.", "id":2},
            {"rumour":"Hello World.", "id":3},
            {"rumour":"Hello World.", "id":4},
            {"rumour":"Hello World.", "id":5},
            {"rumour":"Hello World.", "id":6}
            ]
        }
        # jsonData =          {'success': True}
        return json.dumps(jsonData), 200, {'ContentType': 'application/json'}
    except:
        return abort(500)


# if __name__ == "__main__":
#     # Because we care about security :)
#     app.run(host='0.0.0.0',ssl_context=('cert.pem', 'key.pem'))