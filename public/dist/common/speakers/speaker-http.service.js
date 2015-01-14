//(function () {
//    'use strict';
//
//        angular.module('baseApp').service('speakerhttpservice', ['$http', '$q'],
//        function speakerHttpService($http, $q) {
//            var def = $q.defer();
//            this.getData = function () {
//                debugger;
//                $http.get('/rest/presenter/arrayonly/', {cache: true})
//                    .success(function (data) {
//
//                        debugger;
//                        //var info = speakerCache.info();
//                        def.resolve(data);
//
//                    })
//                    .error(function () {
//                        debugger;
//                        def.reject("Failed Retrieving Data For Speakers");
//                    });
//                return def.promise;
//            }
//        });
//
//
//})();



//(function () {
//    'use strict';
//
//    angular.module('baseApp').service('speakerhttpservice', ['$http', '$q'],
//        function speakerHttpService($http, $q) {
//            var def = $q.defer();
//            this.getData = function () {
//                debugger;
//                $http.get('/rest/presenter/arrayonly/', {cache: true})
//                    .success(function (data) {
//
//                        debugger;
//                        //var info = speakerCache.info();
//                        def.resolve(data);
//
//                    })
//                    .error(function () {
//                        debugger;
//                        def.reject("Failed Retrieving Data For Speakers");
//                    });
//                return def.promise;
//            }
//        });
//
//
//    //angular.module('baseApp').service('speakerhttpservice', ['$http', '$q', 'speakerCache'],
//    //    function speakerHttpService($http, $q, speakerCache) {
//    //
//    //        debugger;
//    //        var def = $q.defer();
//    //
//    //        debugger;
//    //
//    //        this.getData = function () {
//    //            debugger;
//    //            $http.get('/rest/presenter/arrayonly/', {cache: true})
//    //                .success(function (data) {
//    //
//    //                    debugger;
//    //                    //var info = speakerCache.info();
//    //                    def.resolve(data);
//    //
//    //                })
//    //                .error(function () {
//    //                    debugger;
//    //                    def.reject("Failed Retrieving Data For Speakers");
//    //                });
//    //            return def.promise;
//    //
//    //        }
//    //    });
//
//})();