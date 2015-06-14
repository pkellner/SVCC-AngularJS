'use strict';

export default factory;

factory.$inject = ['Model'];
function factory (Model) {
  return class CodeCampYear extends Model {
    static url = '/rest/codecampyear';
  }
}
