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
    this.ChangeHomePageVideo = function (vimeoId) {
        var i;
        for (i = 0; i < this.homePageVideos.length; i++) {
            if (this.homePageVideos[i].vimeoId == vimeoId) {
                this.homePageVideoCurrent = i;
                this.homePageVideos[i].current = true;
            }
            else {
                this.homePageVideos[i].current = false;
            }
        }
    };

    this.createTweetAnchor = function (tweet, containsTwitterClass) {

        var str = "<a href='http://twitter.com/home?status=";
        str += tweet.replace(/ /g, '+');//.replace('"',"&quot;");
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
    }

    this.getVideoThumb = function (vimeoId, width, height) {
        return "/rpc/vimeo/thumbnail/" + width + "/" + height + "/" + vimeoId + ".jpg";
    }


    this.homePageVideos = [
        {
            title: 'Misko Hevery Talks About Databinding in Angular 2',
            vimeoId: '126991619',
            tweet: 'Check Out "Misko Hevery Talks About Databinding in Angular 2" at @AngularU https://AngularU.com/Video/2015sf/misko-hevery-talks-about-databinding-in-angular-2 @mhevery'
        },
        {
            title: 'Brad Green, Who Runs the Google Angular Team, Talks about His Upcoming Angular U Keynote',
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


    var k;
    for(k=0;k<this.homePageVideos.length;k++) {
        this.homePageVideos[k].thumbNail = this.getVideoThumb(this.homePageVideos[k].vimeoId,105,77);
    }

    this.homePageVideos[0].current = true;
    this.homePageVideos[1].current = false;
    this.homePageVideos[2].current = false;
    this.homePageVideos[3].current = false;

}

HomeController.$inject = ['$scope', 'faqs', 'speakers', 'config','$sce'];

module.exports = HomeController;
