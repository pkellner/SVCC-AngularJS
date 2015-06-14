'use strict';

export default factory;

factory.$inject = ['Model'];
function factory (Model) {
  return class Faq extends Model {
    static url = '/rest/faq';
  }
}
