'use strict';

import angular from 'angular';
import masonry from 'angular-masonry';
import state from './state';


export default angular.module('angu.fun', [
  masonry
])
.controller('TilesCtrl', ['$scope', function ($scope) {
    $scope.bricks = [ null ];
  }])
.config(state)
.name;
