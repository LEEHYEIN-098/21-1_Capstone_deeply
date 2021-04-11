## 주차별 진행 상황

|주차|월|수|금|기타|
|:----:|:---:|:---:|:---:|:---:|
|2주차||목: 교수님 면담|첨부 ppt 및 로봇 작동 공부|
|3주차|라즈베리파이 환경 설정 및 |UV4L 다운로드 및 서버연결 완료|웹캠 연결|[WIL](./week_2~3.md)|
|4주차|서버 사전 조사|제안서 작성 및 온라인 미팅|제안서 발표|[제안서](./Report/CapstoneProposal.pdf)|
|5주차|https, codec 변경 시도/"외부로부터" 서버 접속(진행중)/웹캠 딜레이 문제(진행중)	| 노트북으로 서버 접속&교수님 면담|(과제가많아서 생략..)|[5주차보고서](../Report/week5.pdf), [WIL](./week_5.md)|
|6주차|UVC 연결 성공, Time lag 현상 해결|웹캠 고장...|영상 스트리밍 시도|[6주차보고서](../Report/week6.pdf), [WIL](./Report/week_6.md)|
|7주차|
|8주차|시험기간
|9주차|
|10주차|
|11주차|
|12주차|
|13주차|
|14주차|
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




</details>

---

<details markdown="1">
<summary>9주차</summary>




</details>

---

<details markdown="1">
<summary>10주차</summary>




</details>

---

<details markdown="1">
<summary>11주차</summary>




</details>

---

<details markdown="1">
<summary>12주차</summary>




</details>

---

<details markdown="1">
<summary>13주차</summary>




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
