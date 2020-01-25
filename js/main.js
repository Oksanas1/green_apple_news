$(function(){

  $(".owl-banner").owlCarousel({
      items: 1,
      lazyLoad: true,
      loop: true,
      autoplay: true,
      dotsClass: 'owl-dots',
      dotClass: 'owl-dot'
   });

  $(".owl-testimonials").owlCarousel({
      items: 1,
      loop: true,
      animateOut: "slideOutUp",
      animateIn: "slideInUp",
      nav: true,
      navClass: ['owl-submit icon-arrow-doun','owl-submit icon-arrow_up'],
      autoplay: true,
      autoplayTimeout: 5000,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
   });
});