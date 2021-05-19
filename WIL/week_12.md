## 12주차 WIL


* demo 파일 실행시키고 싶을 때 켜기

`` uv4l -k --sched-rr --mem-lock --config-file=/etc/uv4l/uv4l-uvc.conf --driver uvc --driver-config-file=/etc/uv4l/uv4l-uvc.conf
--server-option=--editable-config-file=/etc/uv4l/uv4l-uvc.conf --device-id 046d:0825``

* 9090 uv4l streaming server 끊겼을 때
`` ps -ef | grep uv4l`` -> 프로세스에 어떤 프로그램이 올려져있나 보기
봤는데 9090 이 아니라 다른게 켜져있으면

``sudo kill -15 2577(지워야하는 번호)``

``sudo pkill uv4l``
