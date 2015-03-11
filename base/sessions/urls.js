'use strict';

factory.$inject = ['Model', '$q'];
function factory (Model) {
  class SessionUrl extends Model {}
  SessionUrl.url = '/rest/sessionurls';
  return SessionUrl;
}

export default factory;
