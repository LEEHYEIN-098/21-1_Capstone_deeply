# WIL week 7

---

* 6주차 말(교수님과 미팅 사항)
    
      external driver 쓴다는 의미? (우리가 이해한 내용 => 외부 컴퓨터로 net 망으로 영상 전송 과정)
      {교수님 피드백 사항} uv4l-uvc로 하다가 웹캠이 mjpeg 기능이 잘 안되는 경우, 
      kernel driver로 바꾸어서 uvc video를 사용할 때, 새로운 하나의 드라이버를 만들어서 쓴다는 의미
      =>{결론} 지금처럼 MJPEG기능이 잘되는 logitech 웹캠은 external driver 쓸 필요가 없다
      
---

< https://www.linux-projects.org/uv4l/tutorials/webrtc-data-channels/ 에서 참고할 만한 부분 >
- For instance, all this can be extremely useful for remotely controlling the servo motors of a robot from a Web application with a few lines of Javascript code based the standard WebRTC API, which is now supported by any modern browser

- e.g. commands may be sent in form of messages from the user interface to the device, where the messages could be actuated by translating them into real OS commands. 
  UI에서 디바이스로 메세지 형태의 커맨드를 보내고, 이 메세지들은 real OS 커맨드로 번역되어 실행된다
  
- In order to communicate with UV4L, the only requirement on the local application is that it has to create the Unix Domain Socket, listen and accept incoming connections (from UV4L).
  uv4l로 통신할 때 반드시 UDS로.
  
  
< 양방향 통신; 에코 서버 >
`pi@raspberrypi:~ $ datachannel_server /tmp/uv4l.socket`
To quickly test the bidirectional data channels through the Web interface, open the WebRTC Web page at the UV4L Streaming Server. There you will see a “Data Channel” section with an input and an output text fields inside. Start an audio/video call as usual. At this point the data channel should be opened too, fill the input field with any message and click on the send button to send it to the echo server. You will immediately receive the same message back and have it displayed on the output field.

< 라즈베리 파이 웹캠 위키 >
http://wiki.bitplan.com/index.php/Raspberry_PI_WebCam

< 라즈베리파이에서 웹캠 사용하기 >
	1. 시작 바에서 기본설정≻RaspberryPi Configuration>창이 뜨면 Interfaces 탭 선택 후 Camera Enable Disable 중에 Enable 이 설정되어 있다면 이는 PiCamera 설정에 해당하므로 Disable을 선택하도록 하자. 즉 PiCamera 사용 안함이란 뜻이다.
	2. 로지텍 C270의 frame rate는 고정된 값 30을 가지며 PiCamera에서처럼 임의로 설정 불가하다.
[출처 https://blog.daum.net/ejleep1/996]

apt update는 패키지 버전에 대한 정보를 최신으로 업데이트만 진행(실제 설치는 안함)
apt upgrade는 현재 컴퓨터에 설치된 패키지 중에 업데이트된 버전이 있으면 실제로 업그레이드 설치를 진행
