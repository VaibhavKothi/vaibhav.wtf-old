let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  deferredPrompt = e;
  showInstallPromotion();
});
window.addEventListener('beforeinstallprompt', (e) => {
  deferredPrompt = e;
  addBtn.style.display = 'block';
  addBtn.addEventListener('click', (e) => {
    addBtn.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});

var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;
var gesuredZone = document.getElementById('cont');
gesuredZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);
gesuredZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesure();
}, false);
function handleGesure() {
    if (touchendX > touchstartX) {
      skills();
    }
    else if (touchendY < touchstartY) {
      projects();
    }
    else if (touchendX < touchstartX) {
        aboutMe();
    }
}


var body = document.getElementsByTagName('body')[0],
x = body.clientWidth,
y = body.clientHeight;
function loader(){
	const flag = 0;
	if(flag === 0){
		document.getElementById("load").style.display = "none";
		document.getElementById("cont").style.display = "block";
		let flag = 1;
		console.log("Loaded");
	}
}
function aboutMe(){
	document.getElementById("sitting").style.visibility = "hidden";
	document.getElementById("running").style.visibility = "visible";
	TweenMax.to(document.getElementById("running"), 5, {x:'70vw'});
	var audio = new Audio('./Assets/beep.mp3');
	audio.play();
  if(y>x){ setTimeout("location.href='./aboutMe';",2000); }
	else { setTimeout("location.href='./aboutMe';",4000); }
}
function skills(){
	document.getElementById("sitting").style.visibility = "hidden";
	document.getElementById("runningL").style.visibility = "visible";
	TweenMax.to(document.getElementById("runningL"), 5, {x:'-80vw'});
	var audio = new Audio('./Assets/beep.mp3');
	audio.play();
  if(y>x){ setTimeout("location.href='./skills';",2000); }
	else { setTimeout("location.href='./skills';",4000); }
}
function projects(){
	document.getElementById("sitting").style.visibility = "hidden";
	document.getElementById("running").style.visibility = "visible";
	TweenMax.to(document.getElementById("running"), 2, {x:'15vw'});
	//var audio = new Audio('./Assets/beep.mp3');
	//audio.play();
  if(y>x){ setTimeout("location.href='./projects';",2000); }
	else { setTimeout("location.href='./projects';",4000); }
	//document.getElementById("sitting").style.visibility = "hidden";
	//setTimeout("location.href='https://www.behance.net/vaibhav_kothi';",000);
}

setInterval(function(){
	function shake() {
		TweenMax.to(document.getElementById('treeFive'), 0.2, {x:'+=15', yoyo:true, repeat:5});
		TweenMax.to(document.getElementById('treeFive'), 0.2, {x:'-=15', yoyo:true, repeat:5});
		setTimeout("TweenMax.to(document.getElementById('treeEleven'), 0.2, {x:'+=15', yoyo:true, repeat:5});", 500);
		setTimeout("TweenMax.to(document.getElementById('treeEleven'), 0.2, {x:'-=15', yoyo:true, repeat:5});", 500);
		setTimeout("TweenMax.to(document.getElementById('treeSix'), 0.2, {x:'+=15', yoyo:true, repeat:5});", 250);
		setTimeout("TweenMax.to(document.getElementById('treeSix'), 0.2, {x:'-=15', yoyo:true, repeat:5});", 250);
		setTimeout("TweenMax.to(document.getElementById('treeThree'), 0.2, {x:'+=15', yoyo:true, repeat:5});", 700);
		setTimeout("TweenMax.to(document.getElementById('treeThree'), 0.2, {x:'-=15', yoyo:true, repeat:5});", 700);
		setTimeout("TweenMax.to(document.getElementById('treeOne'), 0.2, {x:'+=15', yoyo:true, repeat:5});", 100);
		setTimeout("TweenMax.to(document.getElementById('treeOne'), 0.2, {x:'-=15', yoyo:true, repeat:5});", 100);
		setTimeout("TweenMax.to(document.getElementById('treeEight'), 0.2, {x:'+=15', yoyo:true, repeat:5});", 600);
		setTimeout("TweenMax.to(document.getElementById('treeEight'), 0.2, {x:'-=15', yoyo:true, repeat:5});", 600);
		setTimeout("TweenMax.to(document.getElementById('treeFour'), 0.2, {x:'+=15', yoyo:true, repeat:5});", 450);
		setTimeout("TweenMax.to(document.getElementById('treeFour'), 0.2, {x:'-=15', yoyo:true, repeat:5});", 450);
		setTimeout("TweenMax.to(document.getElementById('treeTwo'), 0.2, {x:'+=15', yoyo:true, repeat:5});", 400);
		setTimeout("TweenMax.to(document.getElementById('treeTwo'), 0.2, {x:'-=15', yoyo:true, repeat:5});", 400);
		setTimeout("TweenMax.to(document.getElementById('treeSeven'), 0.2, {x:'+=15', yoyo:true, repeat:5});", 200);
		setTimeout("TweenMax.to(document.getElementById('treeSeven'), 0.2, {x:'-=15', yoyo:true, repeat:5});", 200);
		setTimeout("TweenMax.to(document.getElementById('treeTen'), 0.2, {x:'+=15', yoyo:true, repeat:5});", 500);
		setTimeout("TweenMax.to(document.getElementById('treeTen'), 0.2, {x:'-=15', yoyo:true, repeat:5});", 500);
		TweenMax.to(document.getElementById('treeNine'), 0.2, {x:'+=15', yoyo:true, repeat:5});
		TweenMax.to(document.getElementById('treeNine'), 0.2, {x:'-=15', yoyo:true, repeat:5});
	};
	shake();
}, 3500);

TweenMax.to(document.getElementById('turbwave'), 2, {attr: {'baseFrequency' : 0.03}, repeat: 1, yoyo: true});
setInterval(function(){
	TweenMax.to(document.getElementById('turbwave'), 2, {attr: {'baseFrequency' : 0.03}, repeat: 1, yoyo: true});
}, 6000);


const words = ["Hello.", "Hi.", "Namaste."];
let i = 0;
let timer;
function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 350);
	};
	loopTyping();
};
function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 150);
	};
	loopDeleting();
};

typingEffect();
