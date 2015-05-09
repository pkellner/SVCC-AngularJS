'use strict';

function HomeController ($scope, faqs, speakers, config,$sce) {
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

  this.homePageVideoCurrent = 0;
  this.ChangeHomePageVideo = function(vimeoId) {
      var i;
      for (i=0;i<this.homePageVideos.length;i++){
        if (this.homePageVideos[i].vimeoId == vimeoId){
          this.homePageVideoCurrent = i;
          this.homePageVideos[i].current = true;
        }
        else {
          this.homePageVideos[i].current = false;
        }
      }
  };

  this.homePageVideos = [
    {
      title: 'Misko Hevery Talks About Databinding in Angular 2',
      vimeoId: '126991619',
      videoThumb: 'https://angularu.com/Images/91-63-misko.png',
      current: true,
      iframeSrc: $sce.trustAsResourceUrl("https://player.vimeo.com/video/126991619"),
      tweetItUrl: "<a href='http://twitter.com/home?status=Check+Out+&quot;Misko+Hevery+Talks+About+Databinding+in+Angular+2&quot;+at+@AngularU+https://AngularU.com/Video/2015sf/misko-hevery-talks-about-databinding-in-angular-2+@mhevery' target='_blank' class='icon-twitter'></a>",
      tweetItUrlWords: "<a href='http://twitter.com/home?status=Check+Out+&quot;Misko+Hevery+Talks+About+Databinding+in+Angular+2&quot;+at+@AngularU+https://AngularU.com/Video/2015sf/misko-hevery-talks-about-databinding-in-angular-2+@mhevery' target='_blank' >Share&nbsp;This&nbsp;</a>"
    },
    {
      title: 'Brad Green, Who Runs the Google Angular Team, Talks about His Upcoming Angular U Keynote',
      vimeoId: '517622107',
      videoThumb: 'https://angularu.com/Images/91-63-brad.png',
      current: false,
      iframeSrc: $sce.trustAsResourceUrl("https://player.vimeo.com/video/126281527")
    },
    {
      title: 'Dan Wahlin Giving Us an Idea of What to Expect at Angular U',
      vimeoId: '126281528',
      videoThumb: 'https://angularu.com/Images/91-63-dan.png',
      current: false,
      iframeSrc: $sce.trustAsResourceUrl("https://player.vimeo.com/video/126281528")
    },
    {
      title: 'Scott Moss Talks About His ECMAScript6 Workshops',
      vimeoId: '126972966',
      videoThumb: 'https://angularu.com/Images/91-63-scott.png',
      current: false,
      iframeSrc: $sce.trustAsResourceUrl("https://player.vimeo.com/video/126972966")
    }
  ];







}

HomeController.$inject = ['$scope', 'faqs', 'speakers', 'config','$sce'];

module.exports = HomeController;
