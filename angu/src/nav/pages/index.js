'use strict';

import angular from 'angular';
import router from 'angular-ui-router';
import nav from './nav';
import stateNav from './state';

export default angular.module('angu.nav.pages', [
  router
])
.directive('pageNav', nav)
.directive('stateNavItem', stateNav)
.name;