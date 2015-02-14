'use strict';

function HomeController ($scope, faqs) {
  $scope.faqs = faqs;
}
HomeController.$inject = ['$scope', 'faqs'];

module.exports = HomeController;
