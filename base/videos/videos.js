'use strict';

export default factory;

factory.$inject = ['Model'];
function factory (Model) {
  return class Video extends Model {
    static url = '/rest/videosession';
  }
}
