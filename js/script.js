/* Menu in media */

const icon = document.getElementById("icon");
const icon1 = document.getElementById("a");
const icon2 = document.getElementById("b");
const icon3 = document.getElementById("c");
const menu = document.getElementById('menu');
const color = document.getElementById("color");

icon.addEventListener('click', function() {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');  
  menu.classList.toggle('show');
  color.classList.toggle('slide');
});
