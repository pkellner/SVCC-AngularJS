(function () {
    'use strict';

    angular.module('svccApp')
        .factory('speakerResourceService',['$resource',//'speakerResourceServiceMock',
        function ($resource) {
            return $resource('/rest/presenter/arrayonly/:id');
            //return $resource('data/speakers.json');
        }]);
}());