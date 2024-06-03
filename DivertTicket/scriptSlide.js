function showSlides() {
  let i;
  let slides = document.getElementsByClassName("todoSlides");
  let pontos = document.getElementsByClassName("pontos");
  for (i = 0; i < slides.length; i++) {
    if (slides[i]) {
      slides[i].style.display = "none";
    }
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < pontos.length; i++) {
    pontos[i].className = pontos[i].className.replace(" active", "");
  }
  if (slides[slideIndex-1]) {
    slides[slideIndex-1].style.display = "block";
  }
  pontos[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}