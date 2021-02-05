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

/* Scroll to top */

$(function() {
         
  var icon = $('.scroll-to-top-icon i');

  $(window).scroll(function() {
      if ($(window).scrollTop() > 90) {
          icon.addClass('show');
      } else {
          icon.removeClass('show');
      }
  });

  icon.click(function() {
      $('html, body').animate({scrollTop: 0}, 400, 'linear');
  });
});
