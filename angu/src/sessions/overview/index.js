'use strict';

import angular from 'angular';
import item from './item';
import controller from './controller';
import state from './state';

export default angular.module('angu.sessions.overview', [])
  .directive('sessionOverviewtem', item)
  .controller('SessionOverviewController', controller)
  .config(state)
  .name;
