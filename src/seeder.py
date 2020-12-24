from mongoengine import *
from variables import Variables
from models import Fact, Rumor
import ast
import random

connect(host=Variables.DB_CONNECTION)

if Variables.seed:
    with open('/home/talalnks/RumorBusterBackend/RumorsFacts.json') as dataFile:
        data =  ast.literal_eval(dataFile.read())
        for rumor in data:
            existingRumor = Rumor.objects(body = rumor['Rumors']).first()
            if not existingRumor:
                r = Rumor(body = rumor['Rumors'], report_counter = random.randint(25,150)).save()
                if len(rumor['Facts']) > 0:
                    f = Fact(body = rumor['Facts'], rumor = r).save()
