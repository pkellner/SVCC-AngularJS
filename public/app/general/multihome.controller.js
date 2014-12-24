(function () {
    'use strict';

    angular.module('baseApp')
        .controller('MultihomeController', MultihomeController);

    function MultihomeController($state, AccountInfo, $rootScope, $timeout) {


        AccountInfo.query().$promise.then(
            function (data) {
                if (data && data.length && data.length == 1 && data[0].codeCampType) {
                    var codeCampType = data[0].codeCampType;
                    $rootScope.configData = data[0];
                    $timeout(function () {
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

    MultihomeController.$inject = ['$state', 'AccountInfo', '$rootScope', '$timeout'];

}());
