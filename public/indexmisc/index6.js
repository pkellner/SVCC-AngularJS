(function () {
    'use strict';


    var app = angular.module('svccApp', [
        'ui.router', 'ui.router.stateHelper',
    ]);


    app.config(function (stateHelperProvider) {
        stateHelperProvider.state({
            name: 'root',
            template: '<p>loading...</p>',
            controller: function($state){ $state.go("svcc"); },
            children: [
                {
                    name: 'svcc',
                    template: '<p>svcc</p>',
                    resolve: {
                        title: function($timeout){
                            return $timeout(function(){
                                    return 'from title function';
                                }
                                , 2500 // wait 2,5 second - and then replace ...loading...
                            );
                        }
                    }
                },
                {
                    name: 'codestars',
                    template: '<p>codestars</p>'
                }
            ]
        });
    });


    //var injectParamsAbout = ['title'];
    //var AboutController = function (title) {
    //    var vm = this;
    //    vm.title = title;
    //};
    //AboutController.$inject = injectParamsAbout;
    //angular.module('svccApp').controller('AboutController', AboutController);

    //var injectParamsHome = [];
    //var BaseController = function () {
    //};
    //BaseController.$inject = injectParamsHome;
    //angular.module('svccApp').controller('BaseController', BaseController);


}());



