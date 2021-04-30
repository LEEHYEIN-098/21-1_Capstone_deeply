# 9주차 WIL
---

< 라즈베리파이 원격으로 연결 >  

boot 최상위 폴더에
1 ssh 파일 생성, 내용은 없음 (ssh 통신 위함)
2 wpa_supplicant.conf 파일 생성, 내용은:  
`ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=GB
    
network={
          ssid="{와이파이 이름}"
          psk="{비밀번호}"
}`
country 필요한지는 불확실. 나중에 확인해볼 것

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



