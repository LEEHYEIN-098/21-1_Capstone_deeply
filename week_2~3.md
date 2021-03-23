## 2~3주차
라즈베리 파이에서 UV4L 서버 연결까지 진행 과정 중 issue 메모
--------

#### 1. 모니터 오류
  `/boot/config.txt`
  
    - hdmi_group=1
    - config_hdmi_boost=4
    - hdmi_force_hotpulg=1  //hdmi 신호 강제 출력
    - hdmi_drive=2  //raspbmc를 일반 hdmi 모드로 설정
                    //DVI 만 출력하는 옵션으로 사운드가 안들린다고 함
                    
 
 ### 2. 계정, 비밀 번호
        pi / raspberry
        
        
 ### 3. UV4L 설치 오류(03.15~16)
        0. 저장소 미러 변경 (-> 카이스트) 
            {참고} https://engineeringcode.tistory.com/48
        
        1. `curl http://www.linux-projects.org/listing/uv4l_repo/lpkey.asc | sudo apt-key add -`
            {원인} 키보드 국적이 타국으로 설정되어 있어 |가 아닌 ~로 출력
            {해결} raspberry OS 에서 키보드 설정 Korean으로 변경해줌
            
        2. `/etc/resolv.conf: No such file or directory`
            {해결} 파일 지우고 재생성
            root 자격 얻기 : sudo su / exit
            $rm /etc/resolv.conf
            $echo "nameserver 8.8.8.8" >> /etc/resolv.conf
            (다음 줄에 적으려면) ($echo "nameserver 8.8.4.4" >> /etc/resolv.conf)
            {참고} https://nhj12311.tistory.com/152
            
        3. 라즈베리파이 시간 수동 변경 : date -s "2021-03-16 00:00:00"
            {해결} 라즈베리파이 시간 동기화
            {참고} https://robotbef.tistory.com/105
            
        4. `curl: could not resolv host`
            {해결} WIFI 변경 (sejong -> T free wifi zone)
            
        5. gpg: no valid opengpg data found
            {해결} $ gpg -a --export [오류 뜨는 퍼블릭 키 번호] | sudo apt-key add-
          
          
          * _와이파이 문제 참고_
  
