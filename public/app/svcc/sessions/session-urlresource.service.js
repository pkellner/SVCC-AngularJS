(function () {
    'use strict';

    angular.module('svccApp')
        .factory('sessionUrlResourceService', ['$resource',//'speakerResourceServiceMock',
            function ($resource) {

                return $resource('/rest/sessionurls', {}, {
                    'query': {method: 'GET', cache: true, isArray: true}
                });
            }]);
}());