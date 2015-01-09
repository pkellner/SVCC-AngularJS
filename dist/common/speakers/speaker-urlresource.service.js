(function () {
    'use strict';

    angular.module('baseApp')
        .factory('speakerUrlResourceService', ['$resource',//'speakerResourceServiceMock',
            function ($resource) {

                return $resource('/rest/presenterurls', {}, {
                    'query': {method: 'GET', cache: true, isArray: true}
                });
            }]);
}());