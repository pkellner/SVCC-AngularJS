(function () {
    'use strict';

    angular.module('baseApp')
        .factory('speakerResourceService', ['$resource',//'speakerResourceServiceMock',
            function ($resource) {
                return $resource('/rest/presenter/arrayonly/:urlPostToken/:name');

                //return $resource('/rest/presenter/arrayonly/:urlPostToken/:name',{},
                //    {
                //        'get': {method: 'GET', cache: true, isArray: false},
                //        'query': {method: 'GET', cache: true, isArray: true}
                //    });
            }]);
}());