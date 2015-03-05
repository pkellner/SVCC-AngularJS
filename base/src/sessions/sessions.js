'use strict';

factory.$inject = ['Model', 'SessionUrls'];
function factory (Model, SessionUrls) {
  class Session extends Model {
    levelName () {
      switch (this.sessionLevelId) {
        case 1:
          return 'Beginner';
        case 2:
          return 'Intermediate';
        case 3:
          return 'Advanced';
        default:
          return 'Unknown';
      }
    }
    static fetchByUrl (url) {
      return SessionUrls.fetchAll()
        .then(function () {
          return SessionUrls.find(s => s.sessionUrl === url).sessionId;
        })
        .then(function (sessionId) {
          return Session.fetchOne(sessionId);
        });
    }
    static formatUrl (params) {
      return `${params.camp}/${params.session}`;
    }
    static parseUrl (url) {
      const parts = url.split('/');
      return {
        camp: parts[1],
        session: parts[2]
      };
    }
    $stateParams () {
      return Session.parseUrl(this.presenterUrl);
    }
  }
  Session.url = '/rest/session';
  Session.comparator = function (session) {
    return new Date(session.sessionTimeDateTime);
  }
  return Session.init();
}

export default factory;
