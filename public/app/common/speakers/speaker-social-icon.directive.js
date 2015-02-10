(function () {
    'use strict';

    angular.module('baseApp')
        .directive('speakerSocialIconDirective',['CONFIG',speakerSocialIconDirective]);
    function speakerSocialIconDirective(CONFIG) {
        return {
            restrict: 'EA',
            templateUrl: CONFIG.baseDir + 'app/'+ CONFIG.codeCampType + '/speakers/speaker-social-icon.directive.html',
            scope: {
                speaker: '='
            }
        };
    }

}());
