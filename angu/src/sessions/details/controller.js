'use strict';

import angular from 'angular';
import list from 'listify';

function SessionDetailsController (session, Speaker, config) {
  this.session = session;
  this.speakers = session.speakersList.map((speaker) => {
    return angular.extend(speaker, {
      name: `${speaker.userFirstName} ${speaker.userLastName}`,
      bio: speaker.userBio,
      bioShort: speaker.userBioShort,
      $stateParams () {
        const url = this.speakerLocalUrl.replace('/Presenter/', '').toLowerCase();
        return Speaker.parseUrl(url);
      }
    });
  });
  this.byline = list(this.speakers.map(s => s.name));
  this.showSchedule = config.schedule.show;
}
SessionDetailsController.$inject = ['session', 'Speaker', 'config'];

export default SessionDetailsController;
