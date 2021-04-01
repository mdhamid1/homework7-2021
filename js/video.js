var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	// volume.innterHTML= 100;
	video.play();
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});


document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speeding up video");
	video.playbackRate /= 0.95;
	console.log(video.playbackRate);
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing volume");
	console.log(this.value);
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML=video.volume*100 + "%";
});


document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.remove("oldSchool");
});


document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 15;
	// video.addEventListener("ended", myFunc, false);
	// function myFunc(e) {
	// 	video.load()
	// }
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("skipping video: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {    
           video.muted = true;
           document.querySelector("#mute").innerHTML="Unmute";
           // document.querySelector("#volume").innerHTML="0%";
    }

    else {
        video.muted = false;
        document.querySelector("#mute").innerHTML="Mute";
        // document.querySelector("#volume").innerHTML=video.volume*100 + "%";
    }
});
