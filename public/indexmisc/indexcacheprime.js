        var myApp = angular.module('myApp', []);

        myApp.factory('speakersCache', function($cacheFactory) {
            return $cacheFactory('speakersCacheData');
        });


        myApp.controller('personController', ['$scope','$http','speakersCache', function ($scope,$http,speakersCache) {

            $scope.getAllSpeakers = function() {

                $http.get('speakers.json',{cache: speakersCache}).
                    success(function (data, status, headers, config) {

                        debugger;
                        var i;
                        for(i=0;i<data.length;i++) {
                            var url = 'speaker/' + i;
                            speakersCache.put(url, data[i]);
                        }
                    }).
                    error(function (data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
            };

            $scope.getAllSessions = function() {

                $http.get('sessions.json',{cache: speakersCache}).
                    success(function (data, status, headers, config) {
                        debugger;

                    }).
                    error(function (data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
            };

            $scope.getOneSpeaker = function() {
                $http.get('speaker/1',{cache: speakersCache}).
                    success(function (data, status, headers, config) {
                        debugger;

                    }).
                    error(function (data, status, headers, config) {
                      debugger;
                    });
            }

            $scope.checkit = function() {

                var x = speakersCache;
                debugger;

            };




        }]);