(function () {
    'use strict';

    angular.module('baseApp')
        .controller('MultihomeController', MultihomeController);

    function MultihomeController($state, accountInfoService, $rootScope, $timeout) {

        accountInfoService.save().$promise.then(
            function (data) {
                if (data && data.codeCampType) {
                    var codeCampType = data.codeCampType;
                    $rootScope.configData = data;
                    $timeout(function () {

                            debugger;
                            $rootScope.hideLoadingIcon = true;
                            if (codeCampType === 'svcc') {
                                $state.transitionTo('svcc.home');
                            } else if (codeCampType === 'conf') {
                                $state.transitionTo('conf.home');
                            } else if (codeCampType === 'angu') {
                                $state.transitionTo('angu.home');
                            }
                        }, 1000
                    );
                } else {
                    console.log('data problem in MultihomeController');
                }
            },
            function (error) {
                console.log('MultihomeController error: ' + error);
            });

    }

    MultihomeController.$inject = ['$state', 'accountInfoService', '$rootScope', '$timeout'];

}());
