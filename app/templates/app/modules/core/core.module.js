(function () {
  'use strict';
  var dependencies = [
    'rbt.directives',
    'rbt.services',
    'ui.router',
    'ngResource',
    'ngAnimate',
    'mgcrea.ngStrap',
    'ngSanitize'
  ];

  try {
    angular.module('templates-main');
    dependencies.push('templates-main');
  } catch(ignore){}

  angular.module('rbt.core', dependencies);
})();
