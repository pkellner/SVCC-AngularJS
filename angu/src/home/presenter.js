'use strict';

exports = module.exports = function (CONFIG) {

  function PresenterController () {}

  PresenterController.prototype.imageUrl = function () {
    return CONFIG.baseDirImage + this.photo;
  };

  return {
    restrict: 'EA',
    transclude: true,
    scope: {
      photo: '@',
      name: '@'
    },
    controller: PresenterController,
    controllerAs: 'presenter',
    bindToController: true,
    templateUrl: 'app/home/presenter.html'
  };
};
exports.$inject = ['CONFIG'];
