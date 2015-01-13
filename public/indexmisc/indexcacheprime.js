var myApp = angular.module('myApp', []);

myApp.controller('personController', ['$scope', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
}]);