## 12주차 WIL


* demo 파일 실행시키고 싶을 때 켜기

`` uv4l -k --sched-rr --mem-lock --config-file=/etc/uv4l/uv4l-uvc.conf --driver uvc --driver-config-file=/etc/uv4l/uv4l-uvc.conf
--server-option=--editable-config-file=/etc/uv4l/uv4l-uvc.conf --device-id 046d:0825``

* 9090 uv4l streaming server 끊겼을 때

`` ps -ef | grep uv4l`` -> 프로세스에 어떤 프로그램이 올려져있나 보기
봤는데 9090 이 아니라 다른게 켜져있으면

``sudo kill -15 2577(지워야하는 번호)``

``sudo pkill uv4l``


* 로봇과 datachannel로 소켓 통신 이해 위한 링크 첨부

https://nowonbun.tistory.com/668

* UV4L streaming server의 keycodes JSON 파일 파이썬 실행에 넘겨올 때 추가해준 코드

JSON 코드 파싱
``jsondata=json.loads(data)`` ``json_string=jsondata["keycodes"]``

dict 형태의 data를 숫자만 꺼내주고 싶을 때,
``key = getch(int(json_string[0]))``
