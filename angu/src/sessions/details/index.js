'use strict';

import angular from 'angular';
import controller from './controller';
import state from './state';

export default angular.module('angu.sessions.details', [])
  .controller('SessionDetailsController', controller)
  .config(state)
  .name;
