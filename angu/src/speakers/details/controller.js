'use strict';

function SpeakerDetailsController (speaker, config) {
  this.speaker = speaker;
  this.showSessions = config.sessions.show;
}
SpeakerDetailsController.$inject = ['speaker', 'config'];

export default SpeakerDetailsController;
