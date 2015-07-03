'use strict';

export default factory;

factory.$inject = ['Model'];
function factory (Model) {
  return class SessionDisplayItem extends Model {
    static url = '/rest/sessiondisplayitem';
  }
}
