'use strict';

function HomeController ($scope, faqs, speakers, config) {
  $scope.faqs = faqs;
  
  $scope.speakers = {
    keynotes: speakers.filter(function (speaker) {
      return speaker.isKeyNoteSpeaker;
    }),
    regular: speakers.filter(function (speaker) {
      return !speaker.isKeyNoteSpeaker;
    })
  };

  this.homePageTitle = config.analytics.homePageTitle;
  this.homePageTitleGuid = config.analytics.homePageTitleGuid;

  this.showSpeakers = config.speakers.show;
}
HomeController.$inject = ['$scope', 'faqs', 'speakers', 'config'];

module.exports = HomeController;
