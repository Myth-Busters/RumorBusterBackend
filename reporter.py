from PIL import Image
import imagehash
import requests

def is_rumor(body, image_url, video, reporter_number, message_id):
  if video:
    return "Video checking is not supported"
  if (image_url != ""):
    img = Image.open(requests.get(image_url, stream = True).raw)
    hash1 = imagehash.average_hash(img)
    print(hash1)
    rumors = 31 // #TODO make actual look up
  elif body != "":
    if len(body) < 150:
      return "false input"
    //check if rumor is exists and is above 30
    reports = 31 // #TODO body look up
    //if it has over 30 reports it is spam
  reports = 31 // stub everything is a rumor
  if reports > 31: 
    return True
  return False

def report_rumor(text, image, video, reporter_number, message_id):
  pass  
print(is_rumor("", "https://api.twilio.com/2010-04-01/Accounts/AC5dd325b6e68341ada8cd4d9a98d7965e/Messages/MMfcdc07712e75dd92a16275d56c1adebe/Media/MEcee71752657ee7554447c5d341a8a881", 1, 1, 1))
