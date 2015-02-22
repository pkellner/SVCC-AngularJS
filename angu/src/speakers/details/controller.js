'use strict';

function SpeakerDetailsController (speaker) {
  this.speaker = speaker;
}
SpeakerDetailsController.$inject = ['speaker'];

export default SpeakerDetailsController;
