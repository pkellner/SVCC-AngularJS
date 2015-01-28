module.exports = function ($stateProvider) {
  $stateProvider.state('base', {
    templateProvider: ['getTemplate', function (getTemplate) {
      return getTemplate('app/{0}/miscpages/{0}.html');
    }],
    controller: 'HomeController as vm',
    resolve: {
      faqs: getFaqs,
      sponsors: ['$http', 'sponsorDataModelService', function ($http, sponsorDataModelService) {
        return $http.get('/rest/sponsor/arrayonly/', {
          cache: true
        })
        .success(function (data, status, headers, config) {
                      // only reload this service if it is empty. It can be full from previous production call or from
                      // testing environment load.
                      if (!sponsorDataModelService.hasData()) {
                        sponsorDataModelService.setData(data);
                      }
                      return data;
                    })
        .error(function (data, status, headers, config) {
          return [];
        });
      }]

    }
  });
};
module.exports.$inject = ['$stateProvider'];

function getFaqs (faqs) {
  return faqs.fetch();
}
getFaqs.$inject = ['faqs'];

function getSponsors (faqs) {
  return faqs.fetch();
}
getFaqs.$inject = ['faqs'];
