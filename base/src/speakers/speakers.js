'use strict';

exports = module.exports = function (Model, $q) {
  class Speaker extends Model {
    static findByUrl (url) {
      return this.find(function (speaker) {
        return speaker.presenterUrl === url;
      });
    }
    static fetchByUrl (url) {
      return $q.when(this.findByUrl(url) || this.fetchOne(url));
    }
  }
  Speaker.url = '/rest/presenter';
  Speaker.comparator = 'speakerSequence';
  Object.defineProperty(Speaker.prototype, 'name', {
    get () {
      return `${this.firstName} ${this.lastName}`;
    }
  });
  return Speaker.init();
};
exports.$inject = ['Model', '$q'];
