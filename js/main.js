window.setInterval(function() {
  alert('test');
  var random1 = 50 + Math.floor(Math.random() * 50);
  var random2 = 50 + Math.floor(Math.random() * 50);
  
  var button = document.querySelector('#button');
  button.style.setProperty('--width-random', random1 +'px');
  button.style.setProperty('--height-random', random2 +'px');
} , 1000);
