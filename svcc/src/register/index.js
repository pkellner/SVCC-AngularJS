'use strict';

import angular from 'angular';
//import stripe from 'angular-stripe';
import creditcards from 'angular-credit-cards';
import state from './state';
import controller from './controller';

export default angular.module('angu.register', [creditcards])
    .controller('RegisterController', controller)
    .config(state)
    .name;


