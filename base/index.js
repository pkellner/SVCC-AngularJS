'use strict';

import angular from 'angular';
import sanitize from 'angular-sanitize';
import messages from 'angular-messages';
import routing from './routing';
import model from './model';
import layout from './layout';
import faqs from './faqs';
import speaker from './speaker';
import sessions from './sessions'
import sponsors from './sponsors';
import videos from './videos';
import codecampyear from './codecampyear';

export default angular.module('codeCampBase', [
    sanitize,
    messages,
    routing,
    model,
    layout,
    faqs,
    speaker,
    sessions,
    sponsors,
    videos,
    codecampyear
])
    .name;
