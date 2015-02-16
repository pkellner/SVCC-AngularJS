'use strict';

function HomeController ($scope, faqs, speakers, CONFIG) {
  $scope.faqs = faqs;
  $scope.speakers = speakers;

  // TODO: Create an insertion point for config parsing and cast there
  this.showSpeakers = CONFIG.showPresenters === 'True';
}
HomeController.$inject = ['$scope', 'faqs', 'speakers', 'CONFIG'];

module.exports = HomeController;
