'use strict';

import angular from 'angular';
import details from './details';
import list from './list';
import social from './social-icons';
import bio from './bio';

export default angular.module('angu.speakers', [
    details,
    list
  ])
  .directive('speakerSocialIcons', social)
  .directive('speakerBio', bio)
  .name;
