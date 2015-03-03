'use strict';

module.exports = require('angular')
  .module('angUApp', [
    require('../../base'),
    require('angular-scroll'),
    require('./nav'),
    require('./home'),
    require('./speakers'),
    require('./sessions')
  ])
  .config(enableHtml5Mode)
  .config(anchorScroll)
  .config(prependTemplateUrls)
  .name;

enableHtml5Mode.$inject = ['$locationProvider'];
function enableHtml5Mode ($locationProvider) {
  $locationProvider.html5Mode(true);
}

anchorScroll.$inject = ['$uiViewScrollProvider'];
function anchorScroll ($uiViewScrollProvider) {
  $uiViewScrollProvider.useAnchorScroll();
}

prependTemplateUrls.$inject = ['CONFIG', '$provide'];
function prependTemplateUrls (CONFIG, $provide) {
  $provide.decorator('$templateFactory', decorateTemplateFactory);
  decorateTemplateFactory.$inject = ['$delegate'];
  function decorateTemplateFactory ($templateFactory) {
    var fromUrl = $templateFactory.fromUrl;
    $templateFactory.fromUrl = function (url, params) {
      url = CONFIG.baseDir + url;
      return fromUrl(url, params);
    };
    return $templateFactory;
  }
  $provide.decorator('$templateRequest', decorateTemplateRequest);
  decorateTemplateRequest.$inject = ['$delegate'];
  function decorateTemplateRequest ($templateRequest) {
    return function (url, ignoreErr) {
      return $templateRequest(CONFIG.baseDir + url, ignoreErr);
    };
  }
}
