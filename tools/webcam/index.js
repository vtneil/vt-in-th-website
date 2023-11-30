const videoElement = document.getElementById('video');
const cameraSelect = document.getElementById('cameraSelect');
const fullscreenBtn = document.getElementById('fullscreenBtn');

const reloadCamera = function () {
    navigator.mediaDevices.enumerateDevices()
        .then(setCameraDropdown)
        .catch(handleError);

    cameraSelect.onchange = function () {
        setCamera(cameraSelect.value);
    };

    fullscreenBtn.onclick = function () {
        if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) { /* Firefox */
            videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) { /* IE/Edge */
            videoElement.msRequestFullscreen();
        }
    };
}

reloadCamera();

function setCameraDropdown(deviceInfos) {
    for (const deviceInfo of deviceInfos) {
        if (deviceInfo.kind === 'videoinput') {
            const option = document.createElement('option');
            option.value = deviceInfo.deviceId;
            option.text = deviceInfo.label || 'Camera ' + (cameraSelect.length + 1);
            cameraSelect.appendChild(option);
        }
    }
    setCamera(cameraSelect.value);
}

function setCamera(deviceId) {
    const constraints = {
        video: {deviceId: {exact: deviceId}}
    };

    navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream) {
            videoElement.srcObject = stream;
        })
        .catch(handleError);
}

function handleError(error) {
    console.error('Error: ', error);
}