'use strict';

function SpeakersController (speaker) {
  this.speaker = speaker;
}
SpeakersController.$inject = ['speaker'];

export default SpeakersController;
