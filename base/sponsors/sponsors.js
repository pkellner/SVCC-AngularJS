'use strict';

export default factory;

factory.$inject = ['Model'];
function factory (Model) {
  return class Sponsor extends Model {
    static url = '/rest/sponsor';
  };
};
