'use strict';

var angular = require('angular');

exports = module.exports = function ($http) {

  function Model (url, methods) {
    this.url = url;
    this.set([]);
    angular.extend(this, methods);
  }

  Model.prototype.get = function () {
    return this.$$data;
  };
  Model.prototype.set = function (data) {
    this.$$data = data;
    this.length = data.length;
  };
  Model.prototype.at = function (index) {
    return this.$$data[index];
  };
  Model.prototype.fetchOne = function (urlSuffix) {
    return $http.get(this.url + '/' + urlSuffix, {
      cache: true
    });
  };
  Model.prototype.fetchAll = function () {
    var self = this;
    return $http.get(this.url, {
      cache: true
    })
    .then(function (response) {
      self.set(response.data);
    });
  };
  Model.prototype.find = function (callback) {
    for (var i = 0; i < this.length; i++) {
      var result = callback(this.at(i));
      if (result) return result;
    }
  };

  return Model;

};
exports.$inject = ['$http'];
