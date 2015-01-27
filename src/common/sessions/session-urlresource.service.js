(function () {
    'use strict';

    angular.module('baseApp')
        .factory('sessionUrlResourceService', ['$resource',//'speakerResourceServiceMock',
            function ($resource) {

                return $resource('/rest/sessionurls', {}, {
                    'query': {method: 'GET', cache: true, isArray: true}
                });
            }]);
}());