(function () {
    'use strict';

    angular.module('baseApp')
        .controller('MultihomeController', MultihomeController);

    function MultihomeController($state, accountInfoService, $rootScope, $timeout, CONFIG) {

        debugger;
        var codeCampType = CONFIG.codeCampType;
        $timeout(function () {
                $rootScope.hideLoadingIcon = true;
                if (codeCampType === 'svcc') {
                    $state.transitionTo('svcc.home');
                } else if (codeCampType === 'conf') {
                    $state.transitionTo('conf.home');
                } else if (codeCampType === 'angu') {
                    $state.transitionTo('angu.home');
                }
            }, 1000 // this is artificial delay
        );
    }

    MultihomeController.$inject = ['$state', 'accountInfoService', '$rootScope', '$timeout', 'CONFIG'];

}());
