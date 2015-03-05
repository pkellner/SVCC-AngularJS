'use strict';

factory.$inject = ['Model'];
function factory (Model) {
  class Day extends Model {}
  Day.url = '/rest/sessiondayofweek';
  return Day.init();
}

export default factory;
