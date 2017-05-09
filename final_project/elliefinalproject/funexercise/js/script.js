// 1) add an event listen to #click-me
// 2) store inputs as variables using .value method
// 3) (max age- age) * drinks per day * 365
// 4) output answers for the user to see

document.querySelector('#click-me').onclick = function () {


var currentAge = document.querySelector('#age').value;
	var maxAge = document.querySelector('#max-age').value;
	var favoritedevice = document.querySelector('#item').value;
	var numPerhour = document.querySelector('#num-per-hour').value;

	// 3)
	currentAge = parseInt(currentAge);
	maxAge = parseInt(maxAge);
	numPerhour = parseInt(numPerhour);

	var hoursLeft = (maxAge - currentAge) * numPerhour * 365 * 24;

	// 4)
	document.querySelector('#solution').innerHTML = hoursLeft;
	document.querySelector('#device').innerHTML = favoritedevice;
}

var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})

