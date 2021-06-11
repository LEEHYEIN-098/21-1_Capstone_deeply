(function () {
    var signalObj = null;

    window.addEventListener('DOMContentLoaded', function () {
        var isStreaming = false;
        //READY OPTION
        var start = document.getElementById('start');
        var stop = document.getElementById('stop');
        //VIDEO STREAM
        var video = document.getElementById('v');
        var canvas = document.getElementById('c');
        var ctx = canvas.getContext('2d');
        var effect = document.getElementById('effect');
        var isEffectActive = false;
        //SERVO_RESET BUTTON
        var reset = document.getElementById('reset');
        //ROBOT ARM
        var servo1 = document.getElementById('servo1');
        var servo2 = document.getElementById('servo2');
        var servo3 = document.getElementById('servo3');
        var servo4 = document.getElementById('servo4');
        //CAMERA CONTROL
        var camera8 = document.getElementById('camera8');
        var camera7 = document.getElementById('camera7');
        //SPEED BUTTON
        var speed_low = document.getElementById('speed_low');
        var speed_middle = document.getElementById('speed_middle');
        var speed_high = document.getElementById('speed_high');
        //ARROW KEY
        var right = document.getElementById('right');
        var left = document.getElementById('left');
        var up = document.getElementById('up');
        var down = document.getElementById('down');
        var isPressed = false;

        /////////////////////////////////////////////////////////////////////

        ////// EVENT START ////////////
        start.addEventListener('click', function (e) {
            var address = document.getElementById('address').value;
            var protocol = location.protocol === "https:" ? "wss:" : "ws:";
            var wsurl = protocol + '//' + address;

            if (!isStreaming) {
                signalObj = new signal(wsurl,
                        function (stream) {
                            console.log('got a stream!');
                            //var url = window.URL || window.webkitURL;
                            //video.src = url ? url.createObjectURL(stream) : stream; // deprecated
                            video.srcObject = stream;
                            video.play();
                        },
                        function (error) {
                            alert(error);
                        },
                        function () {
                            console.log('websocket closed. bye bye!');
                            video.srcObject = null;
                            //video.src = ''; // deprecated
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            isStreaming = false;
                        },
                        function (message) {
                            alert(message);
                        }
                );
            }
        }, false);
        stop.addEventListener('click', function (e) {
            if (signalObj) {
                signalObj.hangup();
                signalObj = null;
            }
        }, false);

        /////////////////////////////////////////////////////////////////////////

        ///////////VIDEO STREAM!!/////////////
        // Wait until the video stream can play
        video.addEventListener('canplay', function (e) {
            if (!isStreaming) {
                canvas.setAttribute('width', video.videoWidth);
                canvas.setAttribute('height', video.videoHeight);
                isStreaming = true;
            }
        }, false);
        // Wait for the video to start to play
        video.addEventListener('play', function () {
            // Every 33 milliseconds copy the video image to the canvas
            setInterval(function () {
                if (video.paused || video.ended) {
                    return;
                }
                var w = canvas.getAttribute('width');
                var h = canvas.getAttribute('height');
                ctx.fillRect(0, 0, w, h);
                ctx.drawImage(video, 0, 0, w, h);
                if (isEffectActive) {
                    detectFace(canvas);
                }
            }, 33);
        }, false);

        effect.addEventListener('click', function () {
            isEffectActive = !isEffectActive;
        }, false);

        /////////////////////////////////////////////////////////////////////////////////

        /////////////////////////////////////////////////////////////////////////////////////////
        ////        CAMERA & ROBOT ARM using by SERVO MOTOR                                  ////
        ////        CAMERA SERVO NUM : rotaion; servo7, up&down; servo8                      ////
        ////        ROBOT ARM SERVO NUM : fist-joint; servo1, second-joint; servo2,          ////   
        ////                              rotation; servo3, crab; servo4                     ////
        /////////////////////////////////////////////////////////////////////////////////////////

        ///////// SERVO MOTOR ARM CONTROL ///////////

        reset.addEventListener("click",function(e){
            var servo={
                servoNum: 0,
                range: 0 ////0으로 파싱해서 보내지만, 파이썬 실행코드에서 수정할 때 if문써서
                // 만약 servoNum이 0이면 범위는 초기화 되는 값으로 지정해줘야할 필요 있을 것!! 
            }
            servo1.value=87.5;
            servo2.value=87.5;
            servo3.value=90;
            servo4.value=65;
            camera7.value=87.5;
            camera8.value=80;
            datachannel.send(JSON.stringify(servo));
            console.log('massage sent: ',JSON.stringify(servo));
        },false);

        //var output1=document.getElementById("ser_val1");
        servo1.addEventListener("input",function(e){           
            //output1.innerHTML=servo1.value;
            console.log('servo motor 1 value: '+this.value);
            var servo={
                servoNum: 1,
                range: this.value
            }
            datachannel.send(JSON.stringify(servo));
            console.log('massage sent: ',JSON.stringify(servo));

        },false);
        //var output2=document.getElementById("ser_val2");
        servo2.addEventListener("input",function(e){
            //output2.innerHTML=servo2.value;
            console.log('servo motor 2 value: '+this.value);
            var servo={
                servoNum: 2,
                range: this.value
            }
            datachannel.send(JSON.stringify(servo));
            console.log('massage sent: ',JSON.stringify(servo));

        },false);
        //var output3=document.getElementById("ser_val3");
        servo3.addEventListener("input",function(e){
            //output3.innerHTML=servo3.value;
            console.log('servo motor 3 value: '+this.value);
            var servo={
                servoNum: 3,
                range: this.value
            }
            datachannel.send(JSON.stringify(servo));
            console.log('massage sent: ',JSON.stringify(servo));

        },false);
        //var output4=document.getElementById("ser_val4");
        servo4.addEventListener("input",function(e){
            //output4.innerHTML=servo4.value;
            console.log('servo motor 4 value: '+this.value);
            var servo={
                servoNum: 4,
                range: this.value
            }
            console.log('servo motor 4 value: '+JSON.stringify(servo));
            datachannel.send(JSON.stringify(servo));
            console.log('massage sent: ',JSON.stringify(servo));

        },false);

        /////////////////////////////////////////////////////////////////////

        ///////// CAMERA CONTROLL ///////
        //var output7=document.getElementById("cam_val7");
        camera7.addEventListener("input",function(e){
            //output7.innerHTML=camera7.value;
            console.log('servo camera 7 value: '+this.value);
            var servo={
                servoNum: 7,
                range: this.value
            }
            console.log('servo camera 7 value: '+JSON.stringify(servo));
            datachannel.send(JSON.stringify(servo));
            console.log('massage sent: ',JSON.stringify(servo));

        },false);
        //var output8=document.getElementById("cam_val8");
        camera8.addEventListener("input",function(e){
            //output8.innerHTML=camera8.value;
            console.log('servo camera 8 value: '+this.value);
            var servo={
                servoNum: 8,
                range: this.value
            }
            console.log('servo camera 8 value: '+JSON.stringify(servo));
            datachannel.send(JSON.stringify(servo));
            console.log('massage sent: ',JSON.stringify(servo));

        },false);

        ////////////////////////////////////////////////////////////////////////

        /////////SPEED CONTROL/////////////////////////
        speed_low.addEventListener('click',function(e){
            var speed={
                speed: 0
            };
            console.log('speed low : LOW',JSON.stringify(speed));
            datachannel.send(JSON.stringify(speed));
        },false);
        /*
        speed_middle.addEventListener('click',function(e){
            var speed={
                speed: 1
            };
            datachannel.send(JSON.stringify(speed));
            console.log('speed middle : MIDDLE',JSON.stringify(speed));
        },false);
        */
        speed_high.addEventListener('click',function(e){
            var speed={
                speed: 2
            };
            console.log('speed middle : HIGH',JSON.stringify(speed));
            datachannel.send(JSON.stringify(speed));
        },false);



        /////////////////////////////////////////////////////////////////////////

        ///////// KEYCODE CONTROLL /////////////


        left.addEventListener('mouseup', function(e){
            isPressed = false;
        });
        left.addEventListener('mousedown', function(e){
            var leftMsg=left.value;
            isPressed = true;
            send_key(1,leftMsg);
        });
        right.addEventListener('mouseup', function(e){
            isPressed = false;
        });
        right.addEventListener('mousedown', function(e){
            var rightMsg=right.value;
            isPressed = true;
            send_key(2,rightMsg);
        });
        up.addEventListener('mouseup', function(e){
            isPressed = false;
        });
        up.addEventListener('mousedown', function(e){
            var upMsg=up.value;
            isPressed = true;
            send_key(3,upMsg);
        });
        down.addEventListener('mouseup', function(e){
            isPressed = false;
        });
        down.addEventListener('mousedown', function(e){
            var downMsg=down.value;
            isPressed = true;
            send_key(4,downMsg);
        });

        function send_key(e,msg){
            if (isPressed){
                if (e==1){
                    var keycode = {
                    keycode: msg
                    };
                }
                else if (e==2){
                    var keycode = {
                    keycode: msg
                    };
                }
                else if (e==3){
                    var keycode = {
                    keycode: msg
                    };
                }
                else if (e==4){
                    var keycode = {
                    keycode: msg
                    };
                }
                
                console.log("keycode BUTTON : "+JSON.stringify(keycode));
                datachannel.send(JSON.stringify(keycode));

                setTimeout(function(){
                    send_key(e,msg);
                },50);
            };
        };



        /* 세정이 컴퓨터에서는 안되므로.. 임시보류로 남기기
        => 앞에 코드 미희컴이랑 혜인이 컴에선 됨
        up.addEventListener('click', function (e) {
            var keycode = {
                keycode: 38
            };
            console.log("keycode BUTTON [up] : "+JSON.stringify(keycode));
            datachannel.send(JSON.stringify(keycode));
            console.log("message sent: ", JSON.stringify(keycode));
        }, false);
        left.addEventListener('click', function (e) {
            var keycode = {
                "keycode": 37
            };
            console.log("keycode BUTTON [left] : "+JSON.stringify(keycode));
            datachannel.send(JSON.stringify(keycode));
        }, false);
        down.addEventListener('click', function (e) {
            var keycode = {
                keycode: 40
            };
            console.log("keycode BUTTON [down] : "+JSON.stringify(keycode));
            datachannel.send(JSON.stringify(keycode));
        }, false);
        right.addEventListener('click', function (e) {
            var keycode = {
                keycode: 39
            };
            console.log("keycode BUTTON [right] : "+JSON.stringify(keycode));
            datachannel.send(JSON.stringify(keycode));
            console.log("message sent: ", JSON.stringify(keycode));
        }, false);
        */

    });


})();
