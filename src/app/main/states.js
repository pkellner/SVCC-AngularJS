'use strict';

module.exports = function ($stateProvider, interpolateUrl) {
  $stateProvider.state('base', {
    templateUrl: interpolateUrl('app/{{codeCampType}}/miscpages/{{codeCampType}}.html'),
    controller: 'MainController',
    controllerAs: 'main',
    resolve: {
      faqs: getFaqs,
      sponsors: getSponsors
    }
  });
};
module.exports.$inject = ['$stateProvider', 'interpolateUrl'];

function getFaqs (Faqs) {
  return Faqs.fetchAll();
}
getFaqs.$inject = ['Faqs'];

function getSponsors (Sponsors) {
  return Sponsors.fetchAll();
}
getSponsors.$inject = ['Sponsors'];
