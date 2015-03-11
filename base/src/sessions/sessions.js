'use strict';

factory.$inject = ['Model', 'SessionUrls', '$http'];
function factory (Model, SessionUrls, $http) {
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
        .then((sessionId) => {
          const campId = url.split('/')[0];
          return $http.get(`/rest/sessionandws/${campId}/${sessionId}`, {
            cache: true
          })
          .then((response) => {
            return this.forge(response.data);
          });
        });
    }
    static formatUrl (params) {
      return `${params.camp}/${params.session}`;
    }
    static parseUrl (url) {
      const parts = url.split('/');
      return {
        camp: parts[2],
        session: parts[3]
      };
    }
    $stateParams () {
      return Session.parseUrl(this.sessionUrlPre);
    }
  }
  Session.url = '/rest/session';
  Session.comparator = function (session) {
    return new Date(session.sessionTimeDateTime);
  }
  return Session.init();
}

export default factory;
