slideIndex = 0;
showSlides();

function showSlides() {
  i=0;
  slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
}

function plusSlides(position) {
  slideIndex += position;
  if (slideIndex>slides.length) 
  {slideIndex = 1}
  
  else if(slideIndex<1) 
  {slideIndex = slides.length}
    for (i=0; i<slides.length; i++) {
       slides[i].style.display = "none";}
  slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
