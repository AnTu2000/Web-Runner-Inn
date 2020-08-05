var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function myFunction() {
    document.getElementById("text4-inf-pr").innerHTML = "Tím";
}
function myFunction2() {
    document.getElementById("text4-inf-pr").innerHTML = "Xanh";
}