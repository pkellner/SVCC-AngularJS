(function () {
    'use strict';

    angular.module('svccApp')
        .controller('SpeakerDetailFeedbackController', SpeakerDetailFeedbackController);

    function SpeakerDetailFeedbackController($scope,$rootScope,speaker, $http,$pusher) {


        var vm = this;
        vm.speakers = [speaker];
        vm.speaker = speaker;
        vm.loginName = $rootScope.loginName;




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
            if (data && data.event && data.event.indexOf("Discussion") !== -1) {
                console.log('bind_all event processing event: ' + data.event);
                refreshData(speaker.id);
            }
        });

        refreshData(speaker.id);

        function refreshData(speakerId) {
            console.log('refreshData with ' + speakerId);
            $http.get('/rest/discussion/arrayonly',
                {
                    params: {
                        speakerId: speakerId,
                        arrayonly: 1
                    }
                })
                .success(function (data) {

                    if (data && data.length > 0 && data[0].discussionItemResults && data[0].discussionItemResults.length > 0) {
                        vm.discussions = data[0].discussionItemResults;

                    } else {
                        vm.discussions = [];
                    }
                    console.log('vm.discussions.length: ' + vm.discussions.length);
                })
                .error(function (error) {
                    console.log('rest/discussion/arrayonly error ' + error);
                });
        }

        // POST the message if it exists and refresh the list with results (including one just posted)
        vm.discussionSendText = function () {

            if (!this.loginName || this.loginName.length === 0) {
                alert('Must be logged in to post public discussion items.');
            }

            else if (this.messageText && this.messageText.length > 0) {
                vm.disableSendButton = "true";
                $http.post('/rest/discussion/arrayonly',
                    {
                        messageText: this.messageText,
                        speakerId: this.speaker.id,
                        publicMessage: this.publicMessage,
                        arrayonly: 1
                    })
                    .success(function () {
                        console.log('discussionSendText success post');
                        vm.disableSendButton = false;
                        vm.messageText = '';
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
                       console.log('discussionSendText failed ' + error);
                    });
            }

        };

    }

    SpeakerDetailFeedbackController.$inject = ['$scope','$rootScope','speaker', '$http', '$pusher'];

}());
