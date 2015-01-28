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

function getFaqs () {
  return faqs.fetch();
}
getFaqs.$inject = ['faqs'];

function getSponsors () {
  return sponsors.fetch();
}
getSponsors.$inject = ['sponsors'];
