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
var slide = new Array();
slide[0] = "images/slideshow_1.jpg";
slide[1] = "images/slideshow_2.jpg";
slide[2] = "images/slideshow_3.jpg";
//biến key lưu về vị trí thứ mấy
var key = 0;
function next() {
  document.getElementById('show-img').setAttribute("src", slide[key]);
  //Nếu key đến vị trí cuối cùng thì reset key
  if (key == slide.length - 1) {
    key = -1;
  }
  key++;
}
function prev() {
  if (key == 0) {
    key = slide.length - 1;
  }
  document.getElementById('show-img').setAttribute("src", slide[key]);
  key--;
}
