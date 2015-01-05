(function () {
    'use strict';

    angular.module('svccApp')
        .controller('HomeController', HomeController);

    function HomeController(speakerUrls, speakerDataModelUrlService) {
        speakerDataModelUrlService.setData(speakerUrls);
    }

    HomeController.$inject = ['speakerUrls', 'speakerDataModelUrlService'];

}());
