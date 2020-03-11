//====================================================================================
  
//    Template Name: Runaway - Personal Portfolio HTML Template
//    Version: 2.1.1
//    Author: themetrading
//    Email: themetrading@gmail.com
//    Developed By: themetrading
//    First Release: 08 February 2019
//    Author URL: www.themetrading.com

//=====================================================================================
 
//  01.   Preloader For Hide loader
//  02.   Scroll Top
//  03.   Navbar scrolling navbar Fixed
//  04.   Services Slider
//  05.   Team Slider
//  06.   Testimonial Slider
//  07.   Fact Counter
//  08.   LightBox / Fancybox
//  09.   Gallery With Filters List
//  10.   Youtube and Vimeo video popup control
//  11.   Contact Form Validation

//=====================================================================================

(function ($) {
    "use strict";

    var $body = $("body"),
        $window = $(window),
        $contact = $('#contact-form');
        
        $body.scrollspy({
          target: ".navbar-collapse",
          offset: 20

    });

//=====================================================================================
//  01.   Preloader For Hide loader
//=====================================================================================

  function handlePreloader() {
    if($('.preloader').length){
      $('.preloader').delay(500).fadeOut(500);
      $('body').removeClass('page-load');
    }
  } 

  $window.on('load', function() {
    handlePreloader();
  });

//=====================================================================================
// 02.  Scroll Top
//======================================================================================

  $(window).scroll(function(){ 
    if ($(this).scrollTop() > 500) { 
      $('#scroll').fadeIn(); 
    } else { 
      $('#scroll').fadeOut(); 
    } 
  }); 
  $('#scroll').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 1000); 
    return false; 
  });

//====================================================================================
// 03.    Navbar scrolling navbar Fixed
//====================================================================================

  $window.on("scroll",function () {

    var bodyScroll = $window.scrollTop(),
      navbar = $(".main_nav"),
      logo = $(".main_nav .navbar-brand> img");

    if(bodyScroll > 100){

      navbar.addClass("nav-scroll");
    }else{

      navbar.removeClass("nav-scroll");
    }
  });

//=====================================================================================
//  04.   Services Slider
//=====================================================================================

    $('.services_item').owlCarousel({
     loop: true,
     autoplay: false,
     autoplayTimeout: 5000,
     nav: true,
     dots: false,
     navText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
     responsive:{

        0:{
          items:1
        },
        600:{
          items:1
        },
        1024:{
          items:3
        },
        1200:{
          items:3
        }
      }
      
     });

//=====================================================================================
//  05.   Team Slider
//=====================================================================================

  $('.team_member').owlCarousel({
   loop: true,
   autoplay: false,
   autoplayTimeout: 5000,
   margin: 30,
   nav: true,
   dots: false,
   navText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
   responsive:{

      0:{
        items:1
      },
      600:{
        items:1
      },
      1024:{
        items:3
      },
      1200:{
        items:3
      }
    }
    
   });

//=====================================================================================
//  06.   Testimonial Slider
//=====================================================================================

    $('.testimonial_item').owlCarousel({
     loop: true,
     autoplay: true,
     autoplayTimeout: 5000,
     margin: 0,
     nav: true,
     dots: false,
     navText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
     responsive:{

        0:{
          items:1
        },
        600:{
          items:1
        },
        1024:{
          items:2
        },
        1200:{
          items:2
        }
      }
      
     });

//=====================================================================================
// 07.    Fact Counter
//=====================================================================================

 function factCounter() {
    if($('.fact-counter').length){
     $('.fact-counter .count.animated').each(function() {
    
      var $t = $(this),
       n = $t.find(".count-num").attr("data-stop"),
       r = parseInt($t.find(".count-num").attr("data-speed"), 10);
       
      if (!$t.hasClass("counted")) {
         $t.addClass("counted");
         $({
          countNum: $t.find(".count-text").text()
         }).animate({
          countNum: n
         }, {
          duration: r,
          easing: "linear",
          step: function() {
           $t.find(".count-num").text(Math.floor(this.countNum));
          },
          complete: function() {
           $t.find(".count-num").text(this.countNum);
          }
         });
      }
      
      //set skill building height


       var size = $(this).children('.progress-bar').attr('aria-valuenow');
       $(this).children('.progress-bar').css('width', size+'%');

     });
    }
 }
  
  if($('.wow').length){
    var wow = new WOW(
      {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true       // act on asynchronously loaded content (default is true)
      }
    );
    wow.init();
  }

   // When document is Scrollig, do
 
 $(window).on('scroll', function() {
  factCounter();
 });

//=====================================================================================
//  08.   LightBox / Fancybox
//=====================================================================================

    $('[data-fancybox="gallery"]').fancybox({
       animationEffect: "zoom-in-out",
       transitionEffect: "slide"
    });

//=====================================================================================
//  09.   Gallery With Filters List
//=====================================================================================

    if($('.filter-list').length){
      $('.filter-list').mixItUp({});
    }

//=====================================================================================
//  10.   Youtube and Vimeo video popup control
//=====================================================================================

     jQuery(function(){
      jQuery("a.video-popup").YouTubePopUp();
      //jQuery("a.video-popup").YouTubePopUp( { autoplay: 0 } ); // Disable autoplay
     });

//=========================================================================================
//  11.   Contact Form Validation
//=========================================================================================

if($contact.length){
    $contact.validate({  //#contact-form contact form id
      rules: {
        name: {
          required: true    // Field name here
        },
        email: {
          required: true, // Field name here
          email: true
        },
        subject: {
          required: true
        },
        message: {
          required: true
        }
      },
      
      messages: {
                name: "Please enter your First Name", //Write here your error message that you want to show in contact form
                email: "Please enter valid Email", //Write here your error message that you want to show in contact form
                subject: "Please enter your Subject", //Write here your error message that you want to show in contact form
                message: "Please write your Message" //Write here your error message that you want to show in contact form
            },

            submitHandler: function (form) {
                $('#send').attr({ 'disabled': 'true', 'value': 'Sending...' });
                sendEmail(form);
                //$.ajax({
                //    type: "POST",
                //    url: "email.php",
                //    data: $(form).serialize(),
                //    success: function () {
                //        $('#send').removeAttr('disabled').attr('value', 'Send');
                //        $( "#success").slideDown( "slow" );
                //        setTimeout(function() {
                //        $( "#success").slideUp( "slow" );
                //        }, 5000);
                //        form.reset();
                //    },
                //    error: function() {
                //        $('#send').removeAttr('disabled').attr('value', 'Send');
                //        $( "#error").slideDown( "slow" );
                //        setTimeout(function() {
                //        $( "#error").slideUp( "slow" );
                //        }, 5000);
                //    }
                //});
                return false; // required to block normal submit since you used ajax
            }

    });
  }

//=========================================================================================
//  12.   html page retrieve
//=========================================================================================
    includeHTML();
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
    }

    function sendEmail(form) {
        var data = $(form).serialize();
        
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "ravindrarathore19@gmail.com",
            Password: "599A74C9D869140591842D15A5E3127AC398",
            To: 'info@ravindrarathore.com',
            From: "ravindrarathore19@gmail.com",
            Subject: "Enquiry on ravindrarathore.com",
            Body: deparam(data)
        }).then(
            function (x) {
                if (x == "OK") {

                    $('#send').removeAttr('disabled').attr('value', 'Send');
                    $("#success").slideDown("slow");
                    setTimeout(function () {
                        $("#success").slideUp("slow");
                    }, 5000);
                    form.reset();

                }
                else {
                    $('#send').removeAttr('disabled').attr('value', 'Send');
                    $("#error").slideDown("slow");
                    setTimeout(function () {
                        $("#error").slideUp("slow");
                    }, 5000);
                }

            }
        );
}
    function deparam(query) {
        var pairs, i, keyValuePair, key, value, map = {};
        // remove leading question mark if its there
        if (query.slice(0, 1) === '?') {
            query = query.slice(1);
        }
        if (query !== '') {
            pairs = query.split('&');
            for (i = 0; i < pairs.length; i += 1) {
                keyValuePair = pairs[i].split('=');
                key = decodeURIComponent(keyValuePair[0]);
                value = (keyValuePair.length > 1) ? decodeURIComponent(keyValuePair[1]) : undefined;
                map[key] = value;
            }
        }
        return map;
    }

})(jQuery);

