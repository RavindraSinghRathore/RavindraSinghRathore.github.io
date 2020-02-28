(function($) { 
		  
$(document).ready(function(){
	jQuery(function($) {
		$(document).ready( function() {
		  //enabling stickUp on the '.navbar-wrapper' class
			$('.navbar-wrapper').stickUp({
				parts: {
				  0: 'banner',
				  1: 'aboutus',
				  2: 'skillset',
				  3: 'experience',
				  4: 'education',
				  5: 'ourwork',
				  6: 'journalblog',
				  7: 'contact'
				},
				itemClass: 'menuItem',
				itemHover: 'active',
				topMargin: 'auto'
				});
			});
			
		
		});
		$('#banner').superslides({
			animation: 'fade',
			play: 5000
		  });
		  $('#submit').click(function(){
			if($('#name').val().length>0 && $('#email').val().length>0 && $('#comments').val().length>0){
			  var name= $('#name').val();
			  var email= $('#email').val();
			  var comments= $('#comments').val();
			  Email.send({
			  Host : "smtp.elasticemail.com",
			  Username : "ravindrarathore19@gmail.com",
			  Password : "599A74C9D869140591842D15A5E3127AC398",
			  To : 'ravindrarathore19@gmail.com',
			  From : "ravindrarathore19@gmail.com",
			  Subject : "Enquiry on ravindrarathore.com",
			  Body : "Name :" + name + " Email :"+email + " Comments :" +comments
		  }).then(
			function (x){
			  if(x=="OK"){
				$("#message").show();
				$("#cform").hide();
			  }
			  else{
			  $("#message").html("It seems like some error in form submission. Please try again later.");
			  $("#message").show();
				$("#cform").hide();
			  }
			 
		  }
		  );}
			});
	$('.slide').prepend('<div class="patternOverlay"></div>');	
	
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},6000);
	});
	
	$('.skillbar').each(function(){
		$(this).find('.skill-bar-percent').animate({
			left:$(this).attr('data-percent')
		},6000);
	});
	
	$('.skillbar').each(function(){
		$(this).find('.skill-bar-percent').text($(this).attr('data-percent'));
	});
	
	if($(window).width()>767){
		$('.navbar-wrapper').animate({
			opacity:0
		},200);
		$('.navbar-wrapper').addClass('default-menu');
		
	}	
	
	$('#nav-show').click(function(x){
		x.preventDefault();
		$('.wrapper').removeClass('noGap');
		$('.navbar-wrapper').animate({
			opacity:1
		},200);
		$('.navbar-wrapper').removeClass('default-menu');
		$(this).fadeOut();
	});
	
	$('.closeMenu').click(function(x){
		x.preventDefault();
		$('.navbar-wrapper').animate({
			opacity:0
		},50,function(){$('.navbar-wrapper').addClass('default-menu');});
		
		$('#nav-show').fadeIn();
	});
	
	
});	


	
/*===========================================================*/
	/*	Preloader 
/*===========================================================*/	
//<![CDATA[
	$(window).load(function() { // makes sure the whole site is loaded
		$("#status").fadeOut(); // will first fade out the loading animation
		$("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
	})
//]]>
		  
// for mobile nav js	
$(window).load(function(){
	$('button.navbar-toggle').click(function(){
		$(this).toggleClass('active');
		$('.navbar-collapse').slideToggle();										 
	});					
});
// for banner height js
var windowWidth = $(window).width();
var windowHeight =$(window).height();
$('.banner').css({'height':windowHeight });


// for portfoli filter jquary
$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 



// for portfoli lightbox jquary
jQuery(function() {
	var $chosenSheet,
	$stylesheets = $( "a[id^=theme-]" );
	
	// run rlightbox
	$( ".lb" ).rlightbox();
	$( ".lb_title-overwritten" ).rlightbox({overwriteTitle: true});
});
});

// Somth page scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -16
        }, 1000);
        return false;
      }
    }
  });
});


// Testimonial slider
// $(window).load(function(){
  // $('.flexslider').flexslider({
	// animation: "fade",
	// animationLoop: true,
	// slideshow: true,
	// pauseOnAction: false,
	// slideshowSpeed: 7000,
	// controlNav: true,
	// start: function(slider){
	  // $('body').removeClass('loading');
	// }
  // });
// });


// we worked slider
// $(window).load(function(){
      // $('.worklogo').flexslider({
        // animation: "slide",
		// slideshow: false,
        // itemWidth: 210,
        // itemMargin: 5,
        
      // });
    // });

// Skill set 


}(jQuery));
