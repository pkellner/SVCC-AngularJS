'use strict';

import angular from 'angular';

function SessionListController (sessions, days, tracks) {
  this.sessions = sessions;
  this.days = days;
  this.day = days[0];
  this.tracks = tracks;
  this.track = undefined;

  this.filter = (session) => {
    if (this.day.dayOfWeek !== 'Show All') {
      const dayIndex = new Date(session.sessionTimeDateTime).getDay();
      if (!this.day.is(dayIndex)) return;
    }
    if (this.track && this.track.id !== session.sessionTrackId) {
      return;
    }
    return true;
  }
}
SessionListController.$inject = ['sessions', 'days', 'tracks'];

export default SessionListController;
