'use strict';

import {equal as assertEqual} from 'assert';

export default factory;

factory.$inject = ['Model', 'Sessions', 'SpeakerUrl'];
function factory (Model, Session, SpeakerUrl) {
  return class Speaker extends Model {
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
    get name () {
      return `${this.firstName} ${this.lastName}`;
    }
    static fetchByUrl (url) {
      return SpeakerUrl
        .fetchAll()
        .then((urls) => {
          return urls.find(u => u.presenterUrl === url).presenterId;
        })
        .then(this.fetchOne.bind(this));
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
    static comparator = 'speakerSequence';
    static url = '/rest/presenter';
  }
}

function assertValidUrl (url) {
  const parts = url.split('/');
  const expected = 2;
  const actual = parts.length;
  assertEqual(actual, expected, `Speaker urls must have ${expected} segments, ` +
    `got ${actual}`
  );
}
