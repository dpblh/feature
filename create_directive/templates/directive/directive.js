'use strict';
angular.module('rbt.directives').directive('rbt<%= directiveName.capitalize() %>', /*@ngInject*/function(){
  return {
    restrict: 'EA',
    scope: {

    },
    templateUrl: './<%= directiveName.toDash() %>.html',
    link: function(scope, element, attrs) {

    }
  }
});