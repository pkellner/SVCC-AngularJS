(function () {
    'use strict';

    angular.module('svccApp')
        .controller('SpeakerDetailController', SpeakerDetailController);

    function SpeakerDetailController(speaker, $http) {
        var vm = this;
        vm.speakers = [speaker];
        vm.speaker = speaker;

        vm.discussionSendText = function () {
            //this.messageText;
            function successCallback(a,b,c) {
                debugger;
            }

            function errorCallback(a,b,c) {
                debugger;
            }

            $http.post('/rest/discussion/arrayonly',
                {
                    messageText: this.messageText,
                    speakerId: this.speaker.id,
                    arrayonly: 1
                })
                .success(successCallback)
                .error(errorCallback);


        };
    }


    SpeakerDetailController.$inject = ['speaker', '$http'];

}());
