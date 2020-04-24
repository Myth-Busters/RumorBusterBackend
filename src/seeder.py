from mongoengine import *
from variables import Variables
from rumor import Rumor, Fact
import ast

connect(Variables.databaseName)

if Variables.seed:
    with open('../RumorsFacts.json') as dataFile:
        data =  ast.literal_eval(dataFile.read())
        for rumor in data:
            existingRumor = Rumor.objects(body = rumor['Rumors']).first()
            if not existingRumor:
                r = Rumor(body = rumor['Rumors']).save()
                if len(rumor['Facts']) > 0:
                    f = Fact(body = rumor['Facts'], rumor = r).save()
