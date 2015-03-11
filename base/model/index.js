'use strict';

import angular from 'angular';
import Model from './rest';

export default angular.module('codeCampModel', [])
  .factory('Model', Model)
  .name;
