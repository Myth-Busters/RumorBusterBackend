from flask import Flask, request, abort, jsonify
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.executors.pool import ThreadPoolExecutor, ProcessPoolExecutor

app = Flask(__name__)

import wtBot 
import tgBot
import api


executors = {
    'default': ThreadPoolExecutor(16),
    'processpool': ProcessPoolExecutor(4)
}

 
sched = BackgroundScheduler(timezone='Asia/Seoul', executors=executors)
sched.add_job(jobToCheckAnalyzingScheduler, 'interval', seconds=1)

@app.route('/', methods=['GET'])
def index():
    return str('Hello World!')

if __name__ == "__main__":
    # Because we care about security :)
    #TODO: lol, I broke your security pleaaase fix it I don't know how . < Dew
    # app.run(host='0.0.0.0',ssl_context=('cert.pem', 'key.pem'))
    bot.sched.start()
    app.run()