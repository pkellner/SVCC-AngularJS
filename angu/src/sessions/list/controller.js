'use strict';

import angular from 'angular';

function SessionListController (sessions, days, tracks) {
  this.sessions = sessions;
  this.days = days;
  this.day = days[0];
  this.tracks = tracks;
}
SessionListController.$inject = ['sessions', 'days', 'tracks'];

export default SessionListController;
