/*slideshow u galeriji*/
var slideIndex = 0;

function showSlides() {
  var i;
  var slajd = document.getElementsByClassName("slajdovi");
  var tacka = document.getElementsByClassName("tackica");
  for (i = 0; i < slajd.length; i++) {
    slajd[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slajd.length) { slideIndex = 1 }
  for (i = 0; i < tacka.length; i++) {
    tacka[i].className = tacka[i].className.replace(" active", "");
  }
  slajd[slideIndex - 1].style.display = "block";
  tacka[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000);
  // Menja sliku 
}
showSlides();