'use strict';

exports.interpolateUrl = function ($interpolate, CONFIG) {
  return function urlInterpolator (urlTemplate) {
    return CONFIG.baseDir + $interpolate(urlTemplate)(CONFIG);
  };
};
module.exports.$inject = ['$interpolate', 'CONFIG'];
