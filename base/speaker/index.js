'use strict';

import angular from 'angular';
import model from '../model';
import Speaker from './speaker';
import Url from './url';

export default require('angular').module('base.speaker', [
  model
])
.factory('Speaker', Speaker)
.factory('SpeakerUrl', Url)
.name;
