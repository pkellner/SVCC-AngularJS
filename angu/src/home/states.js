'use strict';

exports = module.exports = function ($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    parent: 'base',
    resolve: {
      faqs: getFaqs
    },
    views: {
      '@layout': {
        controller: 'HomeController',
        templateUrl: 'app/home/home.html'
      }

    }
  });
};
exports.$inject = ['$stateProvider'];

function getFaqs (Faqs) {
  return Faqs.fetchAll();
}
getFaqs.$inject = ['Faqs'];
