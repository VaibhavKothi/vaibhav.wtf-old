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

TweenMax.to(document.getElementById("running"), 2, {x:'-5vw'});
setTimeout("document.getElementById('running').style.visibility = 'hidden';",2000);
setTimeout("document.getElementById('standing').style.visibility = 'visible';",2000);
var body = document.getElementsByTagName('body')[0],
x = body.clientWidth,
y = body.clientHeight;
if(y>x){
  document.getElementById("gesture").style.visibility = "visible";
}
var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;
var gesuredZone = document.getElementById('gesture');
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
      window.location.href = "./";
    }
};
