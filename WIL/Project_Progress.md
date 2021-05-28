## 주차별 진행 상황

|주차|월|수|금|기타|
|:----:|:---:|:---:|:---:|:---:|
|2주차||목: 교수님 면담|첨부 ppt 및 로봇 작동 공부|
|3주차|라즈베리파이 환경 설정 및 |UV4L 다운로드 및 서버연결 완료|웹캠 연결|[WIL](./week_2~3.md)|
|4주차|서버 사전 조사|제안서 작성 및 온라인 미팅|제안서 발표|[제안서](./Report/CapstoneProposal.pdf)|
|5주차|https, codec 변경 시도/"외부로부터" 서버 접속(진행중)/웹캠 딜레이 문제(진행중)	| 노트북으로 서버 접속&교수님 면담|(과제가많아서 생략..)|[5주차보고서](../Report/week5.pdf), [WIL](./week_5.md)|
|6주차|UVC 연결 성공, Time lag 현상 해결|웹캠 고장...|영상 스트리밍 시도|[6주차보고서](../Report/week6.pdf), [WIL](./week_6.md)|
|7주차|codelab webrtc 웹 제작한 것 라즈베리파이에서 실행(실패)|uv4l과 web 연결하는 시도 및 datachannel공부||[7주차보고서](../Report/report_7.pdf),[WIL](./week_7.md)|
|8주차|시험기간
|9주차|시험(7주차에 이어 추가 자료조사)|웹에서 UV4L streaming server 연동 성공||[9주차보고서](../Report/report_9.pdf),[WIL](./week_9.md)|
|10주차||https 사용 가능 및 socket 통해 서로 다른 컴퓨터에서 메세지 주고받기|||
|11주차||browser에서 받은 키보드 입력을 python/RPi로 전달|로봇 이동 제어|[11주차보고서](../Report/report_11.pdf),[WIL](./week_10,11.md)|
|12주차|python코드에서 소켓으로 로봇 명령어 받기|uv4l streaming server에서 키코드 json파일 파싱 성공|데모 수정한 페이지에서 로봇 메세지 넘기기 성공(동영상&버튼)|[12주차보고서](../Report/report_12.pdf),[WIL](./week_12.md)|
|13주차|(수) 모터, 서보모터 제어 성공, 웹에 제어 UI 수정|(목) JSON 파일로 웹에서 받아, 각 부분별 dict 정의하여 실행코드 수정|(금)|[13주차보고서](../Report/report_13.pdf),[WIL](./week_13.md)
|14주차||||=>창의SW설계 마감 (6월 4)
|15주차|
|16주차|



* 관련 링크 첨부

https://www.linux-projects.org/

https://raspberrypi.stackexchange.com/questions/76680/u4vl-streaming-to-multiple-web-clients


----------------------------
<details>
    <summary>5주차</summary>
    
### 5주차

* __월요일 목표__
* -[X] 새로운 공유기 변경
* -[ ] ~~https로 변경-> 보안 강화~~  **-> 해결하지 못함 
* -[ ] 딜레이 문제점 알아보고 원인 찾기
* -[X] 외부 컴퓨터에서 서버 열기 **서버는 열었지만 카메라 detected 하지 못함

* __수요일 목표__
* -[ ] 공유기 랜선으로 연결
* -[ ] 외부컴퓨터에서 서버 열기 (카메라와 함께)


* __수요일 교수님 온라인 미팅 메모__


  딜레이가 발생할만한게 -> ~~카메라밖에 없나?~~ -> 해상도 낮춰서 나아졌어
  
  **교수님 요청사항 : 끊김이 아예 없었으면 좋겠어.....라즈베리파이에서 카메라찍어서보내주는 거니까...**
  
  실험 1)해상도낮춰본다. ~~2) 웹캠을 바꿔본다 3) 라즈베리캠으로 바꿔본다.~~ => 끊김 실험은 천천히 해보자..
  
  wifi 붙여서 보내는 것 받아보는것 / 자누스 서버로 다른 거 이용해보는것 / google 서버 써서 webrtc 받아오는것
  
  역할 분담해서 자누스janus, uv4l, google 받아오는 것 나눠보기
  
  *에러는 잡되 진도 나가기,
  
  
  local 완성 하기, 공유기에서 하는 것 완성하기/ ~~웹캠 싼거 이만원... 사서 (드라이버 지원이 잘되는 지 )~~ / ~~충무관 211호 (혜정이 있을 수 ㅎㅎ 라즈베리파이 캠을 빌려달라 )~~

  
  라즈베리에서 컴퓨터로 janus로 RTSP로 보내줘 자누스가 그걸 받아서 요청한 사람에게 webrtc로 뿌려 => 궁극적으로 더 좋아 (janus는 여러명이 볼 수 있으니까 더 유리)
 
  uvc가 문제 일때 라즈베리파이캠을 사용하는 것도 추후에 고려해보자
  
* __수요일 교수님 미팅 이후 진행상황__
*  -[X] 라즈베리파이를 변경해봄 **->라즈베리파이 변경 후가 훨씬 안정적이였음**
*  -[X] 웹캠 문제 확인 **-> 노트북에 연결해본 결과 웹캠 문제는 아니었던 걸로!**
*  -[ ] 다른 방법 강구... google서버와 janus 사용하는 것도 알아보기 (집에가서 알아보자! 월요일까지!!)

 🤔 
 
 time delay, lag 원인 추측 : 라즈베리파이 웹캠에서 영상 얻어올 때 이미지 캡쳐하면서 오는 과정, 이때 모든 이미지가 저장되어 시간이 지나면 메모리가 커져서 멈춤현상 발생하는 듯...!
   
 time delay, lag 해결 방안 : 실시간 스트리밍만 할 것이므로 이미지 저장과정이 필요없을 것 같아 이 코드를 찾고 수정해보면 좋을 것 같음.
 
 다른 컴퓨터에서 서버 열때 카메라 못불러오는 이유 추측 : 라즈베리파이에 직접 연결되서 그렇지 않을까..? 서버에 연결되야해..? 그래야 다른 컴퓨터에서도 캠 영상 불러와지지 않을까?

</details>

-----------

<details markdown="1">
<summary>6주차</summary>


* __공지 사항__ : 

    driver raspicam 쓰지 않기!! (쓰면 해놓은거 헷갈림 우리 확신의 UVC이고, 지정 잘해줬으니까 이대로 진행 시킵시다) **driver-uvc!!**
    
    실행 종료에서도 `sudo service uv4l_uvc restart` 이런식으로 작성 raspicam은 그냥 없는 거라고 생각하기 => 함부로 바꾸면 헷갈려짐.. 주의...부탁드립니다 uvc로 다 열려요!


* __월요일 목표__

* -[X] Time delay, lag 현상 해결 
* -[X] 외부에서 UV4L 화면 열었을 때 실시간 영상 실행
* -[ ] Remote/local 캠 둘다 켜보기 => chrome에는 보안이 세서 https로 지정을 해줘야하고 firefox에서는 실행 가능으로 예상
* -[ ] http=>https로 변경 => 미희 시도 중 .. => 또 실패 !(chrome브라우저를 이용하려면 아무래도 이 과정이 필요한 듯 한데 자꾸 안되네.. )


* __월요일 진행상황__

       교수님 요청 사항 : 1) --verbosity 에러 상황 보고 2) firefox로 웹 한번 켜보기

       😄😄😄😄😄=> 계속 해결 못하던 것 해결했다~~ 
       
       컴퓨터 두세대 접속.. 했으면 좋았을 텐데, 여러 대 접속이 안되는 듯하다.
       (Sorry, the device is either busy streaming to another peer or previous shutdown has not been completed yet)
       이라는 오류가 뜬다... => 우리는 Jauns 로 시도를 해봐야할 것 같다!
       
       https://www.linux-projects.org/uv4l/tutorials/custom-webapp-with-face-detection/ 이게 html해서 사용자 custom하는 튜토리얼로 추정


    **교수님 요청사항**
    
    1) uv4l에 두세개로 동시요청해보아 딜레이 얼마나 느려지는 지 확인해보자 **=> 확인 결과, 여러대 접속이 불가능했음**    _=>Janus 서버 알아봐야함_

    2) webrtc로 컴퓨터에서는 영상을 받고, 컴퓨터에서는 반대로 로봇한테 전후좌우 이동하고 팔 제어 명령 주는 것도 data channel로 해서 해보자. 
        
        =>data channel 공부 해보자!
        
        (=> 일단 janus 연결이 우선일 것 같다!)
        




* __화요일 목표__

세정 ps: 혜이니 컴퓨터로 firefox 브라우저 깔아서 서버 열고 서버 안에 두번째 체크 박스 중에 camera 체크하고 call 한번 불러줘주세영...
(chrome에서 열면 https가 필요하고, firefox에서 열면 굳이 안해줘도 될것같아..)
remote 캠이랑 local 캠이랑 동시에 실행 가능할 것 같은데 firefox 깔다가 용량이 없어서 못깔렸어...ㅜㅜ

+ 교수님께서 같은 컴에서 uv4l 같은 웹페이지 두개 열어도 안되냐고 물어보셨는데 이것도 한번 해줬으면 좋겟어!



* __화요일 진행상황__

1. 혹시 모를 보안 문제에 대비해 라즈베리파이 계정 비밀번호 변경 (pi / deeply)  
~~2. default 환경으로 라즈베리파이의 시간을 동기화 해놓았지만 연결된 공유기는 외부로의 인터넷 연결이 불가하므로 외부 인터넷 이용할 시에는 반드시 직접 동기화할 것.~~  
3. [웹캠 고장](https://github.com/LEEHYEIN-098/21-1_Capstone_deeply/blob/main/WIL/week_6.md#%EC%86%8D%EB%B3%B4%EC%9B%B9%EC%BA%A0-%EA%B3%A0%EC%9E%A5)


* __~~수~~금요일 목표__

*  -[ ] ~~Janus gateway 지정해주고 다중 스트리밍 구축하기 (딜레이도 확인하기)~~  
*  -[ ] 영상 스트리밍 잡기  

* __~~수~~금요일 진행상황__  
  
1. https는 왜 안되나  
2. 인코딩 변경 시도  
3. webrtc라서 안 되는거 아닐까? mmfpeg으로 영상 스트리밍 시도 - 시간 부족..  
  
영상 스트리밍 안 되는 건 카메라(로지텍 웹캠) 문제로 예상  


</details>


---
<details markdown="1">
<summary>7주차</summary>

* __월요일 목표__
* -[ ] 컴퓨터에서 webRTC datachannel로 로봇에 명령어 보내기(양방향 통신 시도)'

=> 로봇을 조종해서 움직이면 카메라로 실시간 화면 보여지는 것 보자 ! 



</details>

---

<details markdown="1">
<summary>8주차</summary>

시험기간.


</details>

---

<details markdown="1">
<summary>9주차</summary>

* __교수님께 data channel 도움 요청__

       웹 브라우저에서 datachannel 하는 것부터 해보자,
       아래 첨부해주신거 데모 버전 실행해보고 소스 코드 구해서 이해한 다음 웹프로그래밍 해서 라즈베리 파이가 잘 받도록 해보자
     
     
 교수님께서 주신 참고 자료
 
 https://developers.google.com/web/updates/2013/02/WebRTC-RTCDataChannel-demo-API-changes-and-Chrome-talks-to-Firefox
 
 참고자료 작성하신 분 깃허브 주소
 
 https://github.com/samdutton/simpl/blob/gh-pages/rtcdatachannel/js/main.js
       
       
* __월요일 목표__
* -[X] datachannel Control 하는 참고 자료 더 찾아보기
* -[ ] UV4L 영상 웹에서 연결하는 방법 알아보기

찾은 참고 자료 블로그 링크

https://webrtchacks.com/aiy-vision-kit-uv4l-web-server/

https://m.blog.naver.com/PostView.nhn?blogId=codingspecialist&logNo=221178140657&categoryNo=30&proxyReferer=https:%2F%2Fblog.naver.com%2FPostView.nhn%3FblogId%3Dcodingspecialist%26logNo%3D221178140657%26categoryNo%3D30%26parentCategoryNo%3D0%26viewDate%3D%26currentPage%3D3%26postListTopCurrentPage%3D1%26from%3DpostList%26userTopListOpen%3Dtrue%26userTopListCount%3D10%26userTopListManageOpen%3Dfalse%26userTopListCurrentPage%3D3

https://www.tutorialspoint.com/webrtc/index.htm

https://www.instructables.com/WebRTC-Creeper-Drone-Browser-Controlled-RC-Car/

https://github.com/vace117/CreeperAndroid

http://naver.me/IMQP1TYC

    UV4L 카메라 연결 안되는 부분 html에서 video src="http://raspiberrypi:9090/webrtc/stream" 이렇게 태그를 달면 되지 않을까? 라고 생각

* __수요일 목표__
* -[X] UV4L streaming server와 웹 연결 시킴
* -[ ] datachannel 기능 구현하기

UV4L 카메라 영상과 웹을 연동하는 건 uv4l-uvc.config 파일에서 가능했다

참조 : https://www.linux-projects.org/uv4l/tutorials/custom-webapp-with-face-detection/

* __금요일 목표__




</details>

---

<details markdown="1">
<summary>10주차</summary>

* __10주차 목표
*  -[ ] WebRTC datachannel로 명령어 보내기
*  -[ ] 받은 명령어로 로봇 제어하기



</details>

---

<details markdown="1">
<summary>11주차</summary>

* __11주차 목표
*  -[X] 로봇과 웹을 WebRTC로 연결해 메세지 전달
*  -[X] webrtc를 통해 로봇 이동 제어


</details>

---

<details markdown="1">
<summary>12주차</summary>

* __12주차 목표
*  -[X] custom web app에 영상 스트리밍 기능 추가
*  -[ ] custom web app 디자인 개선
*  -[X] 카메라 모터 제어
*  -[X] datachannel, socket 통신 끝

</details>

---

<details markdown="1">
<summary>13주차</summary>

* __13주차 목표__
* -[X] demo 페이지에 모터 제어 버튼 완성하기
* -[X] front UI 개선 => 깔끔하게 꾸미자
* -[X] arm 제어기능 추가하기
* -[ ] face detection => object detection으로 변경해보기
* -[ ] camera tracking 더 찾아보기



* 혜인이 교수님 전화 상담 내용 
* 
                `` WEBRTC의 실시간성 강조-> 딜레이가 아주 적다.

                    5G를 VR/AR에 쓴느 이유-> 딜레이가 아주 적다는 장점 이용(이동통신 사용시, 데이터의 오고감으로 오래걸림, BUT WEBRTC, 5G 통신의 경우, 빠르게 가능)

                    KEYWORD : METABUS에 적용 가능한 실시간 스트리밍 로봇! => 진짜 로봇에 들어간 느낌이 들며 실시간 체험 가능

                교수님 요청사항: 사이트 UI/UX 잘 만들어서 팔을 잘 움직일 수 있도록(로봇 다루기 편하게)//
                            웹에서 스크롤이 가능한가? 보기 좋고 어렵지 않게!
                            OPENCV까지는 마감일자 부족하니, 팔과 카메라로 마무리

             추가 요청)
             아맞다 그리고 교수님이 uv4l 사이트에서 데이터채널로 로봇 제어한거 과정 자세하게 피피티 만들어서 보내달라고 하시네
             내일 가서 동영상도 찍고 해서 만들어야겟다
         
         
     ``
     
     
     
     
*  SHARIF 카톡 내용
 ``IMU 센서 VR제어할 때 유용,,=> 메타버스 강조할거면 VR??? (시간 없으니 생각해보자)``


(창의경진대회까지 13,14주 남았다..!! ㅍㅇㅌㅍㅇㅌ♥)

* __수요일 목표__
* [X] 웹에서 keycode 입력시 data 넘기기
* [X] 웹에서 버튼 클릭시, data 넘기기
* [X] SERVO 모터를 이용하여 팔제어하기 💙💙💙💙=> 어려운거 빨리끝냈다~~~ 
* [X] 키코드랑 버튼 예쁘게 만들었지롱 &#128047; 😍
 
 
 
* __목요일 목표__
* [X] ARM파트 추가한 웹에서 CONNECT 안되던 문제 => 해결(단순 변수 정의 문제였음)
* [X] 웹에서 ROBOT ARM (=>input range기능사용)으로 데이터 넘겨서, 로봇 제어
* [X] 웹 ROBOT ARM 파트 추가
* [X] python 실행코드에서 데이터 무한루프안에 돌아(통신이 끊기지 않게)하는 부분 추가
* [X] JSON 파일로 로봇 컨트롤(dict 정의)
* [X] 로봇 모션 유연하게 바꾸기 => time.sleep(0.05)?




* _&#128047; 내가 하고자 하는 목표(집에서)_
* [X] 금요일 발표 PPT용 만들기
* [X] 교수님께 보내드릴, UV4L Streaming server로 데이터 채널 연결시키는 부분 보고서용 PPT 제작
* [X] 웹에 SERVO 7, 8 (카메라 서보모터) 제어할 웹 스크립트 제작(SERVO8의 경우는 range 40-120이다.)
* [ ] 웹 CSS 수정 (비디오와 키들 포지셔닝 먼저 => 색도 바꾸고 화면 예쁘게 예쁘게...)
* [X] 웹의 signalling.js => onDataChannelMsg 부분 config 오류 뜨는 거 수정하기
* [X] ROBOT ARM 40~80으로 range 수정
* [X] 웹에서 input range 부분 데이터 넘기는거, 스크롤 멈출때 넘겨지지말고 계속 움직이면서 바로바로 넘길 수 있는 event JS에서 더 알아보기.
* [ ] 파이썬 실행함수 멈추지 않게 설계하는 방법 알아보기 => &#128047; 나의 생각에 socket.통신 부분에서 키 엇나가면 종료되는 걸로 예상...
* [ ] 각도까지 계산해서 연동시키는거...불가능할까... 시간이 없겠지...?... 일단 내 목록에 넣어둠.....




* __금요일 목표__
* [ ] 집게 집는 한 동작 모션만들기
* [ ] 파이썬 실행파일 로봇 코드랑 붙여보기 ▶️ 안되면 유사하게 import식으로 파일간 구분지어 폴더 제작?
* [ ] 파이썬 실행 파일 안멈추는 방법 알아보기





</details>

---

<details markdown="1">
<summary>14주차</summary>




</details>

---

<details markdown="1">
<summary>15주차</summary>




</details>

---

<details markdown="1">
<summary>16주차</summary>




</details>
