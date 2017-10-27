var id = null;
var id2 = null;

function clamp(num, min, max) {
  if (num < min)
    num = min;
  if (num > max)
    num = max;
  return num;
}

function randEverySec(button) {
  id2 = window.setTimeout(change(),3000);
    id = window.setInterval(function() {
      var random1 = 10 * (5 - Math.floor(Math.random() * 1));
      var random2 = 10 * (5 - Math.floor(Math.random() * 10));
      
      
      button.style.width = clamp(button.style.width + random1, 20, 100) + "px";
      button.style.height = clamp(button.style.height + random2, 20, 100) + "px";
      
   } , 500);
  }
function killRandChange(button) {
  console.log("1");
  window.clearInterval(id);
  window.clearTimeout(id);
  button.style.width = 20 +"px"; 
  button.style.height = 20 +"px";
}

function change()
{
  toggleDiv(".projects");
  toggleDiv(".projectsOld");
  window.clearInterval(id);
}

function toggleDiv(id) {
    var div = document.getElementById(id);
    div.style.display = div.style.display == "none" ? "block" : "none";
}
