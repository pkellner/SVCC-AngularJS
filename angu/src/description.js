'use strict';

import strip from 'striptags';
import template from './description.html';

export default function () {
  return {
    restrict: 'EA',
    template,
    scope: {
      for: '=',
      description: '@'
    },
    controller: DescriptionController,
    controllerAs: 'description',
    bindToController: true
  };
}

DescriptionController.$inject = ['$sanitize'];
function DescriptionController ($sanitize) {
  const entity = this.for;
  const transform = entity.allowHtml ? $sanitize : strip; 
  this.content = transform(entity[this.description]);
}
