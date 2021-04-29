# 9주차 WIL
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



