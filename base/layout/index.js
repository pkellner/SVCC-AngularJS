'use strict';

import angular from 'angular';
import provider from './provider';
import states from './states';

export default angular.module('codeCampBase.layout', [])
  .provider('layout', provider)
  .config(states)
  .name;
