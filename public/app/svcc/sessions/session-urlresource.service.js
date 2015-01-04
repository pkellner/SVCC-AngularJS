(function () {
    'use strict';

    angular.module('svccApp')
        .factory('sessionUrlResourceService', ['$resource',//'speakerResourceServiceMock',
            function ($resource) {

                return $resource('/rest/session/urls', {}, {
                    'query': {method: 'GET', cache: true, isArray: true}
                });
            }]);
}());