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
$(".rotate").hover(function () {
  $(this).toggleClass("down");
})

// Slide images home
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//product
function myFunctionpr() {
  document.getElementById("text4-inf-pr").innerHTML = "Tím";
  document.getElementById("text2-inf-pr").innerHTML = "SKU: S-0015-1";
  document.getElementById("coler-pr").setAttribute("class", "boder-pr");
  document.getElementById("demo").setAttribute("class", "boder3-pr");
  document.getElementById("demo2").setAttribute("class", "boder2-pr");
  document.getElementById("coler2-pr").setAttribute("class", "boder-pr2");
}
function myFunction2pr() {
  document.getElementById("text4-inf-pr").innerHTML = "Xanh";
  document.getElementById("text2-inf-pr").innerHTML = "SKU: S-0015-5";
  document.getElementById("coler2-pr").setAttribute("class", "boder-pr");
  document.getElementById("coler-pr").setAttribute("class", "boder-pr2");
  document.getElementById("demo").setAttribute("class", "boder2-pr");
  document.getElementById("demo2").setAttribute("class", "boder3-pr");
}

var i = 0;
function buttonClick() {
   var vla = document.getElementById('input-inf-pr').value;
   vla += 
   document.getElementById('input-inf-pr').innerHTML = vla;
}