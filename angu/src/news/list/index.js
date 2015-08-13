'use strict';

import angular from 'angular';
import controller from './controller';
import state from './state';

export default angular.module('angu.news.list', [])
  .controller('NewsListController', controller)
  .config(state)
  .name;
