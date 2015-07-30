'use strict';

import angular from 'angular';
import stripe from 'angular-stripe';
import state from './state';
import controller from './controller';


export default angular.module('angu.purchase', [stripe])
    .controller('PurchaseController', controller)
    .config(state)
    .name;
