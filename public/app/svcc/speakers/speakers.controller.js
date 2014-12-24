(function () {

    'use strict';

    angular
        .module('svccApp')
        .controller('SpeakersController', SpeakersController);



    function SpeakersController(speakers) {
        var vm = this;
        vm.speakers = speakers;
    }

    SpeakersController.$inject = ['speakers'];

}());