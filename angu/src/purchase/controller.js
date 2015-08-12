
//'use strict';

function PurchaseController(stripe,config,$scope) {

    $scope.master = {};

    $scope.update = function(user) {
        $scope.master = angular.copy(user);
        debugger;
    };

    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };

    $scope.reset();

}
PurchaseController.$inject = ['stripe','config','$scope'];

export default PurchaseController;