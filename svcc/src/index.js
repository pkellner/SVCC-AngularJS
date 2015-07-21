'use strict';

import parseConfig from './config';
import {stateNotFound, stateChangeError} from './404';

module.exports = require('angular')
    .module('angUApp', [
        require('../../base'),
        require('angular-scroll'),
        require('./home')
    ])
    .config(parseConfig)
    .config(enableHtml5Mode)
    .config(anchorScroll)
    .config(stateNotFound)
    .run(stateChangeError)
    .name;

enableHtml5Mode.$inject = ['$locationProvider'];
function enableHtml5Mode($locationProvider) {
    $locationProvider.html5Mode(true);
}

anchorScroll.$inject = ['$uiViewScrollProvider'];
function anchorScroll($uiViewScrollProvider) {
    $uiViewScrollProvider.useAnchorScroll();
}
