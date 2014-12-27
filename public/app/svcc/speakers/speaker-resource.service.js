(function () {
    'use strict';

    angular.module('svccApp')
        .factory('speakerResourceService', ['$resource',//'speakerResourceServiceMock',
            function ($resource) {

                return $resource('/rest/presenter/arrayonly/:id', {}, {
                    'get': {method: 'GET', cache: true, isArray: false},
                    'query': {method: 'GET', cache: true, isArray: true}
                });
            }]);
}());