# 9주차 WIL

< 라즈베리파이 원격으로 연결 >  

boot 최상위 폴더에  
1) ssh 파일 생성, 내용은 없음. (ssh 통신 위함)  
2) wpa_supplicant.conf 파일 생성, 내용은:
```
    ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
    update_config=1
    country=GB
    
    network={
          ssid="{와이파이 이름}"
          psk="{비밀번호}"
    }
```
(country 필요한지는 불확실. 나중에 확인해볼 것)

---  

1. 웹과 WebCam 연결

`$ sudo nano /etc/uv4l/uv4l-uvc.conf`

    ///
    server-option = --enable-www-server=yes
    server-option = --www-root-path=/usr/share/uv4l/demos/facedetection/ => 웹페이지 폴더 경로 지정해줌
    server-option = --www-port=80 => 새로운 포트 파기
    server-option = --www-webrtc-signaling-path=/webrtc => uv4l streaming server에서 연결해주는 부분

2. signalling js 코드 수정

`force_hw_codec=false`로 변경

---  

< wiringpi 최신 버전 설치 >  
https://hoho325.tistory.com/212  
(특별한 에러 없이 진행됨.)

< wiringpi 참고 >  
* pin 모드 설정하기  
`pinMode(pin, INPUT/OUTPUT)`   

* pin에 값 쓰기  
`digitalWrite(pin, value)`  
이 함수를 통해 원하는 pin에 값을 쓸 수 있다.  
pin 번호는 setup 함수에 따라서 BCM이 될 수도, wpi 번호가 될 수도 있습니다.  
주로 핀 모드가 OUTPUT일때 사용.  

https://hoho325.tistory.com/218?category=780775  

