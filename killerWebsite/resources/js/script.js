$(document).ready(function() {

	$('nav').removeClass('sticky');

	$('.js--section-features').waypoint(function(direction) {
		if (direction=="down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
  		offset: '60px;'
	});

	$('.js--scrollToPlans').click(function(event) {
		$('html, body').animate({scrollTop: $('.js--sectionPlans').offset().top}, 1000);
	});

	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
		});

		$('.js--features').waypoint(function(direction){
			$('.js--features').addClass('animated fadeIn');
		}, {
			offset: '50%'
		});
		
		$('.js--mobile-nav').click(function(){
			var mainNav = $('.js--main-nav');
			var icon = $('.js--mobile-nav i')

			mainNav.slideToggle(200);

			if (icon.hasClass('ion-navicon-round')) {
				icon.addClass('ion-close-round');
				icon.removeClass('ion-navicon-round');
			} else {
				icon.addClass('ion-navicon-round');
				icon.removeClass('ion-close-round');
			}
		})

});