'use strict';

import angular from 'angular';
import sort from 'sort-on';

class BaseModel {
  constructor (attributes) {
    attributes = angular.extend(this.defaults(), angular.copy(attributes));
    attributes = this.parse(attributes);
    angular.extend(this, attributes);
  }
  parse (attributes) {
    return attributes;
  }
  defaults () {
    return {};
  }
  static $data () {
    return this.$$data || (this.$$data = []);
  }
  static reset () {
    this.$$data = [];
    return this;
  }
  static all () {
    return this.$data();
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
    const data = this.$data();
    return data[method].apply(data, arguments);
  };
});

export default BaseModel;
