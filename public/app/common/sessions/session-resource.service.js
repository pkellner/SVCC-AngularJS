(function () {
    'use strict';

    angular.module('baseApp').
        factory('sessionResourceService', sessionResourceService);

    function sessionResourceService($resource) {
        //return $resource('/rest/session/arrayonly/:id');
        //return $resource('data/sessions.json');
        return $resource('/rest/session/arrayonly/:urlPostToken/:name',
            {},
            {
                'get': {method: 'GET', cache: true, isArray: false},
                'query': {method: 'GET', cache: true, isArray: true}
            });
    }

    sessionResourceService.$inject = ['$resource'];


}());