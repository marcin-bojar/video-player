const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop')
const progress = document.getElementById('progress');
const time = document.getElementById('timestamp');
const fullScreen = document.getElementById('full');


function toggleVideoStatus() {
    video.paused ? video.play() : video.pause();
};

function toggleButton() {
    if(!video.paused) {
        play.innerHTML = '<i class="fa fa-pause"></i>';
    } else {
       play.innerHTML = '<i class="fa fa-play"></i>';  
    }
};

function stopVideo() {
    video.currentTime = 0;
    video.pause();
};

function updateProgress() {
   progress.value = (video.currentTime / video.duration) * 100;

   let mins = Math.floor(video.currentTime / 60)
   if(mins < 10) {
       mins = '0' + mins;
   }

   let secs = Math.floor(video.currentTime % 60)
   if(secs < 10) {
       secs = '0' + secs;
   }

   time.innerText = `${mins}:${secs}`;
}

function setProgress() {
    video.currentTime = Math.floor((+progress.value * video.duration) / 100);   
}


video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', toggleButton);
video.addEventListener('play', toggleButton);
video.addEventListener('timeupdate', updateProgress);
play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setProgress);
progress.addEventListener('click', setProgress);
video.addEventListener('fullscreenchange', () => {
    if(document.fullscreenElement) video.removeEventListener('click', toggleVideoStatus);
    else video.addEventListener('click', toggleVideoStatus);    
});
fullScreen.addEventListener('click', () => {
    video.requestFullscreen();
});
