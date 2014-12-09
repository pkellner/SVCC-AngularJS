(function () {
    'use strict';

    angular.module('svccApp')
        .controller('SpeakerDetailFeedbackController', SpeakerDetailFeedbackController);

    function SpeakerDetailFeedbackController($scope,speaker, $http,$pusher,$timeout) {


        var vm = this;
        vm.speakers = [speaker];
        vm.speaker = speaker;

        //var onTimeout = function() {
        //    timer = $timeout(onTimeout, 3000);
        //    console.log('onTimeout fired and reset');
        //};
        //var timer = $timeout(onTimeout, 3000);

        $scope.$on("$destroy", function() {


            var channelName = 'svcc-speaker-channel-' + vm.speakers[0].id;
            console.log('unsubscribing from: ' + channelName );
            var myChannel = pusher.unsubscribe(channelName);

            //if (timer) {
            //    $timeout.cancel(timer);
            //}
        });



        //https://github.com/pusher/pusher-angular
        var client = new Pusher('d7beb8c73c89d031b8b1');
        var pusher = $pusher(client);

        var channelName = 'svcc-speaker-channel-' + vm.speakers[0].id;
        var myChannel = pusher.subscribe(channelName);
        pusher.connection.bind_all(function (eventName, data) {
            console.log('bind_all channelName: ' + channelName + ' eventName: ' + eventName + ' data: ' + data.event);
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

    SpeakerDetailFeedbackController.$inject = ['$scope','speaker', '$http', '$pusher'];

}());
