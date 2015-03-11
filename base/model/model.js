'use strict';

import angular from 'angular';
import sort from 'sort-on';

class BaseModel {
  constructor (attributes) {
    attributes = this.parse(angular.copy(attributes) || {});
    angular.extend(this, attributes);
  }
  parse (attributes) {
    return attributes;
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
  static sort (comparator) {
    if (typeof comparator !== 'undefined') {
      this.$$data = sort(this.$$data, comparator);
    }
    else if (this.comparator) {
      this.$$data = sort(this.$$data, this.comparator);
    }
    return this;
  }
}

['filter', 'find', 'forEach', 'map', 'reduce'].forEach(function (method) {
  BaseModel[method] = function () {
    return this.$$data[method].apply(this.$$data, arguments);
  };
});

export default BaseModel;
