(function () {
    'use strict';

    angular.module('baseApp')
        .controller('HomeController', HomeController);

    function HomeController(CONFIG) {

        //debugger;
        //speakerDataModelUrlService.setData(speakerUrlResourceService);
        var vm = this;
        vm.config = CONFIG;
    }

    HomeController.$inject = ['CONFIG'];

}());
