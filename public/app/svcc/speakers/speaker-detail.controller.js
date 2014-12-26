(function () {
    'use strict';

    angular.module('svccApp')
        .controller('SpeakerDetailController', SpeakerDetailController);

    function SpeakerDetailController(speaker) {


        console.log('speakers-detail.controller  speaker.id: ' + speaker.id);

        var vm = this;
        vm.speakers = [speaker];
        vm.speaker = speaker;
    }

    SpeakerDetailController.$inject = ['speaker'];

}());
