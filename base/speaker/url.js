'use strict';

export default factory;

factory.$inject = ['Model'];
function factory (Model) {
  return class SpeakerUrl extends Model {
    static url = '/rest/presenterurls';
  }
}
