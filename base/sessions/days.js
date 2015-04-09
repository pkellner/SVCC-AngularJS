'use strict';

export default factory;

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
  return class Day extends Model {
    is (index) {
      return days.indexOf(this.dayOfWeek) === index;
    }
    static url = '/rest/sessiondayofweek'
  };
}
