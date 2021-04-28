(function () {
    var signalObj = null;
    var fileReader = null;
    let file;

    window.addEventListener('DOMContentLoaded', function () {
        var send = document.getElementById('send');
        var abort = document.getElementById('abort');
        var fileInput = document.getElementById('fileInput');

        function stop() {
            if (fileReader && fileReader.readyState === 1) {
                console.log('Abort file read!');
                fileReader.abort();
            }
            if (signalObj) {
                signalObj.hangup();
            }
            document.body.style.cursor = "default";
        }

        send.addEventListener('click', function (e) {
            console.log('starting file transfer...');

            var address = document.getElementById('address').value;
            var protocol = location.protocol === "https:" ? "wss:" : "ws:";
            var wsurl = protocol + '//' + address;
            var bytesSent, bytesReceived, bufferReady;
            /* keep it low to pipe the file being transferred to e.g. a music player */
            var bufferLimit = 1024 * 32;

            if (!signalObj) {
                signalObj = new signal(wsurl,
                    function (stream) {},
                    function (error) {
                        alert(error);
                    },
                    function () {
                        console.log('websocket closed. bye bye!');
                        signalObj = null;
                    },
                    function (message) {
                        alert(message);
                    },
                    function (datachannel) {
                        document.body.style.cursor = "wait";
                        datachannel.send(file.name);
                        datachannel.send(file.size);
                        bytesSent = 0;
                        bytesReceived = 0;
                        fileReader = reader(file, async function(data) {
                            datachannel.send(data);
                            bytesSent += data.byteLength;
                            return new Promise((resolve, reject) => {
                                bufferReady = resolve;
                                if (bytesSent - bytesReceived < bufferLimit) {
                                    resolve();
                                }
                            });
                        });
                    },
                    function (message) {
                        bytesReceived = message;
                        console.log("bytes successfully transferred: ", bytesReceived);
                        bufferReady();
                        if (bytesReceived == file.size) {
                            stop();
                            alert('File successfully transferred to the remote peer!');
                        }
                    }
                );
            }
        }, false);

        abort.addEventListener('click', function (e) {
            stop();
        }, false);

        fileInput.addEventListener('change', function() {
            file = fileInput.files[0];
            if (!file) {
                console.log('No file chosen');
                send.disabled = true;
            } else {
                send.disabled = false;
            }
        }, false);

    });
})();
