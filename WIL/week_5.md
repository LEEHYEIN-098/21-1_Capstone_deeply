### RTMP (Real Time Message Protocol)


### http -> https 변경 시도
1. 인증키, 인증서 생성  
  $ openssl genrsa -out selfsign.key 2048 && openssl req -new -x509 -key selfsign.key -out selfsign.crt -sha256
  
2. uncomment the three SSL lines on /etc/uv4l/uv4l-uvc.conf  
  LIKE THIS:  
/// HTTPS options:  
server-option = --use-ssl=yes  
server-option = --ssl-private-key-file=/home/pi/selfsign.key  
server-option = --ssl-certificate-file=/hime/pi/selfsign.cert  
{참고} https://www.raspberrypi.org/forums/viewtopic.php?t=200326

3. reboot 후 터미널에 uv4l --driver raspicam --server-option '--use-ssl=yes'

4. NET::ERR_CERT_AUTHORITY_INVALID 에러


### h264로 코덱 변경 -- 웹캠 딜레이 문제 해결 위해
uv4l-raspicam.conf에는 encoding 옵션 있으나 uv4l-uvc.conf에는 옵션 없음. 방법 구글링ing


### 노트북에서 로컬호스트 웹캠 연결
$ uv4l --external-device  
[server] invalid video device


-------
UV4L 실제, 가상 비디오 입력 및 출력 장치를 위한 video4Linux2호환 크로스 플랫폼
