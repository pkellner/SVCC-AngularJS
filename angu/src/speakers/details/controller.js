'use strict';

function SpeakerDetailsController (speaker, CONFIG) {
  this.speaker = speaker;
  this.showSessions = CONFIG.showSessions === 'True';
}
SpeakerDetailsController.$inject = ['speaker', 'CONFIG'];

export default SpeakerDetailsController;
