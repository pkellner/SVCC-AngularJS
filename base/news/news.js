'use strict';

export default factory;

factory.$inject = ['Model'];
function factory (Model) {
  return class News extends Model {
    static url = '/rest/news';
  }
}
