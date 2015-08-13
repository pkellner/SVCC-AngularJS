'use strict';

import angular from 'angular';
import state from './state';
import controller from './controller';

export default angular.module('angu.pluralsight', [])
  .controller('PluralsightController', controller)
  .config(state)
  .name;
