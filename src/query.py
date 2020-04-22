from mongoengine import *
from rumor import Rumor
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
