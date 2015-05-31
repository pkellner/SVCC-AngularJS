//export default function () {
//  this.foo = 'bar from video'
//}

'use strict';

function VideoController(videos,$sce) {

    for (let i = 0; i < videos.length; i++) {
        videos[i].vimeoIframeSrc =
            $sce.trustAsResourceUrl("https://player.vimeo.com/video/" + videos[i].vimeoId);
    }


    this.videos = videos;


}
VideoController.$inject = ['videos','$sce'];

export default VideoController;