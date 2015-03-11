'use strict';

module.exports = function () {
  this.provide = function (urlTemplate) {
    return createTemplateProvider(urlTemplate);
  };
  this.$get = function () {};
};

function createTemplateProvider (template) {
  function templateProvider ($interpolate, CONFIG, $templateFactory) {
    return $templateFactory.fromUrl(CONFIG.baseDir + $interpolate(template)(CONFIG));
  }
  templateProvider.$inject = ['$interpolate', 'CONFIG', '$templateFactory'];
  return templateProvider;
}
