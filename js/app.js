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
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 280) {
      $('.navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 281) {
      $('.navbar').removeClass('navbar-fixed');
    }
  });
});


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

