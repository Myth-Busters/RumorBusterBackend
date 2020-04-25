import datetime
from mongoengine import *
import ast 
from variables import Variables


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
            if 'file_id' in messageDic:
                return [messageDic['file_id']]
            return [messageDic['MediaUrl0']]
        return []

    def getBody(self, *args, **kwargs):
        return  ast.literal_eval(self.message)['Body'] if ast.literal_eval(self.message)['Body'] else ''

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

class Rumor(Document):
  body = StringField(min_length=Variables.min_body_length)
  image_url = StringField()
  image_local_path = StringField()
  image_hash = StringField()
  video_url = StringField()
  report_counter = IntField()

class Fact(Document):
  body = StringField()
  rumor = ReferenceField(Rumor, required=True)
  status = IntField(default=0)
  created = DateTimeField(default=datetime.datetime.now)

class Query(Document):
  media_type =  StringField()# e.g. image/jpeg
  sms_message_id = StringField()
  num_media = StringField()
  sms_id = StringField()
  sms_status = StringField()
  body = StringField()
  to_num = StringField()
  num_sug = StringField()
  message_id = StringField()
  account_id =StringField()
  from_num = StringField()
  ip_address = StringField()
  image_url = StringField()
  image_local_path = StringField()
  image_hash = StringField()
  video_url = StringField()
  ip_address = StringField()
  linked_rumor = ReferenceField(Rumor)
  query_type = IntField() # "this can either be REPORT or CHECK or Other"
