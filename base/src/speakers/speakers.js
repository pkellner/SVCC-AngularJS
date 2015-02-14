'use strict';

exports = module.exports = function (Model, $q) {
  return Model.extend({}, {
    url: '/rest/presenter',
    findByUrl: function (url) {
      return this.find(function (speaker) {
        return speaker.presenterUrl === url;
      });
    },
    fetchByUrl: function (url) {
      return $q.when(this.findByUrl(url) || this.fetchOne(url));
    }
  });
};
exports.$inject = ['Model', '$q'];
