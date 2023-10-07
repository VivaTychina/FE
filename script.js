function sendform(){
  var l=document.getElementsByClassName('login')[0];
  l.classList.add('loginhidden');
  var login=document.getElementsByTagName('input')[0].value;
  var pass=document.getElementsByTagName('input')[1].value;
  var e=document.getElementsByClassName('priv')[0];
  var b=document.getElementsByClassName('priv')[1];
  e.innerHTML=login;
  b.innerHTML=pass;
  var vhod=document.getElementsByClassName('vhod')[0];
  vhod.classList.add('vhodv');
}