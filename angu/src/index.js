'use strict';

import parseConfig from './config';
import description from './description';
import layout from './layout';
import image from './image';
import {stateNotFound, stateChangeError} from './404';

module.exports = require('angular')
    .module('angUApp', [
        require('../../base'),
        require('angular-scroll'),
        require('angular-stripe'),
        require('./nav'),
        require('./home'),
        require('./speakers'),
        require('./sessions'),
        require('./fun'),
        require('./sponsors'),
        require('./videos'),
        require('./purchase')
    ])
    .config(layout)
    .config(parseConfig)
    .config(enableHtml5Mode)
    .config(anchorScroll)
    .config(stateNotFound)
    .directive('description', description)
    .directive('ccSrc', image)
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
