$(document).ready(function() {
  
  $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 280) {
      $('.navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 281) {
      $('.navbar').removeClass('navbar-fixed');
    }
  });
});


function initMap() {
  // The location of Uluru
  var uluru = {lat: 37.7892444, lng: -122.3979676};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}


    /* Nav Scroll Effect */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);            
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    
     new WOW().init();
    
    /* Animations On Scroll */
    $('.js--fadeIn').waypoint(function(direction) {
        $('.js--fadeIn').addClass('animated fadeIn');
    }, {
        offset: '50%;'
    });
    
    $('.js--slideInLeft').waypoint(function(direction) {
        $('.js--slideInLeft').addClass('animated slideInLeft');
    }, {
        offset: '50%;'
    });
    
    $('.js--slideInRight').waypoint(function(direction) {
        $('.js--slideInRight').addClass('animated slideInRight');
    }, {
        offset: '50%;'
    });
    
    $('.js--pulse').waypoint(function(direction) {
        $('.js--pulse').addClass('animated pulse');
    }, {
        offset: '50%;'
    });
