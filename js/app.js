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


var myCenter=new google.maps.LatLng(37.7892444, -122.3979676);
var marker;

function initMap() {
var mapProp = {
  center:myCenter,
  zoom:16,
  scrollwheel:false,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("map"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initMap);



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
