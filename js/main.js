function randEverySec() {
    window.setInterval(function() {
      var random1 = 50 + Math.floor(Math.random() * 50);
      var random2 = 50 + Math.floor(Math.random() * 50);
  
      var button = document.querySelector('#button');
      button.style.width = random1 + "px";
      button.style.height = random1 + "px";
   } , 500);
}
