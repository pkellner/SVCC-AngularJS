(function () {
    'use strict';

    angular.module('svccApp').
        factory('sessionDayOfWeekResourceService', sessionDayOfWeekResourceService);

    function sessionDayOfWeekResourceService($resource) {
        //return $resource('/rest/session/arrayonly/:id');
        return $resource('data/sessionDayOfWeek.json');
    }

    sessionDayOfWeekResourceService.$inject = ['$resource'];


}());