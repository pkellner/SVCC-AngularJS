'use strict';

function SpeakerDetailsController (speaker, config) {
  this.speaker = speaker;

  this.showSessions = config.sessions.show;
  this.showSchedule = config.schedule.show;
}
SpeakerDetailsController.$inject = ['speaker', 'config'];

export default SpeakerDetailsController;
