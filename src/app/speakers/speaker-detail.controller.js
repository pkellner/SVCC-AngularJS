(function () {
    'use strict';

    angular.module('baseApp')
        .controller('SpeakerDetailController', SpeakerDetailController);

    function SpeakerDetailController(speaker) {
        var vm = this;
        vm.speakers = [speaker.data];
        vm.speaker = speaker.data;
    }

    SpeakerDetailController.$inject = ['speaker'];

}());
