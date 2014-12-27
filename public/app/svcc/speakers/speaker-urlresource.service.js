(function () {
    'use strict';

    angular.module('svccApp')
        .factory('speakerUrlResourceService', ['$resource',//'speakerResourceServiceMock',
            function ($resource) {

                return $resource('/rest/presenterurls', {}, {
                    'query': {method: 'GET', cache: true, isArray: true}
                });
            }]);
}());