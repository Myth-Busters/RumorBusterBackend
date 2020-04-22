from flask import Flask, request, abort, jsonify

app = Flask(__name__)

import bot 
import api

@app.route('/', methods=['GET'])
def index():
    return str('Hello World!')


if __name__ == "__main__":
    # Because we care about security :)
    #TODO: lol, I broke your security pleaaase fix it I don't know how . < Dew
    # app.run(host='0.0.0.0',ssl_context=('cert.pem', 'key.pem'))
    bot.sched.start()
    app.run()