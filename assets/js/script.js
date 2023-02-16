(function($){
	'use script';

	// WOW JS
	new WOW().init();
	// Nice Select
	$('select').niceSelect();


	$(".header-search-icon").click(function () {
      	if ($('.header-top-search-form').hasClass("active")) {
        	$(".header-top-search-form, .header-search-icon").removeClass("active");
      	}
      	else {
        	$(".header-top-search-form").removeClass("active");
        	$('.header-top-search-form, .header-search-icon').addClass("active");
      	}
  	});
  	// Sidebar
    $('.right-humbugur-btn').click(function(){
        $('.about-sidebar-section, .off_canvars_overlay').addClass('active');
    });
    $('.hide-sidebar i, .off_canvars_overlay').click(function(){
        $('.about-sidebar-section, .off_canvars_overlay').removeClass('active');
    });
  	
  	 // /*---Hero Slider1---*/
    var $HeroSliderSlider = $('.hero-slider-full');
    if($HeroSliderSlider.length > 0){
        $HeroSliderSlider.owlCarousel({
            loop: true,
            dots:false,
            autoplay: false,
            autoplayTimeout: 20000,
            animateOut: 'fadeOut',
            items: 1,
            nav:true,
            navText:['<span class="hero-nav"><i class="fa-solid fa-arrow-left-long"></i></span>','<span class="hero-nav"><i class="fa-solid fa-arrow-right-long"></i></span>'],
            smartSpeed: 1000,
        });
    }
     // /*---Hero Slider 2---*/
    var $HeroSliderSlider2 = $('.hero-slider-full2');
    if($HeroSliderSlider2.length > 0){
        $HeroSliderSlider2.owlCarousel({
            loop: true,
            dots:false,
            autoplay: false,
            autoplayTimeout: 20000,
            animateOut: 'fadeOut',
            items: 1,
            nav:true,
            navText:['<span class="hero-nav"><i class="fa-solid fa-arrow-left-long"></i></span>','<span class="hero-nav"><i class="fa-solid fa-arrow-right-long"></i></span>'],
            smartSpeed: 1000,
        });
    }
     

     /*---Testimonial---*/
    var $InfoSlider = $('.infobox-slider');
        if($InfoSlider.length > 0){
        $('.infobox-slider').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 8000,
            items: 4,
            margin:30,
            dots:true,
            responsiveClass:true,
            responsive:{
                    0:{
                    items: 1,
                    stagePadding: 0,
                    margin: 0,
                    center:false,
                },
                600:{
                    items:2,
                    center:false,
                },
                768:{
                    items:2,
                    center:false,
                },
                992:{
                    items:4,
                },
            }
        });
    }
     /*---Testimonial---*/
    var $BestServicesSlider = $('.our-best-services-slider');
        if($BestServicesSlider.length > 0){
        $('.our-best-services-slider').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 8000,
            items: 3,
            margin:50,
            dots:true,
            responsiveClass:true,
            responsive:{
                    0:{
                    items: 1,
                    stagePadding: 0,
                    margin: 0,
                    center:false,
                },
                600:{
                    items:2,
                    center:false,
                },
                768:{
                    items:2,
                    center:false,
                },
                992:{
                    items:3,
                },
            }
        });
    }

    // /*---slider activation---*/
    var $ClientLogoSlider = $('.client-logo-slider');
    if($ClientLogoSlider.length > 0){
        $ClientLogoSlider.owlCarousel({
            loop: true,
            dots:false,
            autoplay: true,
            autoplayTimeout: 20000,
            items: 1,
            nav:false,
            margin:50,
            smartSpeed: 1500,
            autoWidth:true
        });
    }

    // Project Slider
    var $ProjectHomeslide = $('.project-homeslide');
        if($ProjectHomeslide.length > 0){
        $('.project-homeslide').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 8000,
            items: 3,
            margin:30,
            dots:true,
            nav: true,
            responsiveClass:true,
            navText:['<span class="slidenav left-nav"><i class="fa-solid fa-arrow-left-long"></i></span>','<span class="slidenav right-nav"><i class="fa-solid fa-arrow-right-long"></i></span>'],
            responsive:{
                    0:{
                    items: 1,
                    stagePadding: 0,
                    margin: 0,
                    center:false,
                },
                600:{
                    items:2,
                    center:false,
                },
                768:{
                    items:2,
                    center:false,
                },
                992:{
                    items:3,
                },
            }
        });
    }

    // Testimonial Slider
    var $TestimonialSlide = $('.all-testimonial');
        if($TestimonialSlide.length > 0){
        $('.all-testimonial').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 8000,
            items: 3,
            margin:30,
            dots:true,
            center: true,
            responsiveClass:true,
            responsive:{
                    0:{
                    items: 1,
                    stagePadding: 0,
                    margin: 0,
                    center:false,
                },
                600:{
                    items:2,
                    center:false,
                },
                768:{
                    items:2,
                    center:false,
                },
                992:{
                    items:3,
                },
            }
        });
    }
	// Scroll Area
	$(document).ready(function(){
	    $('.scroll-area').click(function(){
	      	$('html').animate({
	        	'scrollTop' : 0,
	      	},700);
	      	return false;
	    });
	    $(window).on('scroll',function(){
	      	var a = $(window).scrollTop();
	      	if(a>400){
	            $('.scroll-area').slideDown(300);
	        }else{
	            $('.scroll-area').slideUp(200);
	        }
	    });
	});

    
    // Video
    $('.video-btn a.video-popup').magnificPopup({
        type: 'iframe'
    });
    // Portfolio Gallery
    $('.gallery-item-single a').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


	var $portfolio = $('.p-projects-full');
        if($portfolio.length > 0){
            var mixer = mixitup('.p-projects-full');
            var mixer = mixitup('.portF');
            var mixer = mixitup('.portF', {
            selectors: {
              target: '.blog-item'
            },
            animation: {
              duration: 100
            }
        });
    }


	// Counter
    // var $CounterUp = $('.counter');
    // if($CounterUp.length > 0){
	// 	$('.counter').counterUp({
	//         delay: 10,
	//         time: 2000
	//     });
	// }



	// Sticky Menu
	// $(document).ready(function(){
	// 	$(window).on('scroll',function(){
	// 		var scroll = $(window).scrollTop();
	// 		if(scroll < 150){
	// 			$('.sticky-header').removeClass('sticky');
	// 		}else{
	// 			$('.sticky-header').addClass('sticky');
	// 		}
	// 	});
	// });

}(jQuery));