$('#BMI').bind('click', function () {
  var a = $('#A').val();
  var b = $('#B').val();
  var c = null;
  a = parseFloat(a);
  b = parseFloat(b);
  c = b / a / a;
  c = c * 10;
  c = parseInt(c);
  c = c / 10;
  if (c < 18.5) {
    document.getElementById("judge").innerHTML = '體重過輕';
  }
  else if (c < 24) {
    document.getElementById("judge").innerHTML = '<font color=008000>正常範圍</font>';
  }
  else if (c < 27) {
    document.getElementById("judge").innerHTML = '<font color=E6B800>體重過重</font>';
  }
  else if (c < 30) {
    document.getElementById("judge").innerHTML = '<font color=ff8c00>輕度肥胖</font>';
  }
  else if (c < 35) {
    document.getElementById("judge").innerHTML = '<font color=FF4500>中度肥胖</font>';
  }
  else{  document.getElementById("judge").innerHTML = '<font color=ff0000>重度肥胖</font>';
  }


  $('#result').text(c);
  ;
});