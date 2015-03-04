'use strict';

exports.$inject = ['Model', '$q'];
function factory (Model) {
  class SessionTime extends Model {}
  SessionTime.url = '/rest/sessiontimes';
  return SessionTime.init();
}

export default factory;
