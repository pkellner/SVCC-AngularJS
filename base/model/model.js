'use strict';

import angular from 'angular';
import sort from 'sort-on';

class BaseModel {
  constructor (attributes) {
    attributes = angular.copy(attributes || {});
    if (typeof this.parse === 'function') attributes = this.parse(attributes);
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
};

export default BaseModel;
