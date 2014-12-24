(function () {
    'use strict';

    angular.module('baseApp')
        .factory('speakerResourceService',['$resource',
        function ($resource) {
            return $resource('/rest/presenter/arrayonly/:id');
            //return $resource('data/speakers.json');
        }]);
}());