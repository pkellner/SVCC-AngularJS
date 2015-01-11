(function () {
    'use strict';

    angular.module('baseApp')
        .controller('HomeController', HomeController);

    function HomeController(speakerUrlResourceService, speakerDataModelUrlService,CONFIG) {
        speakerDataModelUrlService.setData(speakerUrlResourceService);
        var vm = this;
        vm.config = CONFIG;
    }

    HomeController.$inject = ['speakerUrlResourceService', 'speakerDataModelUrlService','CONFIG'];

}());
