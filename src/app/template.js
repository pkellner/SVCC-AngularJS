'use strict';

module.exports = function (CONFIG) {
  return function templateUrlInterpolator (urlTemplate) {
    return CONFIG.baseDir + urlTemplate.replace(/\{0\}/g, CONFIG.codeCampType);
  };
};
module.exports.$inject = ['CONFIG'];
