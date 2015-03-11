'use strict';

import {equal as assertEqual} from 'assert';

export default factory;

factory.$inject = ['Model', '$sce', '$q', 'Sessions'];
function factory (Model, $sce, $q, Session) {
  class Speaker extends Model {
    defaults () {
      return {
        sessions: []
      };
    }
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
      assertValidUrl(url);
      const parts = url.split('/');
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
}

function assertValidUrl (url) {
  const parts = url.split('/');
  const expected = 2;
  const actual = parts.length;
  assertEqual(actual, expected, `Speaker urls must have ${expected} segments, ` +
    `got ${actual}`
  );
}
