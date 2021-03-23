## 2~3주차
라즈베리 파이에서 UV4L 서버 연결까지 진행하면서 
#### 1. 모니터 오류
  `/boot/config.txt`
  
    - hdmi_group=1
    - config_hdmi_boost=4
    - hdmi_force_hotpulg=1  //hdmi 신호 강제 출력
    - hdmi_drive=2  //raspbmc를 일반 hdmi 모드로 설정
                    //DVI 만 출력하는 옵션으로 사운드가 안들린다고 함
                    
 
 ### 2. 계정, 비밀 번호
        pi / raspberry
        
 ### 3. UV4L 설치
        0. 저장소 미러 변경 (-> 카이스트) (https://engineeringcode.tistory.com/48)
