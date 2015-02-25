'use strict';

import angular from 'angular';
import details from './details';
import list from './list';
import social from './social-icons';

export default angular.module('angu.speakers', [
    details,
    list
  ])
  .directive('speakerSocialIcons', social)
  .name;
