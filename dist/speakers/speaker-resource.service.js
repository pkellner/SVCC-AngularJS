(function () {
    'use strict';

    angular.module('svccApp')
        .factory('speakerResourceService',['$resource',
        function ($resource) {
            //return $resource("/rest/presenter?arrayOnly=true");
            return $resource('data/speakers.json');
        }]);

}());