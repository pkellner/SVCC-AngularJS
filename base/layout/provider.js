'use strict';

export default layoutProvider;

function layoutProvider () {
  const layouts = {
    header: '',
    footer: ''
  };
  this.set = function setLayout (layout, template) {
    layouts[layout] = template;
    return this;
  };
  this.get = function getLayout (layout) {
    return layouts[layout];
  };

  this.$get = angular.noop;
}
