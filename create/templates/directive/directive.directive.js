'use strict';
angular.module('rbt.directives').directive('rbt<%= name.capitalize() %>', /*@ngInject*/function(){
  return {
    restrict: 'EA',
    scope: {

    },
    templateUrl: '../app/directives/<%= name.toDash() %>/<%= name.toDash() %>.tpl.html',
    link: function(scope, element, attrs) {

    }
  };
});