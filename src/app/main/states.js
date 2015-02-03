'use strict';

module.exports = function ($stateProvider, interpolateTemplateUrl) {
  $stateProvider.state('base', {
    templateUrl: interpolateTemplateUrl('app/{0}/miscpages/{0}.html'),
    controller: 'MainController',
    controllerAs: 'main',
    resolve: {
      faqs: getFaqs,
      sponsors: getSponsors
    }
  });
};
module.exports.$inject = ['$stateProvider', 'interpolateTemplateUrl'];

function getFaqs (Faqs) {
  return Faqs.fetchAll();
}
getFaqs.$inject = ['Faqs'];

function getSponsors (Sponsors) {
  return Sponsors.fetchAll();
}
getSponsors.$inject = ['Sponsors'];
