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
  //alert("DEBUG: starboard url is " + urlright );
  outright.open("POST", urlright, true);
  outright.send();
  // set port side to output
  var outleft = new XMLHttpRequest();
  var urlleft = baseurl + "/GPIO/" + gpioleft + "/function/out";
  //alert("DEBUG: port url is " + urlleft );
  outleft.open("POST", urlleft, true);
  outleft.send();
}
function propstop(screw)
{
  //alert("DEBUG: got propstop " + screw.name);
}
function propgo(screw)
{
  //alert("DEBUG: got propgo " + screw.name );
}
function nothing() 
{
  var xmlhttp = new XMLHttpRequest();
  var url = "/lights";
  var params = "switch=true";
  xmlhttp.open("POST", url, true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(params);
}
