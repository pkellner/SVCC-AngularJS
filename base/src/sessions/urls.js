'use strict';

exports.$inject = ['Model', '$q'];
function factory (Model) {
  class SessionUrl extends Model {}
  SessionUrl.url = '/rest/sessionurls';
  return SessionUrl.init();
}

export default factory;
