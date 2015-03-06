'use strict';

import angular from 'angular';
import list from './list';
import details from './details';

export default angular.module('angu.sessions', [
    list,
    details
  ])
  .name;
