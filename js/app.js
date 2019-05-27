if ('serviceWorker' in navigator) {navigator.serviceWorker.register('/js/sw.js');}

/* dynamic year */ 
let date = new Date().getFullYear();

document.getElementById("year").innerHTML = date;

/* gmaps */
var map;
    $(document).ready(function(){
      map = new GMaps({
        el: '#map',
        lat: 37.7892444,
        lng: -122.3979676,
        zoom: 16,
        zoomControl : true,
        zoomControlOpt: {
            style : 'SMALL',
            position: 'TOP_BOTTOM'
        },
        panControl : false,
        streetViewControl : false,
        mapTypeControl: false,
        overviewMapControl: false
      });
    });

$(document).ready(function() {
  
  $(window).scroll(function () {
     ($(window).scrollTop())
    if ($(window).scrollTop() > 280) {
      $('.navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 281) {
      $('.navbar').removeClass('navbar-fixed');
    }
  });
});
    
     new WOW().init();
    
    /* Animations On Scroll */
     $(function() {
          $('.js--fadeIn').addClass('animated fadeIn');
      }, {
          offset: '50%;'
      });
      
     $(function() {
          $('.js--slideInLeft').addClass('animated slideInLeft');
      }, {
          offset: '50%;'
      });
      
     $(function() {
          $('.js--slideInRight').addClass('animated slideInRight');
      }, {
          offset: '50%;'
      });
      
      $(function() {
          $('.js--pulse').addClass('animated pulse');
      }, {
          offset: '50%;'
      });

