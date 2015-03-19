'use strict';

export default image;

image.$inject = ['config'];
function image (config) {
  const base = config.assets.cdn || config.assets.base;
  return {
    restrict: 'A',
    link: function (scope, element, attributes) {
      attributes.$observe('ccSrc', function (src) {
        attributes.$set('src', `${base}/${src}`);
      });
    }
  };
}
