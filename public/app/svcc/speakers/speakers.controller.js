(function () {

    'use strict';

    angular
        .module('baseApp')
        .controller('SpeakersController', SpeakersController);



    function SpeakersController(speakers) {
        var vm = this;
        vm.speakers = speakers;
    }

    SpeakersController.$inject = ['speakers'];

}());