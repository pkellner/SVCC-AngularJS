'use strict';

import template from './home.html';

exports = module.exports = function ($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    parent: 'base',
    resolve: {
      faqs: getFaqs,
      speakers: getSpeakers,
      codecampyear: getCodeCampYear
    },
    views: {
      '@layout': {
        controller: 'HomeController',
        controllerAs: 'home',
        template
      }

    }
  });
};
exports.$inject = ['$stateProvider'];

function getFaqs (Faqs) {
  return Faqs.fetchAll();
}
getFaqs.$inject = ['Faqs'];

function getCodeCampYear (CodeCampYear) {
  return CodeCampYear.fetchAll();
}
getCodeCampYear.$inject = ['CodeCampYear'];

function getSpeakers (Speaker) {
  return Speaker.fetchAll();
}
getSpeakers.$inject = ['Speaker'];
