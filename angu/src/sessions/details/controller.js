'use strict';

import angular from 'angular';

function SessionDetailsController (session) {
  this.session = session;
  this.speakers = session.speakersList.map((speaker) => {
    return angular.extend(speaker, {
      name: `${speaker.userFirstName} ${speaker.userLastName}`,
      bio: speaker.userBio,
      bioShort: speaker.userBioShort
    });
  });
  this.byline = this.speakers.map(s => s.name).join(' and ');
}
SessionDetailsController.$inject = ['session'];

export default SessionDetailsController;
