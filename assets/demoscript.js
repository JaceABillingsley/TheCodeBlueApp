function getfilename(mode = "default") {
  var date = new Date();
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0');
  var yy = date.getFullYear();
  var hr = date.getHours();
  var min = date.getMinutes();

  if (mode === "default"){
    return `${mm}/${dd}/${yy} At ${hr}:${min}`;
  }
  if (mode === "test"){
    return `${mm}/${dd}/${yy}|At|${hr}:${min}`;
  }

  return `CodeBlue_${mm}-${dd}-${yy}_${hr}-${min}`;
}

function getstart() {
  return `Started code on ` + getfilename(mode = "default");
}

function getpreview() {
  return `Started|code|on|` + getfilename(mode = "test");
}

function getend() {
  return `Ended code on ` + getfilename(mode = "default");
}

function getendp() {
  return `Ended|code|on|` + getfilename(mode = "test");
}

var filenametouse = getfilename();
var data = '';
var localdata = '';
var rosc = 'False';
var counter = 1;

const timer = document.getElementById('m1');
const timer2 = document.getElementById('s1');
const timer3 = document.getElementById('s2');
const text1 = document.getElementById('t1');
const text2 = document.getElementById('t2');

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }


    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 300);
  }
}

function resetTimer() {
    hr = 0;
    min = 0;
    sec = 0;

    timer.innerHTML = '00:00:00';
    reset()
}

function change() {
  document.getElementById("m1").style.backgroundColor="#ffffff";

}
function reset() {
  document.getElementById("m1").style.backgroundColor="#00ff00";
}


var hr2 = 0;
var min2 = 0;
var sec2 = 0;
var stoptime2 = true;

function startTimer2() {
  if (stoptime2 == true) {
        stoptime2 = false;
        timerCycle2();
    }
}


function stopTimer2() {
  if (stoptime2 == false) {
    stoptime2 = true;
  }
}

function timerCycle2() {
    if (stoptime2 == false) {
    sec2 = parseInt(sec2);
    min2 = parseInt(min2);
    hr2 = parseInt(hr2);

    sec2 = sec2 + 1;

    if (sec2 == 60) {
      min2 = min2 + 1;
      sec2 = 0;
    }
    if (min2 == 60) {
      hr2 = hr2 + 1;
      min2 = 0;
      sec2 = 0;
    }

    if (sec2 < 10 || sec2 == 0) {
      sec2 = '0' + sec2;
    }
    if (min2 < 10 || min2 == 0) {
      min2 = '0' + min2;
    }
    if (hr2 < 10 || hr2 == 0) {
      hr2 = '0' + hr2;
    }

    if (min2 == 3) {
      t1('okay');
    }

    timer2.innerHTML = hr2 + ':' + min2 + ':' + sec2;

    setTimeout("timerCycle2()", 300);
  }
}

function s1reset(info) {
    var d = new Date();
    var n = d.getTime();
    startTimer2();
    data += `${info}|given|at|${hr + '+' + min + '+' + sec}_`;
    localdata += `${info} given at ${hr + ':' + min + ':' + sec} \n`;
    hr2 = 0;
    min2 = 0;
    sec2 = 0;
    t1('no');
    timer2.innerHTML = '00:00:00';
}

function change2(input) {
  if (input == 'red') {document.getElementById("s1").style.backgroundColor="#FF0000";}
  if (input == 'yellow') {document.getElementById("s1").style.backgroundColor="#FFFF00";}
}


var hr3 = 0;
var min3 = 0;
var sec3 = 0;
var stoptime3 = true;

function startTimer3() {
  if (stoptime3 == true) {
        stoptime3 = false;
        timerCycle3();
    }
}
function stopTimer3() {
  if (stoptime3 == false) {
    stoptime3 = true;
  }
}

function timerCycle3() {
    if (stoptime3 == false) {
    sec3 = parseInt(sec3);
    min3 = parseInt(min3);
    hr3 = parseInt(hr3);

    sec3 = sec3 + 1;

    if (sec3 == 60) {
      min3 = min3 + 1;
      sec3 = 0;
    }
    if (min3 == 60) {
      hr3 = hr3 + 1;
      min3 = 0;
      sec3 = 0;
    }

    if (sec3 < 10 || sec3 == 0) {
      sec3 = '0' + sec3;
    }
    if (min3 < 10 || min3 == 0) {
      min3 = '0' + min3;
    }
    if (hr3 < 10 || hr3 == 0) {
      hr3 = '0' + hr3;
    }

    if (min3 == 2) {
      t2('okay');
    }

    timer3.innerHTML = hr3 + ':' + min3 + ':' + sec3;

    setTimeout("timerCycle3()", 300);
  }
}

function s2reset() {
    hr3 = 0;
    min3 = 0;
    sec3 = 0;

    timer3.innerHTML = '00:00:00';
}


function change3(input) {
  if (input == 'red') {document.getElementById("s2").style.backgroundColor="#FF0000";}
  if (input == 'yellow') {document.getElementById("s2").style.backgroundColor="#FFFF00";}
}

 
 
function end() {
  data += `${getendp()}`
  localdata += `${getend()}`
  download(`${filenametouse}`,localdata);
  window.location.replace(`https://app.thecodeblueapp.com/data?${data}`);
}

function endnorosc() {
  data += `Code|time|was|${hr + '+' + min + '+' + sec}_`;
  localdata +=  `Code time was ${hr + ':' + min + ':' + sec} \n`;
  end();
}

function rosco() {
  data += `ROSC|obtained|at|${hr + '+' + min + '+' + sec}_`;
  localdata +=  `ROSC obtained at ${hr + ':' + min + ':' + sec} \n`;
  end();
}

function pulsecheck() {
  data += `Pulse|checked|at|${hr + '+' + min + '+' + sec}_`;
  localdata +=  `Pulse checked at ${hr + ':' + min + ':' + sec} \n`;
  s2reset();
  t2('no');
}

function startmessage(){
  data += `${getpreview()}_`;
  localdata += `${getstart()} \n`;
  document.getElementById("t1").style.backgroundColor="#2cccc4";
  text1.innerHTML = 'Okay for medication';
 }

//#2cccc4 - Green
//#db545a - Red


function t1(info) {
  if (info == 'okay') {
    text1info = 1
    document.getElementById("t1").style.backgroundColor="#2cccc4";
    text1.innerHTML = 'Okay for medication';
  }
  else if (info == 'no') {
    text1info = 2;
    document.getElementById("t1").style.backgroundColor="#db545a";
    text1.innerHTML = 'Wait for medication';
  }
}

function t2(info) {
  if (info == 'okay') {
    text2info = 1;
    document.getElementById("t2").style.backgroundColor="#2cccc4";
    text2.innerHTML = 'Ready for pulse check';
  }
  else if (info == 'no') {
    text2info = 2;
    document.getElementById("t2").style.backgroundColor="#db545a";
    text2.innerHTML = 'Continue Compressions';
  }
}