(function (angular) {

  'use strict';

  angular.module('baseApp')
    .run(['$rootScope', '$location', function($rootScope, $location){
      $rootScope.$on('duScrollspy:becameActive', function($event, $element){
        //Automaticly update location
        var hash = $element.find('a').prop('hash');
        if (hash) {
          $rootScope.$apply(function () {
            $location.path(hash.substr(1));
          });
        }
      });
    }]);

})(angular);
