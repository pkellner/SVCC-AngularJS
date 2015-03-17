'use strict';

import angular from 'angular';
import sanitize from 'angular-sanitize';
import messages from 'angular-messages';
import routing from './routing';
import multiTenant from './multi';
import model from './model';
import main from './main';
import staticPages from './static';
import faqs from './faqs';
import speaker from './speaker';
import sessions from './sessions'
import sponsors from './sponsors';

export default angular.module('codeCampBase', [
    // 3rd party modules
    sanitize,
    messages,
    routing,
    // our modules
    multiTenant,
    model,
    main,
    staticPages,
    faqs,
    speaker,
    sessions,
    sponsors    
  ])
  .name;
