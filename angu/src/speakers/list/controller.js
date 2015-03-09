'use strict';

function SpeakerListController (speakers, config) {
  const keynotes = speakers.filter(speaker => speaker.isKeyNoteSpeaker);
  const regular = speakers.filter(speaker => !speaker.isKeyNoteSpeaker);
  this.speakers = keynotes.concat(regular);
  this.showSessions = config.sessions.show;
  this.showSessionDetails = false;
}
SpeakerListController.$inject = ['speakers', 'config'];

export default SpeakerListController;
