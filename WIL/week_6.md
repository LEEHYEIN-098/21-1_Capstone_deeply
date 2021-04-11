# 6주차 Week I learned

* 외부 컴퓨터에서 라즈베리파이 ip 서버 연결하는 방법

 1) 먼저 서버 죽이기
  
     `sudo pkill uv4l`

 2) external 문구 추가하여 서버열기
 
      `sudo uv4l --external-driver --device-name=video0 --server-option '--port=9090'`


* 라즈베리파이 변경 후 ip : 192.168.1.46

  => 외부 컴퓨터에서 uv4l streaming server 들어갈 때 `192.168.1.46:9090` 으로 들어가야함
  여전히 invalid video device
  
* 우리 webcam device ID: 0c33:6344
 
 driver 확인 `uv4l -driver uvc -device-id 0c33:6344` 
 
 error: --device-path or --device-id not specified. 
  
 -------
 
 
 ## 라즈베리파이 외부에서 카메라 연결 성공 & 카메라에 딜레이 아예 없음
 
 * **서버 여는 방법(순서)**
 
 우리 서버 192.168.1.46:9090
 
 `sudo nano /etc/uv4l/uv4l-uvc.conf` (계속 까먹어서 써놓은 것!)
 
 uv4l uvc 도움말 요청하는 코드 `uv4l --help --dervier uvc --driver-help`(참고용!)

(이미 서버를 열었었다면 `pkill uv4l` 먼저 해줘야함)

1) `uv4l --auto-video_nr --driver uvc --device-id 0c33:6344`(--device-path 0c33:6344와 같다.)

   => *uvc 디바이스의 고유 id를 직접 지정해준후 detect 된 것이라서 바로 연결이 가능*
   
2) 외부 서버 여는 코드

   => `uv4l --external-driver --device-name=video1 --server-option '--port=9090'`
   
   {직접 연결해주어서인지 time lag 현상이 아예 없어졌다.}
   
 
 => call 불러왔는데 카메라에 초록창 이상한 화면이 뜬다? => 그냥 조금 쉬었다가 reboot! (또 안되면 test하면서 reboot 계속 해주면 다시 정신차림)
 
   (일단 초록 화면이 들어왔다는건 device detected는 된 듯함 종종 이러는데 원인은 잘 모르겠음!)
 
 
 ----------

## [속보]웹캠 고장 (21/04/06)

<img src="/image/IMG_1800.jpg" width="40%">  
정상 연결 상태라면 빨간 불이 들어와야 함.  
usb 카메라를 노트북에 연결 해보아도 불이 들어오지 않음.  

<img src="/image/IMG_1801.jpg" width="40%">  
(6주차 WIL 참고) 카메라 연결 과정의 일부 코드. "No device detected"

 ----------
 
# 로지텍 C270i 웹캠 구매 (21/04/08)
 
* 현재 연결되어 있는 카메라 확인  
	`$ lsusb | grep cam`  
	Bus 001 Device 006: ID 046d:0825 Logitech, Inc. Webcam C270

* 백그라운드에서 실행되고 있는 프로세스 확인  
	`$ ps -ef | grep uv4l`  
	-e 모든 프로세스  
	-f 자세히  
	
* 프로세스 종료  
	`$ (sudo) kill 15 [PID]`  
	15는 종료, 9는 강제 종료  
	
* 카메라 모든 정보 확인  
	`$ v4l2-ctl --list-formats-ext`(수정)  

<img src="/image/IMG_1822.jpg" width="40%"> Firefox
<img src="/image/IMG_1823.jpg" width="40%"> Chrome  
왜 또 안 될까..😞  

 ----------
 
(21/04/09)
* /dev/video0에 uvc camera 올리기  
	`$ sudo modprobe uvcvideo`  
이후 웹캠에 불 들어옴  

* **(같은 공유기에서 와이파이로 연결된) 외부 컴퓨터에서 접속할 서버 열기**
1. `$ uv4l --auto-video_nr --driver uvc --device-id 046d:0825`  
    주의) port 작성하지 않을 것. 작성 시 external-driver 하면 이미 사용 중이라는 에러.  
2. `$ uv4l --external-driver --device-name=video0 --server-option '--port=9090'`  

현재 상태; **ONLY AUDIO WORKS WITH GREEN/RED MOSAIC SCREEN**

[WebRTC hangout video input broken, gives a green screen](https://bugs.chromium.org/p/chromium/issues/detail?id=399939#c22)
