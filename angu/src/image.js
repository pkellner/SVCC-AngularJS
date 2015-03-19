'use strict';

import join from 'url-join';

export default image;

image.$inject = ['config'];
function image (config) {
  return {
    restrict: 'A',
    link: function (scope, element, attributes) {
      attributes.$observe('ccSrc', function (src) {
        attributes.$set('src', join(config.assets.base, src));
      });
    }
  };
}
