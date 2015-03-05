'use strict';

exports.$inject = ['Model', '$q'];
function factory (Model) {
  class Track extends Model {}
  Track.url = '/rest/track';
  return Track.init();
}

export default factory;
