'use strict';

function SessionDetailsController (session, CONFIG) {
  this.session = session;
}
SessionDetailsController.$inject = ['session', 'CONFIG'];

export default SessionDetailsController;
