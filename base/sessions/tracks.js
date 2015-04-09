'use strict';

export default factory;

factory.$inject = ['Model'];
function factory (Model) {
  return class Track extends Model {
    static url = '/rest/track';
  }
}
