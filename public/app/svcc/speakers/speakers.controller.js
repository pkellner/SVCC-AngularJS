(function () {

    'use strict';

    angular
        .module('svccApp')
        .controller('SpeakersController', SpeakersController)


    // speakers first parameter comes from resolve in app.js
    function SpeakersController(speakers) {
        console.log('speakers.controller  speakers.length: ' + speakers.length);

        var vm = this;
        vm.speakers = speakers;
    }

    // ['speakers'] refers to parameter speakers above which comes from resolve in app.js
    SpeakersController.$inject = ['speakers'];

}());