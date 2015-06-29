//export default function () {
//  this.foo = 'bar from video'
//}

'use strict';

function VideoController(videos,$sce,config) {


    this.showLiveFeed = config.home.showLiveFeed;

    for (let i = 0; i < videos.length; i++) {


        // use youtube as primary if it exists

        videos[i].videoSourceYouTube = false;
        if (videos[i].youTubeURL && videos[i].youTubeURL.length > 1) {
            videos[i].videoSourceYouTube = true;
            videos[i].abc = 'abcd';
            // http://www.techairlines.com/youtube-parameters/
            var str = "https://www.youtube.com/embed/" + videos[i].youTubeURL + "?vq=large&amp;cc_load_policy=1&amp;showinfo=0&amp;rel=0&amp;autohide=2&amp;controls=1&amp;fs=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;listType=user_uploads&amp;list=&amp;color=white";
            videos[i].iFrameVideoSrc =
                $sce.trustAsResourceUrl(str);
        } else if (videos[i].vimeoId && videos[i].vimeoId.length > 1) {
            videos[i].iFrameVideoSrc =
                $sce.trustAsResourceUrl("https://player.vimeo.com/video/" + videos[i].vimeoId);
        }

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