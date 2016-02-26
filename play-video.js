var myVideo = document.getElementById("bus-video");

document.getElementById("bus-video").onclick = function() {playPause()};
document.getElementById("play-button").onclick = function() {
  playPause()
};
document.getElementById("pause-button").onclick = function() {
  playPause()
};

function playPause() {
    if (myVideo.paused) {
        myVideo.play();
      }
    else {
        myVideo.pause();
     }
}
