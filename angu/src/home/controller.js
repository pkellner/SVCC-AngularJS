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


  //this.title1 = config.home.title1 ||
  //    "Covering Angular 1.x, 2, TypeScript, ECMAScript 6, Web Components and More";

  this.title2 = config.home.title2.content ||
      "<strong>Who’s Who</strong> of Angular Presenters and Its Future";

  this.showSpeakers = config.speakers.show;
  this.fromNg = config.ng.from;



}

HomeController.$inject = ['$scope', 'faqs', 'speakers', 'config'];

module.exports = HomeController;
