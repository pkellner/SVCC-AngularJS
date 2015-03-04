'use strict';

function SessionDetailsController (session, Speaker, CONFIG) {
  this.session = session;
  const speaker = session.speakersList[0];
  this.speaker = {
    name: `${speaker.userFirstName} ${speaker.userLastName}`,
    bio: speaker.userBio
  }
}
SessionDetailsController.$inject = ['session', 'Speakers', 'CONFIG'];

export default SessionDetailsController;
