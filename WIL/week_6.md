## 6주차 Week I learned

* 외부 컴퓨터에서 라즈베리파이 ip 서버 연결하는 방법

 1) 먼저 서버 죽이기
  
     `sudo pkill uv4l`

 2) external 문구 추가하여 서버열기
 
      `sudo uv4l --external-driver --device-name=video0 --server-option '--port=9090'`


