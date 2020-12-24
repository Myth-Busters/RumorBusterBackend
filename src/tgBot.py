from variables import Variables
from services import *
import telegram
from main import app
import urllib.request
from flask import Flask, request
from communication import sendTGMessage, prepareTGMessage
bot = telegram.Bot(Variables.bot_token)

def set_webhook():
    contents = urllib.request.urlopen("https://api.telegram.org/bot"+Variables.bot_token+"/setWebHook?url="+Variables.URL).read()

@app.route('/telBot', methods=['POST'])
def telBot():
    try:
        update = str(telegram.Update.de_json(request.get_json(force=True), bot))
        recMsg = unifiedMessageString(update, bot)
        reqer = getRequester(recMsg['From'])
        m = commander(recMsg, reqer)
        if m:
           sendTGMessage(prepareTGMessage([],m, reqer.phoneNumber))
    except Exception as e:
        print('error:')
        print(e)
        return ''
    return ''
