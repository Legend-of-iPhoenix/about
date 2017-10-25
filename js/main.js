function randEverySec() {
    window.setInterval(function() {
      var random1 = 50 + Math.floor(Math.random() * 50);
      var random2 = 50 + Math.floor(Math.random() * 50);
  
      var button = document.querySelector('#button');
      button.style.setProperty('--width-r', random1 +"px");
      button.style.setProperty('--height-r', random2 +"px");
   } , 1000);
}
