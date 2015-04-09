'use strict';

export default factory;

factory.$inject = ['Model', '$q'];
function factory (Model) {
  return class SessionTime extends Model {
    static url = '/rest/sessiontime';
  }
}
