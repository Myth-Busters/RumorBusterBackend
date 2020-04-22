import datetime
from mongoengine import *
import ast 

class Requester(Document):
    phoneNumber = StringField(required=True, max_length=50)
    origin = StringField(required=True, max_length=50)
    lang = StringField(default = 'ar')
    seenGreetingMessage = BooleanField(default = False)
    status = IntField(default=0)
    created = DateTimeField(default=datetime.datetime.now)

class Request(Document):
    message = StringField(required=True)
    requester = ReferenceField(Requester, required=True)
    created = DateTimeField(default=datetime.datetime.now)
    status = IntField(default=0)  # 0: no type assigned yet | 1: request | 2:  

    def getImage(self, *args, **kwargs):
        messageDic = ast.literal_eval(self.message)
        numMedia = int(ast.literal_eval(self.message)['NumMedia']) 
        if numMedia > 0:
            return [messageDic['MediaUrl0']]
        return []

    def getBody(self, *args, **kwargs):
        return ast.literal_eval(self.message)['Body']

class RequestQueue(Document):
    requester = ReferenceField(Requester, required=True)
    requests = SortedListField(ReferenceField((Request), ordering="created", reverse=True))
    status = IntField(default=1) # 0 locked | 1 unlocked
    created = DateTimeField(default=datetime.datetime.now)

class AnalyzingScheduler(Document):
    requester = ReferenceField(Requester, required=True)
    check_at = DateTimeField(required = False)
    check = IntField(default=0) # do I check or not? 0 no | 1 yes
    created = DateTimeField(default=datetime.datetime.now)

class MessagesSent(Document):
    requester = ReferenceField(Requester, required=True)
    request = ReferenceField(Request, required=False)
    extra = StringField(required=False, max_length=500)
    messageType = StringField(required=True, max_length=300)
    created = DateTimeField(default=datetime.datetime.now)
                            