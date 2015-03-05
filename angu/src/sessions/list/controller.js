'use strict';

import angular from 'angular';

function SessionListController (sessions, days) {
  this.sessions = sessions;
  this.days = days;
  this.day = days[0];
}
SessionListController.$inject = ['sessions', 'days'];

export default SessionListController;
