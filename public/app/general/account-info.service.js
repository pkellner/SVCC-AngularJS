(function () {
    'use strict';

    angular.module('baseApp')
        .factory('accountInfoService', ['$resource',//'accountInfoServiceMock',
            function ($resource) {

                return $resource('/rpc/Account/IsLoggedIn', {}, {
                        'save': {method: 'POST', isArray: false}
                    }
                );
                //return $resource('app/data/accountInfo.json');
            }]);
}());
