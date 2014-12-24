(function () {

    'use strict';

    angular
        .module('svccApp')
        .controller('SpeakersController', SpeakersController)


    // speakers first parameter comes from resolve in app.js
    function SpeakersController(speakers) {
        var vm = this;
        vm.speakers = speakers;
    }

    SpeakersController.$inject = ['speakers'];

}());