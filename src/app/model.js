'use strict';

var angular = require('angular');

exports = module.exports = function ($http) {

  function BaseModel (attributes) {
    angular.extend(this, attributes);
  }

  BaseModel.$$data = [];

  BaseModel.all = function () {
    return this.$$data;
  };

  BaseModel.forge = function (attributes) {
    return new this(attributes);
  };

  BaseModel.set = function (data) {
    this.$$data = data.map(this.forge, this);
    this.length = data.length;
    return this;
  };

  BaseModel.at = function (index) {
    return this.$$data[index];
  };

  BaseModel.fetchOne = function (urlSuffix) {
    var self = this;
    return $http.get(this.url + '/' + urlSuffix, {
      cache: true
    })
    .then(function (response) {
      return self.forge(response.data);
    });
  };

  BaseModel.fetchAll = function () {
    var self = this;
    return $http.get(this.url + '/arrayonly', {
      cache: true
    })
    .then(function (response) {
      return self.set(response.data);
    })
    .then(function (Model) {
      return Model.all();
    });
  };

  BaseModel.find = function (callback) {
    for (var i = 0; i < this.length; i++) {
      var result = callback.call(this, this.at(i));
      if (result) return result;
    }
  };

  BaseModel.extend = function (proto, ctor) {
    var parent = this;
    function Model () {
      parent.apply(this, arguments);
    }
    angular.extend(Model, ctor);
    Model.$$data = [];
    Model.prototype = angular.extend(Object.create(parent.prototype), proto, {
      constructor: parent
    });
    return Model;
  };

  return BaseModel;

};
exports.$inject = ['$http'];
