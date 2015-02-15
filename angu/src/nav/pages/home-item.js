'use strict';

exports = module.exports = function ($compile) {
  return {
    restrict: 'E',
    templateUrl: 'app/nav/pages/home-item.html',
    transclude: true,
    scope: {
      target: '@'
    },
    compile: function (element, attributes) {
      var item = element.find('li');
      item.attr('du-scrollspy', attributes.target);
      item.find('a').attr('du-smooth-scroll', attributes.target);
    }
  }
};
exports.$inject = ['$compile'];
