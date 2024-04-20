document.getElementById('coxswain').onmousedown = function(e) {
  document.getElementById('coxswain-window').style.right = '15px';
}

document.getElementById('seats').onmousedown = function(e) {
  document.getElementById('seat-window').style.right = '15px';
}

document.getElementById('close-seat-window').onmousedown = function(e) {
  document.getElementById('seat-window').style.right = '-1000px';
}

document.getElementById('close-coxswain-window').onmousedown = function(e) {
  document.getElementById('coxswain-window').style.right = '-1000px';
}

document.getElementById('close-form-window').onmousedown = function(e) {
  document.getElementById('form-window').style.right = '-1000px';
}

document.getElementById('oar-btn').onmousedown = function(e) {
  document.getElementById('oar-window').style.right = '15px';
}

document.getElementById('close-oar-window').onmousedown = function(e) {
  document.getElementById('oar-window').style.right = '-1000px';
}
