'use strict';

exports = module.exports = function (Model, $q) {
  return Model.extend({}, {
    url: '/rest/sessions',
    findByUrl: function (url) {
      return this.find(function (session) {
        return session.sessionUrl === url;
      });
    },
    fetchByUrl: function (url) {
      return $q.when(this.findByUrl(url) || this.fetchOne(url));
    }
  });
};
exports.$inject = ['Model', '$q'];
