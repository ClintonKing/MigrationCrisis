var myVideo = document.getElementById("Bus");

var y = window.scrollY;
var videoBus = document.getElementById("overview-video");
var videoY = videoBus.scrollY;

if (y >= videoY) {
  function() {playPause()};
}

document.getElementById("overview-video").onclick = function() {playPause()};

function playPause() {
    if (myVideo.paused) {
        myVideo.play();
        //make thing invisible
    }
    else {
        myVideo.pause();
    }
}

//make function for playing
//make function for if mouse moves, "pause thing" comes up

//autoplay when scroll past ==

//LOGIC =
//get Y of video-section
//get Y of your computer
//if Y of vid section = Y of computer
//video play
//i
