let slideIndex = 0;
 
function showSlides(){
   const slides = document.querySelector('.new-img');
   const images = slides.querySelectorAll('img');

    // Hide all images
    images.forEach(img => {
      img.style.display = 'none';
  });

  //show current image

   if (slideIndex >= images.length){
      slideIndex = 0;
   } 
   images[slideIndex].style.display = 'block';
}
 function nextSlide(){
   slideIndex++;
   showSlides();
 }
 
 function startSlideShow() {
   slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

startSlideShow();

//hambarger menu button

function menu_Display(){
   let btn = document.getElementById("menu_btn");
   let nav = document.querySelector(".navbar");

   if(nav.style.display === 'block'){
      nav.style.display ='none';
      btn.style.color = 'white';

   } else{
      nav.style.display = 'block';
      btn.style.color = 'gold';
   }

}