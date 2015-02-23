'use strict';

import angular from 'angular';
import controller from './controller';
import state from './state';

export default angular.module('angu.speakers.details', [])
  .controller('SpeakerDetailsController', controller)
  .config(state)
  .name;
