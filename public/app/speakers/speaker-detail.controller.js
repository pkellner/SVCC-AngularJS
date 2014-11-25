(function () {
    'use strict';

    angular.module('svccApp')
        .controller('SpeakerDetailController', SpeakerDetailController);

    function SpeakerDetailController($routeParams, speakerResourceService) {

        var vm = this;
        vm.speakers = [];

        if ($routeParams.id) {

            speakerResourceService.get({id: $routeParams.id},
                function (data) {
                    console.log('speakerResourceService success for one entry');
                    vm.speaker = data;
                });

        }
        else {
            speakerResourceService.query(function (speaker) {
                angular.forEach(speaker, function (value) {
                    if (String(value.id) === $routeParams.id) {
                        vm.speakers.push(value);
                    }
                });
                if (vm.speakers.length > 0) {
                    vm.speaker = vm.speakers[0];
                }

            });
        }


    }

    SpeakerDetailController.$inject = ['$routeParams', 'speakerResourceService'];

}());
