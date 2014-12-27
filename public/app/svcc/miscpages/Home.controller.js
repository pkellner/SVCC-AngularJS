(function () {
    'use strict';

    angular.module('svccApp')
        .controller('HomeController', HomeController);

    function HomeController(speakers,speakerDataModelService) {
        debugger;
        speakerDataModelService.setData(speakers);
        //$state.transitionTo('svcc.home');
    }

    HomeController.$inject = ['speakers','speakerDataModelService'];

}());
