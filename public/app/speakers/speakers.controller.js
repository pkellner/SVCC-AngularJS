(function () {

    'use strict';

    angular
        .module('svccApp')
        .controller('SpeakersController', SpeakersController);



    function SpeakersController(speakerResourceService) {
        var vm = this;
        vm.speakers = speakerResourceService.query();
    }

    SpeakersController.$inject = ['speakerResourceService'];

}());