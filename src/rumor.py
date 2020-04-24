from mongoengine import *
import datetime
from variables import Variables

class Rumor(Document):
  body = StringField(min_length=Variables.min_body_length)
  image_url = StringField()
  image_local_path = StringField()
  image_hash = StringField()
  video_url = StringField()

class Fact(Document):
  body = StringField()
  rumor = ReferenceField(Rumor, required=True)
  status = IntField(default=0)
  created = DateTimeField(default=datetime.datetime.now)