(function () {
    'use strict';

    angular.module('svccApp').
        factory('sessionResourceService', sessionResourceService);

    function sessionResourceService($resource) {
        //return $resource("/rest/session?arrayOnly=true");
        return $resource('data/sessions.json');
    }

    sessionResourceService.$inject = ['$resource'];


}());