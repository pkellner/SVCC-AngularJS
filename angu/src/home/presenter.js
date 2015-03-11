'use strict';

var qs = require('qs');

exports = module.exports = function () {
  return {
    restrict: 'EA',
    scope: {
      data: '=',
      imageWidth: '@',
      imageHeight: '@',
      imageBackground: '@'
    },
    bindToController: true,
    controller: PresenterController,
    controllerAs: 'presenter',
    templateUrl: 'app/home/presenter.html'
  };
};

function PresenterController ($attributes) {
  this.isKeynote = typeof $attributes.keynote !== 'undefined';
  this.name = this.data.firstName + ' ' + this.data.lastName;
  this.bio = this.data.bioShort;
  this.image = this.data.imageUrl + '?' + qs.stringify({
    format: 'jpg',
    height: this.imageHeight,
    width: this.imageWidth,
    scale: 'both',
    mode: 'pad',
    Bgcolor: this.imageBackground
  });
  this.$stateParams = this.data.$stateParams();
}
PresenterController.$inject = ['$attrs'];
