'use strict';

import angular from 'angular';
import states from './states';

export default angular.module('angu.speakers', [])
  .config(states)
  .name;
