'use strict';

import angular from 'angular';
import sort from 'sort-on';

export default factory;

factory.$inject = ['$http'];
function factory ($http) {
  return class BaseModel {
    constructor (attributes) {
      angular.extend(this, attributes);
    }
    static init () {
      this.$$data = [];
      return this;
    }
    static all () {
      return this.$$data;
    }
    static forge (attributes) {
      return new this(attributes);
    }
    static set (data) {
      this.$$data = data.map(this.forge, this);
      this.sort();
      return this;
    }
    static at (index) {
      return this.$$data[index];
    }
    static find (callback) {
      for (let i = 0; i < this.$$data.length; i++) {
        let model = this.at(i);
        let result = callback.call(this, model);
        if (result) return model;
      }
    }
    static sort (comparator) {
      if (typeof comparator !== 'undefined') {
        this.$$data = sort(this.$$data, comparator);
      }
      else if (this.comparator) {
        this.$$data = sort(this.$$data, this.comparator);
      }
      return this;
    }
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
