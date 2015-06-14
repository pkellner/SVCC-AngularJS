'use strict';

import angular from 'angular';
import state from './state';
import controller from './controller';

export default angular.module('angu.videos', [])
    .controller('VideosController', controller)
    .config(state)
    .name;
