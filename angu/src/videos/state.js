'use strict';

import template from './videos.html';

export default state;


function state($stateProvider) {
    $stateProvider.state('videos', {
        url: '/videos',
        resolve: {
            videos: getVideos
        },
        parent: 'base',
        views: {
            '@layout': {
                template,
                controller: 'VideosController',
                controllerAs: 'list'
            }
        }
    });

}

getVideos.$inject = ['Videos','$q'];
function getVideos (Video) {
    return Video.fetchAll().then(function(videos){
        return videos.map(function(video){
            return video;
        });
    });




}
state.$inject = ['$stateProvider'];