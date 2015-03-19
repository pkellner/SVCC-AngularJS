'use strict';

import angular from 'angular';
import masonry from 'angular-masonry';
import state from './state';


export default angular.module('angu.fun', [
  masonry
])
.config(state)
.name;
