$('#BMI').bind('click', function(){
 var a= $('#A').val();
 var b=$('#B').val(); 
 var c=null;
  a = parseFloat(a);
  b = parseFloat(b);
  c =b/a/a;
  c =c*10;
  c = parseInt(c);
  c =c/10;
  $('#result').text(c);
  
});