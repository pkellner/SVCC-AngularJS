'use strict';

import strip from 'striptags';

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

BioController.$inject = ['$sanitize'];
function BioController ($sanitize) {
  const speaker = this.speaker;
  const transform = speaker.allowHtml ? $sanitize : strip; 
  this.content = transform(speaker.bio);
}
