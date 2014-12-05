(function () {
    'use strict';

    angular.module('svccApp')
        .controller('SpeakerDetailController', SpeakerDetailController);

    function SpeakerDetailController(speaker, $http) {
        var vm = this;
        vm.speakers = [speaker];
        vm.speaker = speaker;


        $http.get('/rest/discussion/arrayonly',
            {
                params: {
                    speakerId: this.speaker.id,
                    arrayonly: 1
                }
            })
            .success(function (data) {
                vm.discussions = data[0].discussionItemResults;
            })
            .error(function () {

            });


        // POST the message if it exists and refresh the list with results (including one just posted)
        vm.discussionSendText = function () {

            if (this.messageText && this.messageText.length > 0) {
                $http.post('/rest/discussion/arrayonly',
                    {
                        messageText: this.messageText,
                        speakerId: this.speaker.id,
                        publicMessage: this.publicMessage,
                        arrayonly: 1
                    })
                    .success(function () {
                        $http.get('/rest/discussion/arrayonly',
                            {
                                params: {
                                    speakerId: vm.speaker.id,
                                    arrayonly: 1
                                }
                            })
                            .success(function (data) {
                                vm.discussions = data[0].discussionItemResults;
                            })
                            .error(function () {

                            });
                    });
            }

        };

    }

    SpeakerDetailController.$inject = ['speaker', '$http'];

}());
