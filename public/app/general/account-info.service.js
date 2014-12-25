(function () {
    'use strict';

    angular.module('baseApp')
        .factory('accountInfoService', ['$resource',//'accountInfoServiceMock',
            function ($resource) {
                
                return $resource('/rpc/Account/IsLoggedIn');
                //return $resource('app/data/accountInfo.json');
            }]);
}());
