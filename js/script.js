/* Menu in media */

var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var menu = document.getElementById('menu');
var color = document.getElementById("color");

icon.addEventListener('click', function() {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');  
  menu.classList.toggle('show');
  color.classList.toggle('slide');
});
