//export default function () {
//  this.foo = 'bar from video'
//}

'use strict';

function VideoController(videos,$sce) {

    for (let i = 0; i < videos.length; i++) {
        videos[i].vimeoIframeSrc =
            $sce.trustAsResourceUrl("https://player.vimeo.com/video/" + videos[i].vimeoId);
    }

    //this.videos = videos;

    this.videosSessions = videos.filter(function (rec) {
        return rec.sessionId != undefined
    });

    this.videosPreConferences = videos.filter(function (rec) {
        if (rec.sessionId) {

            rec.underVideo1 = rec.sessionSpeakerCount === 1 ? "Speaker" : "Speakers";

        }

        return rec.sessionId == undefined
    });


    //{
    //    sessions: videos.filter(function (rec) {
    //        return rec.sessionId != undefined
    //    }),
    //    preConference: videos.filter(function (rec) {
    //        return rec.sessionId != undefined
    //    })
    //};

    //this.videos = videos;


}
VideoController.$inject = ['videos','$sce'];

export default VideoController;