'use strict';

import angular from 'angular';
import state from './state';

export default angular.module('angu.fun', [])
  .config(state)
  .name;