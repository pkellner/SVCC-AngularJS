(function () {
    'use strict';

    angular.module('baseApp').
        factory('AccountInfo', AccountInfoResourceService);

    function AccountInfoResourceService($resource) {
        //return $resource('/rest/session/arrayonly/:id');
        return $resource('data/accountInfo.json');
    }

    AccountInfoResourceService.$inject = ['$resource'];


}());


//(function () {
//    'use strict';
//
//    angular.module('svccApp')
//        .factory('AccountInfoService', function () {
//
//            var infoValue = {};
//
//            return {
//                setInfo: function (infoDataIn) {
//                    debugger;
//                    infoValue = infoDataIn;
//                },
//                getInfo: function () {
//                    return infoValue;
//                }
//            };
//        });
//
//
//}());