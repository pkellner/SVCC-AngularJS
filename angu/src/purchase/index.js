'use strict';

import angular from 'angular';
import state from './state';
import controller from './controller';


export default angular.module('angu.purchase', [])
    .controller('PurchaseController', controller)
    .config(state)
    .name;
