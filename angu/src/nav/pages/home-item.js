'use strict';

import template from './home-item.html';

exports = module.exports = function ($compile) {
  return {
    restrict: 'E',
    template,
    transclude: true,
    scope: {
      target: '@'
    },
    compile: function (element, attributes) {
      var item = element.find('li');
      item.attr('du-scrollspy', attributes.target);
      item.attr('offset', 50);
      item.find('a').attr('du-smooth-scroll', attributes.target);
    }
  }
};
exports.$inject = ['$compile'];
