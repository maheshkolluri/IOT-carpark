//String ServerIP = "192.168.1.38"; //Paul Asus  MAC: 40:E2:30:CC:1E:8D
//String ServerIP = "192.168.1.88"; //Darren PC MAC: CC:B0:DA:CA:EA:D1

var myTimer;
var ServerIP = '192.168.1.38';
var lightColors;

function getInfo() {
  var navigator = document.getElementById('adminNavigator');
  data = { data: { title: 'IOT Carpark' }, animation: 'slide' };
  navigator.pushPage('info.html', data);
}

function getAdminInfo() {
  var navigator = document.getElementById('adminNavigator');
  data = { data: { title: 'IOT Carpark' }, animation: 'slide' };
  navigator.pushPage('info.html', data);
}

function startTimer() {
  $('#status').html('it worksaaa');
  myTimer = setInterval(function() {
    fetchDataFromServer();
  }, 100);
  document.getElementById("light-img").src="images/green.png";
}

function stopTimer() {
  clearInterval(myTimer);
  document.getElementById("light-img").src="images/red.png";

}


function calibrateOn() {
  var response = confirm("Are you sure you want to Calibrate?");
  if(response) {
    alert("Calibration Started");
    startCalibrate();
  }
  else alert("Cancelled");
 
}

function startCalibrate() {
  //var url = 'http://192.168.137.1/parking/setcmd.php?cmd=1';
  var url = 'http://' + ServerIP + '/parking/setcmd.php?cmd=1';

  $.ajax(url)
    .done(function(data) {
      $('#status').html('Calibrating...');
    })

    .fail(function() {
      $('#status').html('error not found!');
    });
}

function calibrateOff() {
  console.log('...calib off...');
  //var url = 'http://192.168.137.1/parking/setcmd.php?cmd=0';
  var url = 'http://' + ServerIP + '/parking/setcmd.php?cmd=0';
  $.ajax(url)
    .done(function(data) {
      $('#status').html('');
      ons.notification.toast({
        message: 'Calibrate Off',
        timeout: 2000
      });
    })

    .fail(function() {
      $('#status').html('error not found!');
    });
}

function fetchDataFromServer() {
  //var url = 'http://192.168.137.1/parking/getdata.php';
  var url = 'http://' + ServerIP + '/parking/getdata.php';
  $.ajax(url)
    .done(function(data) {
      lightColors = JSON.parse(data);

      $('#status-a').html('a: ' + lightColors[0].a);
      $('#status-b').html('b: ' + lightColors[0].b);
      $('#status-c').html('c: ' + lightColors[0].c);
      $('#status-d').html('d: ' + lightColors[0].d);
      $('#status-e').html('e: ' + lightColors[0].e);
      $('#status-f').html('f: ' + lightColors[0].f);
      $('#status-g').html('g: ' + lightColors[0].g);
      $('#status-h').html('h: ' + lightColors[0].h);
      $('#status-cmd').html('cal: ' + lightColors[0].cmd);
  
      setColors();
      
    })

    .fail(function() {
      $('#status').html('error not found!');
    });
}

var green = '#90EE90';
var red = '#FDD5B1';
function setColors() {
  if (lightColors[0].a < 0.9)
    document.getElementById('a').style.backgroundColor = red;
  else document.getElementById('a').style.backgroundColor = green;

  if (lightColors[0].b < 0.9)
    document.getElementById('b').style.backgroundColor = red;
  else document.getElementById('b').style.backgroundColor = green;

  if (lightColors[0].c < 0.9)
    document.getElementById('c').style.backgroundColor = red;
  else document.getElementById('c').style.backgroundColor = green;

  if (lightColors[0].d < 0.9)
    document.getElementById('d').style.backgroundColor = red;
  else document.getElementById('d').style.backgroundColor = green;

  if (lightColors[0].e < 0.9)
    document.getElementById('e').style.backgroundColor = red;
  else document.getElementById('e').style.backgroundColor = green;

  if (lightColors[0].f < 0.9)
    document.getElementById('f').style.backgroundColor = red;
  else document.getElementById('f').style.backgroundColor = green;

  if (lightColors[0].g < 0.9)
    document.getElementById('g').style.backgroundColor = red;
  else document.getElementById('g').style.backgroundColor = green;

  if (lightColors[0].h < 0.9) {
    document.getElementById('h').style.backgroundColor = red;
  } else document.getElementById('h').style.backgroundColor = green;
}

