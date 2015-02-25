'use strict';

function SpeakerListController (speakers, CONFIG) {
  this.speakers = speakers;
  this.showSessions = CONFIG.showSessions === 'True';
}
SpeakerListController.$inject = ['speakers', 'CONFIG'];

export default SpeakerListController;
