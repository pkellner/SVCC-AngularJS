'use strict';

import angular from 'angular';
import router from 'angular-ui-router';
import routerExceptionHandler from 'angular-router-exception-handler';
import lowercase from './case';

export default angular.module('codeCampBase.routing', [
  router,
  routerExceptionHandler
])
.config(lowercase)
.name;