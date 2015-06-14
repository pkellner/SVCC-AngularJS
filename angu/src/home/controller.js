'use strict';



function HomeController ($scope, faqs, speakers, config,$sce,codecampyear) {
    $scope.faqs = faqs;

    if (codecampyear && codecampyear.length === 1) {
        this.codecampyear = codecampyear[0];
        this.codecampyear.liveFeedSessionSpeakersCsv = this.codecampyear.liveFeedSessionSpeakersCsv.replace(/,/g, ', ');
    } else {
        this.codecampyear = [{
            liveFeedTitle: 'code camp year problem'
        }];
    }

    debugger;

    $scope.speakers = {
        keynotes: speakers.filter(function (speaker) {
            return speaker.isKeyNoteSpeaker;
        }),
        regular: speakers.filter(function (speaker) {
            return !speaker.isKeyNoteSpeaker;
        })
    };

    this.title2 = config.home.title2.content ||
        "<strong>Who’s Who</strong> of Angular Presenters and Its Future";

    this.showSpeakers = config.speakers.show;
    this.showLiveFeed = config.home.showLiveFeed;
    this.fromNg = config.ng.from;


    //https://www.youtube.com/embed/uV2uebhnqOw
    this.iFrameSrcLiveStream =
        $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + config.home.liveFeedEmbedCode);





    this.homePageVideos = [
        {
            title: 'Brad Green Talks Directives, Controllers become Components in Angular 2',
            vimeoId: '128435293',
            tweet: 'Check Out "Brad Green, Igor Minar and Misko Havery Talk Angular 2" at @AngularU https://angularu.com/ng/session/2015sf/angular-2-roadmap-update @bradlygreen'
        },
        {
            title: 'Misko Hevery Talks About Databinding in Angular 2',
            vimeoId: '126991619',
            tweet: 'Check Out "Misko Hevery Talks About Databinding in Angular 2" at @AngularU https://AngularU.com/Video/2015sf/misko-hevery-talks-about-databinding-in-angular-2 @mhevery'
        },
        {
            title: 'Brad Green Talks about His Upcoming Angular U Keynote',
            vimeoId: '126281527',
            tweet: 'Check Out "Brad Green Talks About Angular U" at @AngularU https://AngularU.com/Video/2015sf/brad-green-talks-about-angular-u @bradlygreen'
        },
        {
            title: 'Dan Wahlin Giving Us an Idea of What to Expect at Angular U',
            vimeoId: '126281528',
            tweet: 'Check Out "Dan Wahlin Giving Us an Idea of What to Expect at Angular U" at @AngularU https://AngularU.com/Video/2015sf/dan-wahlin-giving-us-an-idea-of-what-to-expect-at-angular-u @danwahlin'
        }

    ];

    this.currentVideo = this.homePageVideos[0];
    this.iFrameSrc =
        $sce.trustAsResourceUrl("https://player.vimeo.com/video/" + this.currentVideo.vimeoId);

    this.ChangeHomePageVideo = function (vimeoId) {
        var i;
        for (i = 0; i < this.homePageVideos.length; i++) {
            if (this.homePageVideos[i].vimeoId == vimeoId) {
                this.homePageVideoCurrent = i;
                this.currentVideo = this.homePageVideos[i];
                this.iFrameSrc =
                    $sce.trustAsResourceUrl("https://player.vimeo.com/video/" + vimeoId);
            }
        }
    };

    this.createTweetAnchor = function (tweet, containsTwitterClass) {

        var str = "<a href='http://twitter.com/home?status=";
        str += tweet.replace(/ /g, '+');
        str += "' target='_blank' ";
        if (containsTwitterClass === true) {
            str += " class='icon-twitter' ></a>";
        } else {
            str += " >Share&nbsp;This&nbsp;&nbsp;</a>";
        }
        return str;
    };

    this.getIframeSrc = function (vimeoId) {
        return $sce.trustAsResourceUrl("https://player.vimeo.com/video/" + vimeoId);
    };

    this.getVideoThumb = function (vimeoId, width, height) {
        return "https://angularu.com/rpc/vimeo/thumbnail/" + width + "/" + height + "/" + vimeoId + ".jpg";
    };

    var k;
    for(k=0;k<this.homePageVideos.length;k++) {
        this.homePageVideos[k].thumbNail = this.getVideoThumb(this.homePageVideos[k].vimeoId,105,77);
    }
}

HomeController.$inject = ['$scope', 'faqs', 'speakers', 'config','$sce','codecampyear'];

module.exports = HomeController;
