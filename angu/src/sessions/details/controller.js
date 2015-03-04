'use strict';

function SessionDetailsController (session, times) {
  this.session = session;
  const speaker = session.speakersList[0];
  this.speaker = {
    name: `${speaker.userFirstName} ${speaker.userLastName}`,
    bio: speaker.userBio
  };
  this.time = times.find(t => t.id === session.sessionTimesId);
}
SessionDetailsController.$inject = ['session', 'times'];

export default SessionDetailsController;
