var CSSC_App = {
	_presentersSlider: null,
	_standardSlider: null,
	_proctorsSlider: null,
	_individualPresentersSliders: [],
	_resizeTimer: null,
	afterInit: false,

	init: function () {
		this.registerPlugins();
		this.tappizeMenus();
		this.initResponsiveImages();
		this.initCollapsibles();

		$( window ).load( function() {
			// These modules need to be loaded after we're sure custom fonts are applied
			CSSC_App.initCarousels();
			CSSC_App.normalizeBoxHeights();
			CSSC_App.initInlineSearch();

			CSSC_App.afterInit = true;

			$( window ).resize( function() {
				CSSC_App._resizeTimer && clearTimeout( CSSC_App._resizeTimer );
   				CSSC_App._resizeTimer = setTimeout( CSSC_App._resizeHandler, 100 );
			});
		});
	},

	_resizeHandler: function() {
		CSSC_App.initCarousels();
		CSSC_App.initResponsiveImages();
	},

	/*
	 * Init collapsible segments
	 */
	initCollapsibles: function() {
		$( '.collapsible' ).each( function() {
			$( this ).data( 'original-height', $(this).height() ).css({
				height: 0,
				overflow: 'hidden'
			}).after( '<a class="collapseControl collapsed">Read More</a>' );
		});
		$( '.collapseControl' ).on( 'click', function() {
			if ( $( this ).hasClass( 'collapsed' ) ) {
				$( this ).text( 'Read less' ).removeClass( 'collapsed' ).addClass( 'opened' ).prev().each( function() {
					$( this ).animate({
						height: $( this ).data( 'original-height' )
					}, 500, function() {
						$( this ).css( 'height', 'auto' );
					} );
				});
			} else {
				$( this ).text( 'Read more' ).removeClass( 'opened' ).addClass( 'collapsed' ).prev().each( function() {
					$( this ).animate({
						height: 0
					}, 500);
				});
			}
		});
	},

	/*
	 * Small useful plugins and snippets
	 */
	registerPlugins: function() {

		/* Nifty snippet for equalizing height of elements */
		$.fn.equalizeHeight = function( correction ) {
			var maxHeight = 0;

			this.each(function(){
				$(this).css('min-height', 0);
				if ( $(this).height() > maxHeight )
					maxHeight = $(this).height();
			});
			return $(this).css('min-height', maxHeight);
		};

		/* In order to be able to get and remove a first element of a jQuery result */
		$.fn.shift = function() {
	        var bottom = this.get(0);
	        this.splice(0,1);
	        return bottom;
	    };

	    /* Inline search */
	    $.fn.inlineSearch = function( boxesSelector, $searchButton, $carousel, carouselObj ) {

	    	var boxSearch = function( text ) {
			    $( boxesSelector ).each( function() {
			    	$box = $(this);
			        if ( $box.find( 'h2, h3' ).text().search( new RegExp( text, 'i' ) ) < 0 ) {
			            if ( typeof carouselObj != 'undefined' ) {
			            	$box.addClass( 'remove' );
			            } else {
			            	$box.hide();
			            }
			        } else {
			        	if ( typeof carouselObj != 'undefined' ) {
			            	$box.addClass( 'append' );
			            } else {
			            	$box.show();
			            }
			        }
			    });

			    if ( typeof carouselObj != 'undefined' ) {
			    	$carousel.find( '.remove' ).appendTo( $( '.unusedSlides' ) );
			    	$carousel.append( $( '.unusedSlides .append' ) );
			    	$( '.append, .remove' ).removeClass( 'append remove' );
			    	carouselObj.reloadSlider();
			    }

			}

			var $that = $( this );
			$( this ).keyup(function () {
			    boxSearch( $that.val() );
			});
			if ( $searchButton )
				$searchButton.click( function( e ) {
					e.preventDefault();
				    boxSearch( $that.val() );
				});

		};

	},

	/*
	 * Because there is no :hover on mobile devices, the flyout menu opens on tap on such platforms.
	 */
	tappizeMenus: function() {
		$('.menuSubList').tappizeMenus();
	},

	/*
	 * We need all presenter boxes and its contents to have normalized height
	 */
	normalizeBoxHeights: function() {
		$('.presenter .namesWrapper').equalizeHeight();
		$('.presenter .description').equalizeHeight();
		$('.proctorList li').equalizeHeight();

		$('.presentersLoading').slideUp( 500, function() {
			$('#home-page').animate({
				height: $('#home-page')[0].scrollHeight+'px'
				}, 800, function() {
					$(this).css({ 'overflow': 'visible', 'height': 'auto' });
				});
		});
	},

	/*
	 * Because not all sponsor logos are equally wide, we need to create the carousel slides on the fly
	 */
	_createSponsorsSlides: function(controlsBool, reset) {

		var sponsorBottomContainers = $( '.sponsorBottom' );
		var availableWidth = $( window ).width() > 1019 ? 768 : $( window ).width() - 54;

		if (!reset) {
			sponsorBottomContainers.append( '<span class="loading">Sponsors are loading...</span>' );
		} else {
			sponsorBottomContainers.each(function () {
				$(this).data('slider').destroySlider();
			});
		}

		sponsorBottomContainers.find( 'ul' ).each( function() {

			var $items = $( this ).find( 'li' ).find('a');

			var currentWidth = 0;
			var boundaries = [ 0 ];

			$items.each( function( i ) {
				$img = $( this ).find( 'img' );
				if ( ( currentWidth + $img.outerWidth(true) ) <= availableWidth ) {
					currentWidth += $img.outerWidth(true);
				} else {
					boundaries.push( i );
					currentWidth = $img.outerWidth(true);
				}
			});

			$new_carousel = $( '<ul></ul>' );

			for ( var i = 0; i < boundaries.length; i++ ) {
				var $slide = $( '<li class="slide"></li>' );
				var upperBound = typeof boundaries[ i + 1 ] != 'undefined' ? boundaries[ i + 1 ] : $items.size();

				$items.slice( boundaries[ i ], upperBound ).each( function() {
					$slide.append( this );
				});

				$new_carousel.append( $slide );
			}

			$( this ).replaceWith( $new_carousel );
		});
		
		if (!reset) {
			sponsorBottomContainers.find( '.loading' ).hide();
		}
		sponsorBottomContainers.each(function () {
			$(this).data('slider', $(this).children( 'ul' ).bxSlider({
				controls: controlsBool,
				slideWidth: availableWidth
			}));
		});
	},

	/*
	 * Initialize carousels
	 * To change the carousel options, see @link for reference
	 * @link http://bxslider.com/options
	 */
	 initCarousels: function() {

		var nrSlides = Math.min(
	 		4, Math.ceil( $( window ).width() / 255 )
	 	);

 		nrSlidesProctors = Math.min(
	 		4, Math.ceil( $( window ).width() / 250 )
	 	);

	 	if ( !CSSC_App.afterInit ) {

		 	// Standard carousel
		 	// Figure out the optimal amount of pictures to be displayed at once

		 	var controlsBool = true;
		 	$('.standardCarousel > ul').each(function() {
		 		if ( $(this).find('li').size() <= nrSlides )
		 			controlsBool = false;
		 	});

		 	if ( $('.standardCarousel > ul').size() > 0 )
			 	CSSC_App._standardSlider = $('.standardCarousel > ul').bxSlider({
		 			slideWidth: 255,
		 			minSlides: nrSlides,
		 			maxSlides: nrSlides,
		 			infiniteLoop: false,
			 		hideControlOnEnd: true,
		 			controls: controlsBool
		 		});

		 	// Sponsors carousel
	 		// We first need to reformat those carousels so that all kinds of logos fit in nicely
	 		CSSC_App._createSponsorsSlides(controlsBool);
	 		$(window).on('resize', function () {
	 			CSSC_App._createSponsorsSlides(controlsBool, true);
	 		});

	 		CSSC_App._initPresentersSlider();

	 		if ( $('.names').size() > 0 )
		 		$('.names').each( function() {
		 			CSSC_App._individualPresentersSliders.push(
		 				$( this ).bxSlider({
							slideWidth: 125,
							minSlides: 2,
							maxSlides: 2,
							slideMargin: 15,
							infiniteLoop: false,
				 			hideControlOnEnd: true,
							controls: true
						})
		 			);
				});

	 	} else {

	 		var controlsBool = true;
		 	$('.standardCarousel > ul').each(function() {
		 		if ( $(this).find('li').size() <= nrSlides )
		 			controlsBool = false;
		 	});

		 	if ( CSSC_App._standardSlider !== null )
			 	CSSC_App._standardSlider.reloadSlider({
		 			slideWidth: 255,
		 			minSlides: nrSlides,
		 			maxSlides: nrSlides,
		 			infiniteLoop: false,
			 		hideControlOnEnd: true,
		 			controls: controlsBool
		 		});

			CSSC_App._initPresentersSlider();

	 	}

	 	if ( $(window).width() < 1020 && $('.proctorList').size() > 0 ) {

	 		if ( CSSC_App._proctorsSlider === null ) {

	 			// Proctors carousel
		 		if ( $('.proctorList li').size() > nrSlidesProctors ) {
					var controlsBool = true;
					$('.proctorList').each(function() {
				 		if ( $(this).find('li:not(.bx-clone)').size() <= nrSlidesProctors )
				 			controlsBool = false;
				 	});
					CSSC_App._proctorsSlider = $('.proctorList').bxSlider({
			 			slideWidth: 250,
			 			minSlides: nrSlidesProctors,
			 			maxSlides: nrSlidesProctors,
			 			slideMargin: 0,
			 			infiniteLoop: false,
			 			hideControlOnEnd: true,
		 				controls: controlsBool
			 		});
		 		}

	 		} else {

	 			// Proctors carousel
		 		if ( $('.proctorList li').size() > nrSlidesProctors ) {
					var controlsBool = true;
					$('.proctorList').each(function() {
				 		if ( $(this).find('li:not(.bx-clone)').size() <= nrSlidesProctors )
				 			controlsBool = false;
				 	});

				 	CSSC_App._proctorsSlider.reloadSlider({
			 			slideWidth: 250,
			 			minSlides: nrSlidesProctors,
			 			maxSlides: nrSlidesProctors,
			 			slideMargin: 0,
			 			infiniteLoop: false,
			 			hideControlOnEnd: true,
		 				controls: controlsBool
			 		});
		 		}

	 		}

	 	} else {
	 		if ( CSSC_App._proctorsSlider !== null ) {
 				CSSC_App._proctorsSlider.destroySlider();
 				CSSC_App.normalizeBoxHeights();
 			}
	 	}

	 },

	 /*
	  * Helper function for presenters slider, because it needs to be refreshed when an inline search for presenters is made
	  */
	 _initPresentersSlider: function() {

	 	var controlsBool = true;
	 	nrSlides = Math.min(
	 		2, Math.ceil( $( window ).width() / 720 )
	 	);

 		if ( $(window).width() < 1020 && $('.presentersCarousel').size() > 0 ) {

 			if ( CSSC_App._presentersSlider === null ) {

				CSSC_App._presentersSlider = $('.presentersCarousel').each(function() {
			 		if ( $(this).find('li.presenter').size() <= nrSlides )
			 			controlsBool = false;
			 	}).bxSlider({
		 			slideWidth: 720,
		 			minSlides: nrSlides,
		 			maxSlides: nrSlides,
		 			infiniteLoop: false,
		 			hideControlOnEnd: true,
		 			touchEnabled: false,
		 			slideMargin: 12,
 					controls: controlsBool,
 					onSliderLoad: function() {
 						$('.presenter .namesWrapper').equalizeHeight();
						$('.presenter .description').equalizeHeight();

						var currentMaxHeight = Math.max.apply(null, $(".presenter").map(function ()	{
							return $(this).height();
						}).get() );
						$('.presentersList .bx-viewport').height( currentMaxHeight + 30 );
						$('.presentersLoading').slideUp( 500, function() {
							$('.presentersList').animate({
								height: $('.presentersList')[0].scrollHeight+'px'
  							}, 800, function() {
  								$(this).css({ 'overflow': 'visible', 'height': 'auto' });
  							});
						});
 					}
		 		});

		 	} else {

		 		$('.presentersCarousel').each(function() {
			 		if ( $(this).find('li.presenter:not(.bx-clone)').size() <= nrSlides )
			 			controlsBool = false;
			 	});

			 	CSSC_App._presentersSlider.reloadSlider({
		 			slideWidth: 720,
		 			minSlides: nrSlides,
		 			maxSlides: nrSlides,
		 			slideMargin: 12,
		 			infiniteLoop: false,
		 			hideControlOnEnd: true,
		 			touchEnabled: false,
 					controls: controlsBool,
 					onSliderLoad: function() {
 						if ( CSSC_App._individualPresentersSliders.length > 0 ) {
				 			for ( i = 0; i < CSSC_App._individualPresentersSliders.length; i++ ) {
				 				CSSC_App._individualPresentersSliders[i].reloadSlider({
									slideWidth: 125,
									minSlides: 2,
									maxSlides: 2,
									slideMargin: 15,
									infiniteLoop: false,
						 			hideControlOnEnd: true,
									controls: true
								});
				 			}
				 		}

 						$('.presenter .namesWrapper').equalizeHeight();
						$('.presenter .description').equalizeHeight();

						var currentMaxHeight = Math.max.apply(null, $(".presenter").map(function ()	{
							return $(this).height();
						}).get() );
						$('.presentersList .bx-viewport').height( currentMaxHeight + 30 );
 					}
		 		})

		 	}

 		} else {
 			if ( CSSC_App._presentersSlider !== null ) {
 				CSSC_App._presentersSlider.destroySlider();
 				CSSC_App.normalizeBoxHeights();
 			}
 		}
	 },

	 /*
	 * Load the correct <img> depending on device
	 */
	 initResponsiveImages: function() {
	 	$('img.responsive').each( function() {
	 		if ( $(window).width() > 1019 ) {
	 			var currentSrc = $(this).prop('src');
	 			$(this).prop('src', currentSrc.replace( '-mobile', '') );
	 		} else {
	 			var currentSrc = $(this).prop('src');
	 			if ( currentSrc.indexOf( '-mobile' ) === -1 )
	 				$(this).prop('src', currentSrc.replace( new RegExp('\.(png|jpg|gif)'), '-mobile.$1') );
	 		}
	 		$( this ).removeClass( 'responsive' );
	 	});
	 },

	 /*
	  * Inline search for presenters
	  */
	 initInlineSearch: function() {
	 	var $presenterSearchInput = $( '.presentersSearch input[name=presenterName]' );
	 	var $presenterSearchButton = $( '.presentersSearch input[type=image]' );

	 	if ( this._presentersSlider !== null ) {
	 		$presenterSearchInput.inlineSearch( '.presenter:not(.bx-clone)', $presenterSearchButton, $( '.presentersCarousel' ), this._presentersSlider );
	 	} else {
	 		$presenterSearchInput.inlineSearch( '.presenter:not(.bx-clone)', $presenterSearchButton );
	 	}
	 }
};

jQuery(function ($) {
	CSSC_App.init();
});

