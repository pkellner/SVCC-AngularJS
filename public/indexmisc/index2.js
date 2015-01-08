/**
 * Created by peterkellner99 on 11/14/14.
 */
(function () {
    'use strict';

    angular.module('myApp', []);

    angular.module('myApp').controller('MyController',MyController);

    // WHY IS THIS NOT NECESSARY?
    //MyController.$inject = ['$scope'];

    function MyController($scope){
        $scope.testVal = 'abcd';
    }

}());