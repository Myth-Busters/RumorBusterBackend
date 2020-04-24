from mongoengine import *

class Rumor(Document):
  body = StringField(min_length=150)
  image_url = StringField()
  image_local_path = StringField()
  image_hash = StringField()
  video_url = StringField()
  report_counter = IntField()
