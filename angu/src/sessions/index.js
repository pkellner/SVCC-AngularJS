'use strict';

import angular from 'angular';
import list from './list';

import details from './details';
import link from './link';

import overview from './overview';


export default angular.module('angu.sessions', [
    list,
    details,
    overview
  ])
  .directive('sessionLink', link)
  .name;
