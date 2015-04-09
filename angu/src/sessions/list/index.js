'use strict';

import angular from 'angular';
import item from './item';
import controller from './controller';
import state from './state';

export default angular.module('angu.sessions.list', [])
  .directive('sessionListItem', item)
  .controller('SessionListController', controller)
  .config(state)
  .name;
