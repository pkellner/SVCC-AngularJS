'use strict';

export default function () {
  return {
    restrict: 'EA',
    templateUrl: 'app/speakers/bio.html',
    scope: {
      speaker: '='
    },
    controller: BioController,
    controllerAs: 'bio',
    bindToController: true
  };
}

BioController.$inject = ['$sce'];
function BioController ($sce) {
  const speaker = this.speaker;
  const allowHtml = this.allowHtml = speaker.allowHtml;
  const bio = speaker.bio;
  this.contents = allowHtml ? $sce.trustAsHtml(bio) : bio;
}
