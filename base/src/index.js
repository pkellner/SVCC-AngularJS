'use strict';

import angular from 'angular';
import sanitize from 'angular-sanitize';
import messages from 'angular-messages';
import router from 'angular-ui-router';
import routerExceptionHandler from 'angular-router-exception-handler';
import multiTenant from './multi';
import main from './main';
import staticPages from './static';
import faqs from './faqs';
import speakers from './speakers';
import sponsors from './sponsors';
import Model from './model';

export default angular.module('codeCampBase', [
    // 3rd party modules
    sanitize,
    messages,
    router,
    routerExceptionHandler,
    // our modules
    multiTenant,
    main,
    staticPages,
    faqs,
    speakers,
    sponsors    
  ])
  .factory('Model', Model)
  .name;
