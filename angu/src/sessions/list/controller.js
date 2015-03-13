'use strict';

function SessionListController (sessions, days, tracks, Speaker) {
  this.sessions = sessions;
  this.days = days;
  this.day = days[0];
  this.tracks = tracks;
  this.track = undefined;

  this.sessions.reduce(function (speakers, session) {
    speakers.push.apply(speakers, session.speakersList);
    return speakers;
  }, [])
  .forEach(function (speaker) {
    speaker.$stateParams = function () {
      const url = this.speakerLocalUrl.replace('/Presenter/', '').toLowerCase();
      return Speaker.parseUrl(url);
    };
  });

  this.filter = (session) => {
    if (this.day.dayOfWeek !== 'Show All') {
      const dayIndex = new Date(session.sessionTimeDateTime).getDay();
      if (!this.day.is(dayIndex)) return;
    }
    if (this.track && this.track.id !== session.sessionTrackId) {
      return;
    }
    return true;
  };
}
SessionListController.$inject = ['sessions', 'days', 'tracks', 'Speaker'];

export default SessionListController;
