(function () {
    'use strict';

    angular.module('baseApp')
        .directive('speakerSocialIconDirective', speakerSocialIconDirective);
    function speakerSocialIconDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'app/speakers/speaker-social-icon.directive.html',
            scope: {
                speaker: '='
            }
        };
    }

}());
