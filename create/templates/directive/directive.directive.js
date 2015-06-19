'use strict';
angular.module('rbt.directives').directive('rbt<%= name.capitalize() %>', /*@ngInject*/function(){
  return {
    restrict: 'EA',
    scope: {

    },
    templateUrl: './<%= name.toDash() %>.html',
    link: function(scope, element, attrs) {

    }
  }
});