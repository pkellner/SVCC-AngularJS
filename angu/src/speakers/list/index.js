'use strict';

import angular from 'angular';
import controller from './controller';
import state from './state';

export default angular.module('angu.speakers.list', [])
  .controller('SpeakerListController', controller)
  .config(state)
  .name;
