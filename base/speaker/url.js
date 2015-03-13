'use strict';

export default factory;

factory.$inject = ['Model'];
function factory (Model) {
  class SpeakerUrl extends Model {}
  SpeakerUrl.url = '/rest/presenterurls';
  return SpeakerUrl;
}
