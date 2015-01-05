(function () {
    'use strict';

    angular.module('baseApp')
        .controller('HomeController', HomeController);

    function HomeController(speakerUrls, speakerDataModelUrlService) {
        speakerDataModelUrlService.setData(speakerUrls);
    }

    HomeController.$inject = ['speakerUrls', 'speakerDataModelUrlService'];

}());
