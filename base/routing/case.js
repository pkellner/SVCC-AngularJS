'use strict';

export default lowercaseStateUrls;

lowercaseStateUrls.$inject = ['$urlRouterProvider'];
function lowercaseStateUrls ($urlRouterProvider) {
  $urlRouterProvider.rule(function ($injector, $location) {
    const path = $location.path();
    const lower = path.toLowerCase();
    if (path !== lower) {
      $location.replace().path(lower);
    }
  });
}