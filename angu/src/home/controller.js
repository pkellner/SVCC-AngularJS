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

    this.title2 = config.home.title2.content ||
        "<strong>Who’s Who</strong> of Angular Presenters and Its Future";

    this.showSpeakers = config.speakers.show;
    this.fromNg = config.ng.from;


    this.homePageVideos = [
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
        },
        {
            title: 'Scott Moss Talks About His ECMAScript6 Workshops',
            vimeoId: '126972966',
            tweet: 'Check Out "Scott Moss Talks About His ECMAScript6 Workshops" at @AngularU https://AngularU.com/Video/2015sf/scott-moss-talks-about-his-ecmascript6-workshops @scotups'
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

HomeController.$inject = ['$scope', 'faqs', 'speakers', 'config','$sce'];

module.exports = HomeController;
