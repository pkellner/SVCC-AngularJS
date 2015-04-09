'use strict';

export default factory;

factory.$inject = ['Model'];
function factory (Model) {
  return class SessionUrl extends Model {
    static url = '/rest/sessionurls';
  }
}
