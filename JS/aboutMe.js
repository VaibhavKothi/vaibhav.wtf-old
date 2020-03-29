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
