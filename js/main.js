var id = null;

//Thanks, stack overflow, for providing me with a much faster version of what I was going to do.
function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}

function randEverySec(button) {
    id = window.setInterval(function() {
      var random1 = 10 * (5 - Math.floor(Math.random() * 1));
      var random2 = 10 * (5 - Math.floor(Math.random() * 10));
      
      
      //the following works, but it doesn't 
      button.style.width = clamp(button.style.width + random1, 20, 100) + "px";
      button.style.height = clamp(button.style.height + random2, 20, 100) + "px";
      
   } , 500);
  }
function killRandChange(button) {
  window.clearInterval(id);
  button.style.width = 20 +"px"; 
  button.style.height = 20 +"px";
}

function toggleDiv(id) {
    var div = document.getElementById(id);
    div.style.display = div.style.display == "none" ? "block" : "none";
}
