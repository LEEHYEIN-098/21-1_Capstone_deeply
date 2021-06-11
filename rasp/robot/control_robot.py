# coding:utf-8

import os
import time
import RPi.GPIO as GPIO
from _XiaoRGEEK_SERVO_ import XR_Servo
import json
import socket
import motor as mtr
Servo = XR_Servo()

socket_path = '/tmp/uv4l.socket'

try:
    os.unlink(socket_path)
except OSError:
    if os.path.exists(socket_path):
        raise

s = socket.socket(socket.AF_UNIX, socket.SOCK_SEQPACKET)

## init gpio
GPIO.setmode(GPIO.BCM)
IN1 = 19  # right-forward
IN2 = 16  # right-backward
ENA = 13  # right-pwm
IN3 = 21  # left-forward
IN4 = 26  # left-backward
ENB = 20  # left-pwm
GPIO.setup(IN1, GPIO.OUT, initial=GPIO.LOW)
GPIO.setup(IN2, GPIO.OUT, initial=GPIO.LOW)
GPIO.setup(ENA, GPIO.OUT, initial=GPIO.LOW)
GPIO.setup(IN3, GPIO.OUT, initial=GPIO.LOW)
GPIO.setup(IN4, GPIO.OUT, initial=GPIO.LOW)
GPIO.setup(ENB, GPIO.OUT, initial=GPIO.LOW)
ENAp = GPIO.PWM(ENA, 100) # pin, frequency
ENBp = GPIO.PWM(ENB, 100)
ENAp.start(50)
ENBp.start(50)
def ENAset(Aspeed): ENAp.ChangeDutyCycle(Aspeed)
def ENBset(Bspeed): ENBp.ChangeDutyCycle(Bspeed)
##


#print('socket_path: %s' % socket_path)
s.bind(socket_path)  # 소켓 맵핑
s.listen(1)  # 연결 요청 대기 상태 설정


while True:
    print('awaiting connection....')
    connection, client_address = s.accept()  # 연결 승낙 후 실제 통신 소켓 반환
    #print('client_address %s' %client_address)
    try:
        print('connection established')

        while True:
            data = connection.recv(30)  # 소켓 데이터 수신
            # print('received message %s' % data)
            jsondata = json.loads(data)
            datalist = list(jsondata.items())  # jsondata: dictionary
            print(datalist)
            str = datalist[0][0]
            arrow = 0

            ## Control DC Motor
            if str == 'speed':  # 0/2
                speed = datalist[0][1]
                if speed == 0:  # low
                    print("LOW speed")
                    ENAset(50)
                    ENBset(50)
                elif speed == 2: # high
                    print("HIGH speed")
                    ENAset(100)
                    ENBset(100)
            elif str == 'keycode':
                arrow = int(datalist[0][1])
                if arrow == 38:
                    print("Go Forward")
                    mtr.forward()
                    time.sleep(0.05)
                    mtr.stop()
                elif arrow == 37:
                    print("Turn Left")
                    mtr.left()
                    time.sleep(0.05)
                    mtr.stop()
                elif arrow == 40:
                    print("Go Backward")
                    mtr.backward()
                    time.sleep(0.05)
                    mtr.stop()
                elif arrow == 39:
                    print("Turn Right")
                    mtr.right()
                    time.sleep(0.05)
                    mtr.stop()
            
            ## Control Arm/Camera Servo Motor
            elif str == 'range':
                servoNum = datalist[1][1]
                angle = int(datalist[0][1])
                if servoNum == 0: ## Reset Servo
                    Servo.XiaoRGEEK_ReSetServo()
                Servo.XiaoRGEEK_SetServoAngle(servoNum, angle)
                
            ## ERROR OCCURS
            if data:
                # print('echo data to client')
                connection.sendall(data) # 누구한테 보내는거삼
            else:
                print('no data from', client_address)
                break

    finally:
        ENAp.stop()
        ENBp.stop()
        GPIO.cleanup()
        connection.close()
