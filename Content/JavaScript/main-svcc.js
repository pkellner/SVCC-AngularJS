(function ($) {
    var SVCC_App = {
        init: function() {
            this.sponsorsCarousel();
            this.tappizeMenu();
            this.customForms();
            this.bottomCarousel();
        },

        /**
         * Sponsors carousel in sidebar
         */
        sponsorsCarousel: function() {
            $('#slider1').tinycarousel({ pager: true, interval: false });
        },

        /**
         * Because there is no :hover on mobile devices, the flyout menu opens on tap on such platforms.
         */
        tappizeMenu: function () {
            $('.menuSubList').tappizeMenus();
        },
      
        customForms: function() {            
            $('.sessionSearchFor input, .presenter .intrested input').iCheck({checkboxClass: 'icheckbox_square-green', radioClass: 'iradio_circle-orange'});
          	var $kidsCheckbox = $('input#showKidsSessions'),
				$profCheckbox = $('input#showProfSessions');
          
            $('.searchBoxField select').selectbox({effect: 'fade'});
			
            $kidsCheckbox.on('ifChecked', function(){
				$(".KidSession").each(function (index) {
                    $(this).removeClass('hidden');
                });
			});
			$kidsCheckbox.on('ifUnchecked', function(){
				$(".KidSession").each(function (index) {
                    $(this).addClass('hidden');
                });
			});
			
			$profCheckbox.on('ifChecked', function(){
				$(".ProfessionalSession").each(function (index) {
                    $(this).removeClass('hidden');
                });
			});
			$profCheckbox.on('ifUnchecked', function(){
				$(".ProfessionalSession").each(function (index) {
                    $(this).addClass('hidden');
                });
			});
            $('input, textarea').placeholder();          
        },
      
        bottomCarousel: function() {       
          $('.owl-carousel').owlCarousel({items: 3, responsive: false});
        }
    };

    $(function () {
        SVCC_App.init();
    });
}(jQuery));
