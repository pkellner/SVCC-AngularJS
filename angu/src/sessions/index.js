'use strict';

import angular from 'angular';
import list from './list';
import details from './details';
import link from './link';

export default angular.module('angu.sessions', [
    list,
    details
  ])
  .directive('sessionLink', link)
  .name;
