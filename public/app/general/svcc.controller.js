(function () {
    'use strict';

    angular.module('svccApp')
        .controller('SvccController', SvccController);

    function SvccController($state) {

        $state.transitionTo('svcc.home');

    }

}());
