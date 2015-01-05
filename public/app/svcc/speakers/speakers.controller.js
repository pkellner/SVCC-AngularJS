(function () {

    'use strict';

    var app = angular
        .module('svccApp')
        .controller('SpeakersController', SpeakersController);

    app.filter( 'cleanPresenterUrl', function() {
        return function( input ) {
            debugger;
            return input.toUpperCase();
        };
    });


    // speakers first parameter comes from resolve in app.js
    function SpeakersController(speakers) {

        var vm = this;
        vm.speakers = speakers;
    }

    // ['speakers'] refers to parameter speakers above which comes from resolve in app.js
    SpeakersController.$inject = ['speakers'];

}());