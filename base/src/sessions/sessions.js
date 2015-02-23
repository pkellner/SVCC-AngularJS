'use strict';

exports = module.exports = function (Model, $q) {
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
    static findByUrl (url) {
      return this.find(function (session) {
        return session.sessionUrl === url;
      });
    }
    static fetchByUrl (url) {
      return $q.when(this.findByUrl(url) || this.fetchOne(url));
    }
  }
  Session.url = '/rest/sessions';
  return Session.init();
};
exports.$inject = ['Model', '$q'];
