function displayNotification() {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      var options = {
              body: "Feel free to contact anytime 🤗",
              icon: './Icon/logo.png',
              vibrate: [300, 100, 400],
              data: {
                dateOfArrival: Date.now(),
                primaryKey: 1
              },
              actions: [
                {action: 'call', title: 'Make a Call!',
                  icon: './Assets/check.png'},
                {action: 'close', title: 'Dismiss',
                  icon: './Assets/cross.png'},
              ]
      };
      reg.showNotification('Contact - Vaibhav Kothi', options);
    });
  }
}


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

var body = document.getElementsByTagName('body')[0],
x = body.clientWidth,
y = body.clientHeight;
if (y>x){
  if(x <= 400){document.getElementById('Screen').style.transform = "scale(0.55, 0.55)";
        document.getElementById('Screen').style.transform += "translate(785px, 300px)";}
  else{ document.getElementById('Screen').style.transform = "scale(0.7, 0.7)";
        document.getElementById('Screen').style.transform += "translate(410px, 200px)";}
  document.getElementById('Me').style.transform = "scale(0.8, 0.8)";
  document.getElementById('Me').style.transform += "translate(10px, 200px)";
  document.getElementById('Falling').style.visibility = 'hidden';
}
if (y<x){
  document.getElementById('overlay').style.visibility = 'hidden';
}

TweenMax.to(document.getElementById('Falling'), 0.2, {x:'+=10', yoyo:true, repeat:5});
TweenMax.to(document.getElementById('Falling'), 0.2, {x:'-=10', yoyo:true, repeat:5});
TweenMax.fromTo(document.getElementById("Falling"), 1.5, {y:'-15vh'}, {y:'85vh'});
setTimeout("document.getElementById('Falling').style.visibility = 'hidden';",2000);
setTimeout("document.getElementById('standing').style.visibility = 'visible';",2000);
var k,l;
const total=16;
var i = 0;

var img = [
"../Assets/__34.jpg",
"../Assets/__35.jpg",
"../Assets/__36.jpg",
"../Assets/__37.jpg",
"../Assets/__38.jpg",
"../Assets/__39.jpg",
"../Assets/__40.jpg",
"../Assets/__41.jpg",
"../Assets/__42.jpg",
"../Assets/__43.jpg",
"../Assets/__44.jpg",
"../Assets/__45.jpg",
"../Assets/__46.jpg",
"../Assets/__47.jpg",
"../Assets/__48.jpg",
"../Assets/__49.jpg",
"../Assets/__50.jpg",
];
var link = [  "window.open('https://www.behance.net/gallery/101955593/IEEE-ICNL-2020')",
              "window.open('https://www.behance.net/gallery/101915501/Trading-Dudes')",
              "window.open('https://www.behance.net/gallery/100122145/SPECTRUM-2020')",
              "window.open('https://www.behance.net/gallery/99078811/Agrimycil-UIUX')",
              "window.open('https://www.instagram.com/vaibhav.wtf/')",
              "window.open('https://www.behance.net/gallery/94270923/BeKnownDigital')",
              "window.open('https://www.behance.net/gallery/91144577/Poster')",
              "window.open('https://www.behance.net/gallery/90702661/AICSSYC19')",
              "window.open('https://www.behance.net/gallery/87474789/CVM-Logo')",
              "window.open('https://www.behance.net/gallery/87455909/INSPIRO-20')",
              "window.open('https://www.behance.net/gallery/87374333/Freeflow')",
              "window.open('https://www.behance.net/gallery/87360003/INSPIRO-20-Logofolio')",
              "window.open('https://www.behance.net/gallery/87327575/WaitArea')",
              "window.open('https://www.behance.net/gallery/87318989/IEEE-Roll-Up-Banner')",
              "window.open('https://www.behance.net/gallery/78754971/Sunrise')",
              "window.open('https://www.behance.net/gallery/76747299/ADIT-Logo')",
              "window.open('https://www.behance.net/gallery/76724941/SPECTRUM19')",
             ];
 function change( k ) {
   if (i+k > total - 1) { i = -1;  }
   if (i+k < 0) { i = total;  }
   if(k>=0) {   ++i;     }
   else if(k < 0) { --i; }
   console.log(i);
   TweenMax.fromTo(document.getElementById('Tap'), 1, {autoAlpha:1}, {ease: Power1.easeIn, autoAlpha:0, repeat:1, repeatDelay:0.5});
   TweenMax.set(document.getElementById('xyz'),{autoAlpha:0});
   TweenMax.to(document.getElementById('xyz'), 1.5, { ease: Power1.easeOut, autoAlpha:1});
   document.getElementById('xyz').setAttribute('xlink:href', img[i]);
   document.getElementById('Screen').setAttribute('onclick', link[i]);
   document.getElementById('overlay').setAttribute('onclick', link[i]);
   setTimeout(sides(i), 2000);
   if(i == 0){ document.getElementById('Swipe').style.visibility = 'visible';
                TweenMax.fromTo(document.getElementById('Swipe'), 1.5, {autoAlpha:0}, {ease: Power1.easeOut, autoAlpha:1, repeat:2, repeatDelay:0.5});}
   else if(i > 0 ) { document.getElementById('Swipe').style.visibility = 'hidden'; }
 };
 function sides( l ) {
   var z,a,b;
   if (l+1 > total - 1) { z = -1;
     a = z+1;
     b = l-1;
   }
   else if (l-1 < 0) { z = total;
     a = l+1;
     b = z-1;
   }
   else{
     a = l+1;
     b = l-1;
   }
   TweenMax.set(document.getElementById('rightScreen'),{autoAlpha:0});
   TweenMax.to(document.getElementById('rightScreen'), 1.5, { ease: Power1.easeOut, autoAlpha:1});
   TweenMax.set(document.getElementById('leftScreen'),{autoAlpha:0});
   TweenMax.to(document.getElementById('leftScreen'), 1.5, { ease: Power1.easeOut, autoAlpha:1});
   document.getElementById('def').setAttribute('xlink:href', img[a]);
   document.getElementById('rightScreen').setAttribute('onclick', link[a]);
   document.getElementById('abc').setAttribute('xlink:href', img[b]);
   document.getElementById('leftScreen').setAttribute('onclick', link[b]);
 };
 window.addEventListener("wheel", event => {
   var delta = 0;
   delta = Math.sign(event.deltaY);
   setTimeout( change(delta) , 4000);
});
// setInterval(function(){ change( 1 ); }, 10000);
var init = 0;
var end = 0;

window.addEventListener("mousedown",event => { // aa su event ni andar event
  init = event.clientX;
});
window.addEventListener("mouseup",event => {
    end = event.clientX;
    var diff = end - init;
    if(diff > 0) { setTimeout(change((-1) ) , 4000); }
    else if(diff < 0) { setTimeout(change((1) ) , 4000); }
});
var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;
var gesuredZone = document.getElementById('overlay');
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
    if (touchendX < touchstartX) {
        change(1);
    }
    else if (touchendX > touchstartX) {
        change(-1);
    }
    else if (touchendY > touchstartY) {
        window.location.href = "./";
    }
};
change(1);
change(-1);
