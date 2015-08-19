'use strict';

import angular from 'angular';
import controller from './controller';
import state from './state';
import masonry from 'angular-masonry';

export default angular.module('angu.news.list', [ masonry ])
  .controller('NewsListController', controller)
  .config(state)
  .name;
