'use strict';

import Model from './model';

export default factory;

factory.$inject = ['$http'];
function factory ($http) {
  return class RestModel extends Model {
    static fetchOne (urlSuffix) {
      return $http.get(`${this.url}/arrayonly/${urlSuffix}`, {
        cache: true
      })
      .then((response) => {
        return this.forge(response.data);
      });
    }
    static fetchAll () {
      return $http.get(`${this.url}/arrayonly`, {
        cache: true
      })
      .then((response) => {
        return this.set(response.data);
      })
      .then(function (Model) {
        return Model.all();
      });
    }
  };
}
