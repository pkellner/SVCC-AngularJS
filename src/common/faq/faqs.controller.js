(function () {

    'use strict';
    angular
        .module('baseApp')
        .controller('FaqsController', FaqsController);

    // speakers first parameter comes from resolve in app.js
    function FaqsController(faqs) {
        var vm = this;
        vm.faqs = faqs.data;
    }

    FaqsController.$inject = ['faqs'];

}());