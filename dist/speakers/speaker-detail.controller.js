(function () {
    'use strict';

    angular.module('svccApp')
        .controller('SpeakerDetailController', SpeakerDetailController);

    function SpeakerDetailController(speaker, $http,$pusher) {
        var vm = this;
        vm.speakers = [speaker];
        vm.speaker = speaker;

        //https://github.com/pusher/pusher-angular
        var client = new Pusher('d7beb8c73c89d031b8b1');
        var pusher = $pusher(client);

        var channelName = 'svcc-speaker-channel-' + vm.speakers[0].id;
        var myChannel = pusher.subscribe(channelName);
        pusher.connection.bind_all(function (eventName, data) {
            console.log('bind_all eventName: ' + eventName + ' data: ' + data.event);
            refreshData(speaker.id);
        });

        refreshData(speaker.id);

        function refreshData(speakerId) {
            $http.get('/rest/discussion/arrayonly',
                {
                    params: {
                        speakerId: speakerId,
                        arrayonly: 1
                    }
                })
                .success(function (data) {
                    vm.discussions = data[0].discussionItemResults;
                })
                .error(function () {

                });
        }

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

                            // THIS WILL GET REFRESHED BECAUSE OF EVENT FIRING
                        //$http.get('/rest/discussion/arrayonly',
                        //    {
                        //        params: {
                        //            speakerId: vm.speaker.id,
                        //            arrayonly: 1
                        //        }
                        //    })
                        //    .success(function (data) {
                        //        vm.discussions = data[0].discussionItemResults;
                        //    })
                        //    .error(function () {
                        //
                        //    });

                    })
                    .error(function(error){

                    });
            }

        };

    }

    SpeakerDetailController.$inject = ['speaker', '$http', '$pusher'];

}());
