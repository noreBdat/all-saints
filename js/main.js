


$(".ham").click(function(){
    $(".ham").toggleClass("open");
    $(".menu").toggleClass("change");
})

$('header ul li').on('click', function () {
  
    $('header ul li').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');   
    }
    
  });
  let header = document.querySelector("header");
 let ham = document.querySelector(".ham");
 let menu = document.querySelector(".menu");
  let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
      header.classList.remove("hide");
    // header.style.transform = "translateY(0)";
  } else {
    menu.classList.remove("change");
    ham.classList.remove("open");
    header.classList.add("hide");
    // header.style.transform = "translateY(100%)";
  }
  prevScrollpos = currentScrollPos;
}


// $('.slider').slick({
  
//   arrows: true,
//   autoplay: false,
 
//   centerMode: true,
//   variableWidth: true,
//   centerPadding: '0',
//   nextArrow: "#next",
//   prevArrow:"#prev",
//   responsive: [
//     {
//       breakpoint: 9999,
//       settings: 'unslick'
      
//     },
//     {
//       breakpoint: 767,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         infinite: true,
//         dots: false,
//       }
//     },
    
     

//     ]
  
// });




$(document).ready(function() {
     
  $('#childrenUp').click(function(event){
    event.preventDefault();
    $('#childrenBody').toggleClass('full');

  });

  $('#childrenDown').click(function(event){
   event.preventDefault();
   $('#childrenBody').toggleClass('full');

  });

  $('#wardenUp').click(function(event){
    event.preventDefault();
    $('#wardenBody').toggleClass('full');
  });

  $('#wardenDown').click(function(event){
    event.preventDefault();
    $('#wardenBody').toggleClass('full');
  });

  $('#ministerUp').click(function(event){
    event.preventDefault();
    $('#minister').toggleClass('full');
  });

  $('#ministerDown').click(function(event){
    event.preventDefault();
    $('#minister').toggleClass('full');
  });
       

 
  

  $("#eventsSlider").slick({
    infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow:'#next',
    prevArrow:'#prev',
    mobileFirst: true,
    responsive: [
      {
          breakpoint: 767,
          settings: 'unslick'
      }
  ]
   
});
 
});




  $(document).ready(function(){
    $("#team-slider").owlCarousel({
      navigation: true,
      pagination: false,
      responsive: true,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [980,2],
      itemsTablet: [768,2],
      itemsMobile : [479,1],
      navigationText : ['<p id="prev"><i class="fa fa-arrow-left"></i>previous </p> <span>/</span>','<p id="next">next <i class="fa fa-arrow-right"></i></p>'],
      navSpeed: 1500,
    });

    
  });