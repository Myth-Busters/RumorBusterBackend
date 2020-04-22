from mongoengine import *
import requests
from werkzeug.datastructures import CombinedMultiDict, MultiDict, ImmutableMultiDict
from PIL import Image
import imagehash
from query import Query
from rumor import Rumor
import os
import ast
from variables import Variables
IMAGES_DIR = "images"

    
def save_media(img_url, media_type):
  #let's grab our media first
  image_local_path = ""
  extension = media_type.split("/")[1]
  try:
    img= Image.open(requests.get(img_url, stream = True).raw)
    if not os.path.exists(IMAGES_DIR):
      os.mkdir(IMAGES_DIR)
    image_local_path = IMAGES_DIR +"/" + img_url.replace(":", "").replace("/","").replace(".","").replace("-", "")
    result = img.save(image_local_path + "." +extension)
  except Exception as e:
    img = 404
  if img != 404:
    hash = str(imagehash.average_hash(img))
  else:
    hash = ""
  return image_local_path, hash
  
def register_request(query_dic, flag):
  image_local_path, hash = None, None
  if query_dic.get("NumMedia") == '1':
    image_local_path, hash = save_media(query_dic.get("MediaUrl0"), query_dic.get("MediaContentType0"))
  
  query = Query(media_type = query_dic.get("MediaContentType0"))# e.g. image/jpeg
  query.sms_message_id = query_dic.get("SmsMessageSid")
  query.num_media = query_dic.get("NumMedia")
  query.sms_id = query_dic.get("SmsSid")
  query.sms_status = query_dic.get("SmsStatus")
  query.body = query_dic.get("Body")
  query.to_num = query_dic.get("To")
  query.num_sug = query_dic.get("NumSegments")
  query.message_id = query_dic.get("MessageSid")
  query.account_id =query_dic.get("AccountSid")
  query.from_num = query_dic.get("From")
  query.ip_address = query_dic.get("IP")
  query.image_url = query_dic.get("MediaUrl0")
  query.image_local_path = image_local_path
  query.image_hash = hash # hash this
  query.video_url = "Not Supported" #get binary in a different field later
  query.ip_address = query_dic.get("IP")
  query.query_type = flag
  query.save()
  return query

def search_if_exists(query):
  if query.num_media == '0': #text based (body)
    rumor = Rumor.objects(body__exact=query.body)
    pass
  #it has media, each pic/video will be sent in an individual request.
  #We are not currently handling video
  elif query.num_media == '1':
    print('----->')
    print(query)
    rumor = Rumor.objects(image_hash__exact=query.image_hash)
  return rumor
  
  return rumor
def handle_request2(request, flag):
  connect(Variables.databaseName)
  
  parsed_req= ast.literal_eval(request)
  query = register_request(parsed_req,flag) #Register the query happened
  rumor = search_if_exists(query) #Find existing rumor
  
  #if the rumor exists link it, otherwise register if it's a report
  if rumor:
    query.rumor = rumor
    query.save()
  elif query.query_type == '3':
    rumor = Rumor(body = query.body, image_url = query.image_url, image_local_path = query.image_local_path, image_hash = query.image_hash, video_url = query.video_url)# e.g. image/jpeg
    rumor.save()
    query.rumor = rumor
    query.save()

  if query.query_type == '1':
    if not rumor:
      return '2' # not a rumor
    else:
      if query.num_media == '0': #text based (body)
        rumor_count = Query.objects(body__exact=query.body, query_type = 2).count # 2 means rumor submission
        pass
      #it has media, each pic/video will be sent in an individual request.
      #We are not currently handling video
      elif query.num_media == '1':
        rumor_count = Query.objects(image_hash__exact=query.image_hash).count()
      print(rumor_count)
      print('Found {} posts with tag "mongodb"'.format(rumor_count))

    #Check if a certain rumor has more than 15 reports
  
def handle_check(query):
  if query.num_media == '0':
    count = Query.objects(body__exact=query.body, query_type = 2).count()
  if query.num_media == '1':
    count = Query.objects(image_hash__exact=query.image_hash, query_type = 2).count()
  if count > 15: # threshold number of spam reports
    return 1 # decider decided it is rumor
  return 2 # we have less reports to what qualified as a rumor 
  
def handle_request(request, flag):
  connect(Variables.databaseName)
  
  parsed_req= ast.literal_eval(request)
  query = register_request(parsed_req,flag) #Register the query happened
  rumor = search_if_exists(query) #Find existing rumor
  if flag == '1': #check
    if not rumor:
      return 3 # not a rumor because rumor does not exist ||  
    return handle_check(query)
  elif flag == '2': #report
    return 3 
  elif flag == '3':#garbage/other
    return 99 # Request will not be processed
# TEST CALL

#handle_request("{'SmsMessageSid': 'SM4f4e64475b5d6788a26f76a9dfc4d441', 'NumMedia': '0', 'SmsSid': 'SM4f4e64475b5d6788a26f76a9dfc4d441', 'SmsStatus': 'received', 'Body': 'ddfsasdfsdfsadfديدddfsasdfsdfsadfديدddfsasdfsdfsadfديدddfsasdfsdfsadfديدddfsasdfsdfsadfديدddfsasdfsdfsadfديدddfsasdfsdfsadfديدddfsasdfsdfsadfديدddfsasdfsdfsadfديدddfsasdfsdfsadfديدddfsasdfsdfsadfديدddfsasdfsdfsadfديد اللي راح يجي', 'To': 'whatsapp:+14155238886', 'NumSegments': '1', 'MessageSid': 'SM4f4e64475b5d6788a26f76a9dfc4d441', 'AccountSid': 'ACfba82004d8ebfe9a436865fe9a78b198', 'From': 'whatsapp:+966590103666', 'ApiVersion': '2010-04-01'}",'1')
