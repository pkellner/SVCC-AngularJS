'use strict';

import angular from 'angular';
import controller from './controller';
import state from './state';

export default angular.module('angu.sessions.list', [])
  .controller('SessionListController', controller)
  .config(state)
  .name;
