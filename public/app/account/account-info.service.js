(function () {
    'use strict';

    angular.module('svccApp')
        .factory('AccountInfoService', function () {
            var infoValue = {};

            return {
                setInfo: function (infoDataIn) {
                    debugger;
                    infoValue = infoDataIn;
                },
                getInfo: function () {
                    return infoValue;
                }
            };
        });


}());