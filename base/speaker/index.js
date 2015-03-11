'use strict';

import angular from 'angular';
import model from '../model';
import Speaker from './speaker';

export default require('angular').module('base.speaker', [
  model
])
.factory('Speaker', Speaker)
.name;
