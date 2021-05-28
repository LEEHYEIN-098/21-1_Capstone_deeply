# 13주차 공부한 내용 정리

-외부에서 라즈베리파이 접속하도록 포트포워딩 : 지금 사용하고 있는 공유기는 외부 인터넷과 연결이 되어있지 않아 외부에서 접속 불가.  
=> 가정용 공유기로 시도 or 이더넷 연결 가능한 장소 찾기  
-카메라/팔 모터 제어  



**< PWM – For controlling speed >**  
The speed of a DC motor can be controlled by varying its input voltage. A common technique for doing this is to use PWM (Pulse Width Modulation)  
https://lastminuteengineers.com/l298n-dc-stepper-driver-arduino-tutorial/



**< 모터 >**  
서보모터는 각도 조절 <- 눈, 팔  
	- 제한된 범위 내에서 축을 일정한 각도로 회전.  
	- 아두이노에서 직접 각도 지정 가능  
DC모터는 회전 <- 다리  



**< 라즈베리파이 포트포워딩 >**  
0. 다중 접속 가능  
라즈베리파이의 기본 운영체제인 라즈비안은 리눅스 기반의 운영체제인데  
리눅스가 기본적으로 다중 사용자(Multi User)를 지원하므로  
여러명의 사용자가 각각 원격 접속을 통해 메인 PC에서 라즈베리파이에 접속 할 수 있습니다.  
즉, 동시에 두명 이상의 사용자가 라즈베리파이의 자원을 사용할 수 있다는 뜻입니다.  

1. 라즈베리파이 고정 ip 할당  
https://ansan-survivor.tistory.com/44  

2. 공유기에서 라즈베리파이 ip를 포트포워딩  
https://bebutae.tistory.com/58



**<  포트포워딩 설명 잘 돼있다 >**  
하지만 이는 지구상의 모든 네트워크 기기를 커버하기에는 부족한 숫자입니다.  

따라서 공인IP를 입력받는 공유기에 기기들을 추가로 연결하여 내부 네트워크를 구축하게 되는데  
이 때 공유기에서는 각 기기들에 사설IP를 별도로 발급하게 됩니다.  

우리가 라즈베리파이에 원격 접속할때 사용한 IP가 바로 공유기에서 발급한 사설IP입니다.  
https://bebutae.tistory.com/58



**< custom page 열기 위해 >**  
`uv4l -k --sched-rr --mem-lock --config-file=/etc/uv4l/uv4l-uvc.conf --driver uvc --driver-config-file=/etc/uv4l/uv4l-uvc.conf --server-option=--editable-config-file=/etc/uv4l/uv4l-uvc.conf --device-id 046d:0825`



**< 서보모터 움직이는 예제-xiaoRgeek >**  
http://www.wifi-robots.com/forum.php?mod=viewthread&action=printable&tid=29023  



**< 서보모터 각도 >** - 1,2,3,4는 팔/ 7,8은 카메라  
서보4(집게) 40-90  
서보3(손목) 0-180  
서보8(카메라 바닥) 40-120  

다른 서보들은 모두 15-160으로 추정.  



**< 동적 라이브러리 파일의 함수 살펴보기 >**  
nm [동적 라이브러리 파일].so 하면 함수 목록 출력된다  
XR_Servo같은 함수 있을 거임



**<>**  
ARM은 프로세서.  
라즈베리파이ip를 고정시키고, 그 ip를 ddns로 도메인 만들어야하나  
-> 실제로 서비스 제공할 것 아니라서 필요 없을 듯.
