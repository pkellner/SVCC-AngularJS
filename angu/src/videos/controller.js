//export default function () {
//  this.foo = 'bar from video'
//}

'use strict';

function VideoController(videos,$sce,config) {


    this.showLiveFeed = config.home.showLiveFeed;

    for (let i = 0; i < videos.length; i++) {
        videos[i].vimeoIframeSrc =
            $sce.trustAsResourceUrl("https://player.vimeo.com/video/" + videos[i].vimeoId);

        if (videos[i].sessionSpeakerNamesCsv) {
            videos[i].sessionSpeakerNamesCsv = videos[i].sessionSpeakerNamesCsv.replace(/,/g, ', ');
        }
    }

    this.videosSessions = videos.filter(function (rec) {
        return rec.sessionId != undefined
    });



    this.videosPreConferences = videos.filter(function (rec) {
        if (rec.sessionId) {
            rec.underVideo1 = rec.sessionSpeakerCount === 1 ? "Speaker" : "Speakers";
        }
        return rec.sessionId == undefined
    });

}
VideoController.$inject = ['videos','$sce','config'];

export default VideoController;