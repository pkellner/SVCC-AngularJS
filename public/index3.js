/**
 * Created by peterkellner99 on 11/14/14.
 */
(function () {
    'use strict';

    angular.module('svccApp', []);

    angular.module('svccApp').controller('MyController', MyController);

    // WHY IS THIS NOT NECESSARY?
    //MyController.$inject = ['$scope'];

    function MyController($scope) {
        $scope.testVal = 'abcd EFGH 1';
    }


    angular.module('svccApp')
        .filter('slug', function () {
            return function (input) {
                if (input) {
                    return input.toLowerCase().replace(/[^a-z_]/g, '_');
                }
            };
        });


}());