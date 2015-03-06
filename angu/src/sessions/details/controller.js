'use strict';

import angular from 'angular';

function SessionDetailsController (session, Speakers) {
  this.session = session;
  this.speakers = session.speakersList.map((speaker) => {
    return angular.extend(speaker, {
      name: `${speaker.userFirstName} ${speaker.userLastName}`,
      bio: speaker.userBio,
      bioShort: speaker.userBioShort,
      $stateParams () {
        const url = this.speakerLocalUrl.replace('/Presenter/', '').toLowerCase();
        return Speakers.parseUrl(url);
      }
    });
  });
  this.byline = this.speakers.map(s => s.name).join(' and ');
}
SessionDetailsController.$inject = ['session', 'Speakers'];

export default SessionDetailsController;
