(function () {
    'use strict';

    angular.module('baseApp')
        .controller('HomeController', HomeController);

    function HomeController(CONFIG,faqs,sponsors) {

        //debugger;
        //speakerDataModelUrlService.setData(speakerUrlResourceService);
        var vm = this;
        vm.config = CONFIG;
        vm.faqs = faqs.data;
        vm.sponsors = sponsors.data;
    }
    HomeController.$inject = ['CONFIG','faqs','sponsors'];

}());
