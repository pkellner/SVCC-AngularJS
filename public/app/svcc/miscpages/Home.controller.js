(function () {
    'use strict';

    angular.module('svccApp')
        .controller('HomeController', HomeController);

    //function HomeController(speakers,speakerDataModelService,speakerUrls,speakerDataModelUrlService) {
    //    speakerDataModelService.setData(speakers);
    //    speakerDataModelUrlService.setData(speakerUrls);
    //}

    function HomeController(speakerUrls,speakerDataModelUrlService) {
        //speakerDataModelService.setData(speakers);
        speakerDataModelUrlService.setData(speakerUrls);
    }

    //HomeController.$inject = ['speakers','speakerDataModelService','speakerUrls','speakerDataModelUrlService'];
    HomeController.$inject = ['speakerUrls','speakerDataModelUrlService'];



}());
