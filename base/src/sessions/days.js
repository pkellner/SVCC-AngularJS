'use strict';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

factory.$inject = ['Model'];
function factory (Model) {
  class Day extends Model {
    is (index) {
      return days.indexOf(this.dayOfWeek) === index;
    }
  }
  Day.url = '/rest/sessiondayofweek';
  return Day.init();
}

export default factory;
