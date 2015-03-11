'use strict';

exports = module.exports = function (Model, $sce, $q, Session) {
  class Speaker extends Model {
    parse (attributes) {
      attributes.sessions = attributes.sessions.map(function (data) {
        return new Session(data);
      });
      return attributes;
    }
    static findByUrl (url) {
      return this.find(function (speaker) {
        return speaker.presenterUrl === url;
      });
    }
    static fetchByUrl (url) {
      return $q.when(this.findByUrl(url) || this.fetchOne(url));
    }
    static parseUrl (url) {
      let parts = url.split('/');
      return {
        camp: parts[0],
        speaker: parts[1]
      };
    }
    static formatUrl (params) {
      return `${params.camp}/${params.speaker}`;
    }
    $stateParams () {
      return this.constructor.parseUrl(this.presenterUrl);
    }
  }
  Speaker.url = '/rest/presenter';
  Speaker.comparator = 'speakerSequence';
  Object.defineProperty(Speaker.prototype, 'name', {
    get () {
      return `${this.firstName} ${this.lastName}`;
    }
  });
  return Speaker;
};
exports.$inject = ['Model', '$sce', '$q', 'Sessions'];
