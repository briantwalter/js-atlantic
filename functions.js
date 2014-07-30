// client side javascript controls

// configuration
var baseurl = 'http://atlantic.lan.walternet.us:8000'
var gpioright = '17'
var gpioleft = '27'

// logic
function debug() 
{
  alert("DEBUG: loaded functions file");
}
function setoutput() 
{
  // set starboard side to output
  var outright = new XMLHttpRequest();
  var urlright = baseurl + "/GPIO/" + gpioright + "/function/out";
  outright.open("POST", urlright, true);
  outright.send();
  // set port side to output
  var outleft = new XMLHttpRequest();
  var urlleft = baseurl + "/GPIO/" + gpioleft + "/function/out";
  outleft.open("POST", urlleft, true);
  outleft.send();
}
function propstop(screw)
{
  switch( screw.name ) {
    case "left":
      var stopgpio = gpioleft
      break;
    case "right":
      var stopgpio = gpioright
      break;
    default:
      alert("Error in propstop, with " + screw.name )
      break;
  }
  var stopreq = new XMLHttpRequest();
  var stopurl = baseurl + "/GPIO/" + stopgpio + "/value/0";
  stopreq.open("POST", stopurl, true);
  stopreq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  stopreq.send();
}
function propgo(screw)
{
  //alert("DEBUG: got propgo " + screw.name );
  switch( screw.name ) {
    case "left":
      var startgpio = gpioleft
      break;
    case "right":
      var startgpio = gpioright
      break;
    default:
      alert("Error in propstart, with " + screw.name )
      break;
  }
  var startreq = new XMLHttpRequest();
  var starturl = baseurl + "/GPIO/" + startgpio + "/value/1";
  startreq.open("POST", starturl, true);
  startreq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  startreq.send();
}
