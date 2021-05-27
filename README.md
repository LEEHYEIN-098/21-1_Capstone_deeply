# 웹 기반 실시간 비디오 스트리밍 로봇 개발 

[캡스톤 디자인 교수님 프로젝트 RFP](./Capston_RFP.pdf)

[제안서](./Report/CapstoneProposal.pdf)

## 프로젝트 계획서
|주차|계획|진행 보고|보고서|
|:----:|:---:|----:|:---:|
|1주차(03.01~)|주제 선정|웹 기반 실시간 비디오 스트리밍 로봇 개발||
|2주차(03.08~)|김형석 교수님 면담|프로젝트 설명 및 라즈베리파이 및 소스 코드 분석||
|3주차(03.15~)|UV4L 스트리밍 서버|UV4L 설치 및 웹캠 webRTC 연동||
|4주차(03.22~)|제안서 작성| 03.26 제안서 발표|[제안서](./Report/CapstoneProposal.pdf)|
|5주차(03.29~)|~~서버 구축~~|UV4L=>웹캠 지연 개선|[보고서](./Report/week5.pdf)
|6주차(04.05~)|~~1:n 다중 스트리밍 구현~~|webcam 지연 개선 성공/webcam고장으로인한 변경|[보고서](./Report/week6.pdf)|
|7주차(04.12~)|데이터채널(양방향 스트리밍 시도)|datachannel 부분 정보가 부족하여 추가 자료조사 진행|[보고서](./Report/report_7.pdf)
|8주차(04.19~)|중간고사|TOPCIT 응시(5.22)|중간고사 시험공부로 생략||
|9주차(04.26~)|~~웹을 이용한 로봇 제어 기능 구현~~|웹과 UV4L streaming server 연결|[보고서](./Report/report_9.pdf)
|10주차(05.03~)|''|WebRTC 공부(RTCpeerconnection 통한 message 주고받기)|
|11주차(05.10~)|웹을 이용한 로봇 제어 기능 구현|browser로부터 키보드 명령 받아 로봇 이동 제어(python)|[보고서](./Report/report_11.pdf)
|12주차(05.17~)|웹사이트 UX/UI 개선|=> custom web에서 datachannel로 로봇 명령어 성공|[보고서](./Report/report_12.pdf)
|13주차(05.24~)|~~OpenCV를 이용한 객체 인식|~~|객체 인식 시간 부족으로 로봇 제어 집중, MOTPR, SERVO MOTOR 완료|[보고서](./Report/report_13.pdf)
|14주차(05.31~)|객체 인식을 이용한 서비스 구현||
|15주차(06.07~)|프로젝트 최종 발표|
|16주차(06.14~)|종강||

* 주차 별 활동 내용 ppt 작성해서 교수님께 보고드리기
* 활동 이슈사항 메모
* 제출한 보고서 계획서 표 내용 부분에 링크 걸어 첨부해두기
* 매주 금요일 프로젝트 진행 상황 업데이트할 예정


## 사용 기술 스택
<img src="https://img.shields.io/badge/Python-3766AB?style=flat-square&logo=Python&logoColor=white"/></a>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a> 
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a> 
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a> 
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/></a> 
<img src="https://img.shields.io/badge/c++-7E41D9?style=flat-square&logo=c%2B%2B&logoColor=white"/></a> 
<img src="https://img.shields.io/badge/c-00599C?style=flat-square&logo=c&logoColor=white"/></a> 
<img src="https://img.shields.io/badge/RaspberryPi-C51A4A?style=flat-square&logo=Raspberry_Pi&logoColor=white"/></a> 



## WIL (Week I Learned)
* [3주차 오류 수정 사항](./WIL/week_2~3.md)
* [5주차 오류 수정 및 코드 공유](./WIL/week_5.md)
* [6주차 기록 내용](./WIL/week_6.md)
* [7주차 기록 내용](./WIL/week_7.md)
* [9주차 기록 내용](./WIL/week_9.md)
* [10,11주차 기록 내용](./WIL/week_10,11.md)
* [12주차 기록 내용](./WIL/week_12.md)
* [13주차 기록 내용](./WIL/week_13.md)

## 프로젝트 진행 
* [프로젝트 진행 상황 기록 표](./WIL/Project_Progress.md)
* 모임 : 월, 수 -> 주차별 목표 못 끝낼 시 금요일 추가 모임


## 구매 목록

과사무실 437호 가서 신청

|제품명|가격|구매처|구매자|
|:---:|:---:|:---:|:---:|
|마하링크 마이크로 HDMI 2.0 ULTRA ML-H2C012 골드케이블 1.2M|9230원|쿠팡|박세정|
|아이리버 가정용 듀얼 USB 충전기|5000원|다이소|박세정|
|건전지 AAA사이즈|1000원|다이소|박세정|
|CAT.6 플랫형 LAN 케이블|3000원|다이소|이혜인|
|MICRO 5PIN 가정용 일체형 충전기|5000원|다이소|이혜인|
|ELECOM 5핀 TO TYPE C 변환젠더|2000원|다이소|이혜인|
|로지텍 웹캠 C270i|38800원|쿠팡|이혜인|
|합계|64030원|||
