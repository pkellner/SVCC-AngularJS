'use strict';

function SpeakerListController (speakers, CONFIG) {
  const keynotes = speakers.filter(speaker => speaker.isKeyNoteSpeaker);
  const regular = speakers.filter(speaker => !speaker.isKeyNoteSpeaker);
  this.speakers = keynotes.concat(regular);
  this.showSessions = CONFIG.showSessions === 'True';
}
SpeakerListController.$inject = ['speakers', 'CONFIG'];

export default SpeakerListController;
