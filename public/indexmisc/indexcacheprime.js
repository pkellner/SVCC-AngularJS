(function () {
    'use strict';

    angular.module('svccApp', []);

    angular.module('svccApp').
        factory('bareService',[
            function () {
                var myValue = {};
                myValue.str1 = 'xyz';
                return myValue;
            }]);

    angular.module('svccApp').controller('MyController',MyController);

    // WHY IS THIS NOT NECESSARY?
    //MyController.$inject = ['bareService'];

    function MyController($scope,bareService){
        $scope.testVal = bareService.str1;
    }

}());