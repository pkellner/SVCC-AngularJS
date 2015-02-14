'use strict';

exports = module.exports = function ($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    parent: 'base',
    controller: 'HomeController',
    templateUrl: 'app/home/home.html',
    resolve: {
      faqs: getFaqs
    }
  });
}
exports.$inject = ['$stateProvider'];

function getFaqs (Faqs) {
  return Faqs.fetchAll();
};
getFaqs.$inject = ['Faqs'];
