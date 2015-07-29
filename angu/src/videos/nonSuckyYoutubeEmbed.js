'use strict';

//import template from './keynote-presenters.html';  https://angularu.com/content/ng/angu/images/mslogo.png

module.exports = function () {
    return {
        restrict: 'E',
        scope: {
            vidid: '@vidid'
        },
        template: 	'<div style="position: relative;">' +
        '<img ng-src="https://angularu.com/Content/ng/angu/images/youtube-go-red.png" style="position: absolute; left: 50%; top: 50%; width: 48px; height: 48px; margin-left: -24px; margin-top: -24px; cursor: pointer;" alt="Play" />' +
        '<img ng-src="https://img.youtube.com/vi/{{vidid}}/sddefault.jpg" style="width: 100%; height: auto; display: inline; cursor: pointer" alt="" />' +
        '</div>',
        link: function(scope, element, attrs) {
            attrs.$observe('vidid', function(id) {
                //console.log(id);
                if(id) {

                    //var height = (attrs.height) ? attrs.height : 390;
                    //var width = (attrs.width) ? attrs.width : 640;
                    //var paddingBottom = ((height / width) * 100) + '%';
                    //var iframeStyle = 'margin-top: 5px;margin-bottom: 5px;" width="290';
                    //var iframeContainerStyle = 'position: relative; padding-bottom: '+paddingBottom+'; padding-top: 30px; height: 0; overflow: hidden;';
                    ///debugger;
                    element.on('click', function() {
                        //debugger;
                        //var v = '<iframe type="text/html" style="'+iframeStyle+'" width="'+width+'" height="'+height+'" src="http://youtube.com/embed/'+id+'?autoplay=1" frameborder="0" />'
                        //var newHTML =	'<div style="'+iframeContainerStyle+'">' + v + '</div>';
                        var youtubeSrc = 'https://youtube.com/embed/' + id + '?autoplay=1&vq=large&amp;cc_load_policy=1&amp;showinfox=0&amp;rel=0&amp;autohide=2&amp;controls=1&amp;fs=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;listType=user_uploads&amp;list=&amp;color=white';
                        var newHTML = '<iframe  width="289" height="195" src="' + youtubeSrc + '" frameborder="0" allowfullscreen></iframe>';
                        element.html(newHTML);
                    });
                }
            });
        }

    };
};