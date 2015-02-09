(function () {
    'use strict';

    angular.module('baseApp')
        .controller('HomeController', HomeController);

    function HomeController(CONFIG,$rootScope,$state,faqs,sponsors,speakers,sessions) {

        //debugger;
        //speakerDataModelUrlService.setData(speakerUrlResourceService);
        var vm = this;
        vm.config = CONFIG;
        vm.faqs = faqs.data;
        vm.sponsors = sponsors.data;
        vm.speakers = speakers.data;
        vm.sessions = sessions.data;

        debugger;

        //debugger;
        vm.baseDirImage = CONFIG.baseDirImage;

        //debugger;
        //vm.backgroundslider1 = "background-image: url(" + CONFIG.baseDir + "/assets/img/bg-slider-1.jpg)";

        // I'd prefer this in the anguController but the menu bar is common to all apps so can't figure it out
        vm.anguPingMe = function (email) {
            $rootScope.pingMeEmailAddress = vm.pingMeEmailAddress;
            $state.go('base.angupingmeonfirmation');
        };
    }
    HomeController.$inject = ['CONFIG','$rootScope','$state','faqs','sponsors','speakers','sessions'];


}());
