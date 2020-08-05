$(document).ready(function () {
  $(".sub1").hide();
  $(".tab1").click(function () {
    $(".sub1").slideToggle(500);
  })

});

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

window.onscroll = function () { myFunction() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};

// Home 
//Khai báo dánh sách ảnh
$('.example').square1({
  // options here
});
$('.example').square1({

  // or 'contain'
  fill_mode: 'cover',

  // CSS background-position property
  scale_from: 'center center'
  
});
$('.example').square1({

  lazy_load: true
  
});
$('.example').square1({

  // use slide transition
  animation: 'slide'

  // in milliseconds
  slide_duration: 4000,
  transition_time: 500

});
$('.example').square1({

  keyboard: true,
  gestures: true

});
$('.example').square1({

  auto_start: true,
  start_delay: 0,
  pause_on_hover: false

});
