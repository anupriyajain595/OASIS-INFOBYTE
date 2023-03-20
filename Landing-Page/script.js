//toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

//owl carousel script
$('.carousel').owlCarousel({
margin: 20,
loop: true,
autoplayTimeOut: 2000,
autoplayHoverPause: true,
responsive: {
  100:{
    items: 1,
    nav: false,
  },
  850:{
    items: 2,
    nav: false,
  },
},
});