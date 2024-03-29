messages = {   
        'greetingmessage' : {
            'ar':'أهلًا! ' \
                + '\n أنا هنا من أجل مساعدتك للتحقق من صحة الأخبار والشائعات أو لإرسال بلاغ عن شائعة. '  \
                + 'تستطيع إعادة توجيه الرسائل إليّ لأقوم بتحليلها,' + ' ويمكنك إعادة توجيه أكثر من رسالة لي في نفس الوقت.' \
                + '\n \n For English, please send 0 at any time',
            'en': "Hello!" \
                + "\n This is (name of the bot), I'm here to assist you with verifying rumors or to report them. " \
                + "You can forward me messages to analyze them. You can forward me as many messages as you like" \
                + "\n\n للعربية، يرجى إرسال 0 في أي وقت"
        },

        'langChange' : {
            'ar':'أتحدث العربية الآن!',
            'en': 'I speak English now!'
        },

        'noProcessingForYou' : {
            'ar': 'هممم، يبدو انك ما اعطيتني معلومات كافية حتى أحللها.' \
                + '\n تقدر ترسلي نصوص طويلة أو صور أو مقاطع فيديو !',
            'en':"hmmm, it looks like you did not provide enough information for me. " \
                + '\n you can feed me long text, pictuers or videos too!'
        },

        'inProgressMessage' : {
            'ar':'أقوم الآن بتحليل الرسائل التي قمت بأرسلها سابقًا،' \
                + ' تستطيع ارسال رسائل جديدة حالما أنتهي من جميع الرسائل من التحقق',
            'en': "I'm analyzing your messages now" \
                + "once I'm done with the messages you have fed, you can send new ones"
        },

        'subMessage' : {
            'ar' : 'أرسل 1 إذا أردت من التحقق من صحة الرسائل التي أرسلتها'  \
                +  '\n"*أو*"' \
                + '\n أرسل 2 اذا اردت التبليغ عنها بأنها اشاعات',
            'en' : 'send 1 to check for the validity of the messages you sent me' \
                + '\n "*OR*"' \
                + '\nsend 2 if you want to report these messages as verified rumors'
        },

        'noDefiniteAnswerMessage' : {
            'ar': 'لم أستطع التحقق من صحة هذه الرسالة',
            'en': 'I could not verify the validity of this message'
        },

        'itIsRumorMessage' : {
            'ar': 'هذه الرسالة إشاعة',
            'en': 'This message is a rumor '
        },

        'itIsNotRumorMessage' : {
            'ar': 'هذه الرسالة ليست إشاعة',
            'en': 'This message is not a rumor'
        },

        'doneWithQueueMessages' : {
            'ar': 'عظيم! قمت بتحليل جميع الرسائل التي ارسلتها لي، شكرًا لك!!',
            'en': 'Awesome! Just completed validating all the messages you sent. Thank you!'
        },

        'doneWithRumorsSubmissionMessage' : {
            'ar': 'تم التبليغ بنحاج عن جميع الإشاعات بنجاح' \
                + '\n\n شكرًا لحرصك على مصادقية المعلومات على الإنترنت',
            'en': 'Successfully, reported all rumors.' \
                + '\n\n Thank You for helping in cleaning up the internet! '
        },

        'doneWithRumorsSubmissionMessageApp' : {
            'ar': 'تم التبليغ بنحاج عن الإشاعة بنجاح' \
                + '\n\n شكرًا لحرصك على مصادقية المعلومات على الإنترنت',
            'en': 'Successfully, reported the rumor.' \
                + '\n\n Thank You for helping in cleaning up the internet! '
        },


        'exceededLimitMessage': {
            'ar': 'لقد أرسلت الحد الأعلى لعدد الرسائل التي تستطيع التحقق منها دفعة واحدة.' \
                + '\n يرجى الإنتظار ريثما أقوم بالتحقق من الرسائل من ثم تستطيع إرسال رسائل جديدة',
            'en': 'You exceeded the limit of messages you can validate in a single time' \
                +'\n Please wait while I get back to you with the messages you sent, and then you can send me more.'
        },

        'invalidCommand': {
            'ar': 'همم، يبدو انك أدخلت أمر خاطئ',
            'en': 'Hmm, it looks like you entered an invalid command'
        }
}