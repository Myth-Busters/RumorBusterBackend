import ast

class Variables:
     with open('/home/talalnks/RumorBusterBackend/config.json') as dataFile:
        config =  ast.literal_eval(dataFile.read())
        secondsToWaitBeforeSendingSameMessage = config['logic']['secondsToWaitBeforeSendingSameMessage']
        secondsToIncreaseSchedulerTimeBy = config['logic']['secondsToIncreaseSchedulerTimeBy']
        QueueLimitPerRequester = config['logic']['QueueLimitPerRequester']
        min_body_length = config['logic']['min_body_length']
        account_sid = config['tokens']['account_sid']
        auth_token = config['tokens']['auth_token']
        whatsappSender=config['bots']['whatsappSender']
        databaseName = config['database']['name']
        bot_token = config['tokens']['bot_token']
        bot_user_name = config['bots']['telegramBotName']
        URL = config['links']['server'] + config['links']['telegramBot']
        BOT_URL = config['links']['telegramApi']+bot_token+'/'
        DB_CONNECTION = config['database']['connection']
        seed = True
