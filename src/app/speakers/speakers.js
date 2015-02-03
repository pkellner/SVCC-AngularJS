'use strict';

exports = module.exports = function (Model, $q) {
  return new Model('/rest/presenter/arrayonly', {
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
