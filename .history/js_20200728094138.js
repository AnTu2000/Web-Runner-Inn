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