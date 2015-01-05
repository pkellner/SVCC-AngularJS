(function () {
    'use strict';

    angular.module('baseApp')
        .directive('speakerSocialIconDirective', speakerSocialIconDirective);
    function speakerSocialIconDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'app/svcc/speakers/speaker-social-icon.directive.html',
            scope: {
                speaker: '='
            }
        };
    }

}());
