(function () {

    'use strict';
    angular
        .module('baseApp')
        .controller('SponsorsController', SponsorsController);

    // speakers first parameter comes from resolve in app.js
    function SponsorsController(sponsors) {
        var vm = this;
        vm.sponsors = sponsors.data;
    }

    SponsorsController.$inject = ['sponsors'];

}());