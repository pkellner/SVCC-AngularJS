'use strict';

import angular from 'angular';

function SessionListController (sessions) {
  this.sessions = sessions;
}
SessionListController.$inject = ['sessions'];

export default SessionListController;
