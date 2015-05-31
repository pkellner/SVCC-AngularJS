//export default function () {
//  this.foo = 'bar from video'
//}

'use strict';

function VideoController (videos) {

  this.videos = videos;



}
VideoController.$inject = ['videos'];

export default VideoController;