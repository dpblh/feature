module.exports = function (config) {
  config.set({
    basePath: 'app',
    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-strap/dist/angular-strap.js',
      'bower_components/angular-strap/dist/angular-strap.tpl.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      //'app/**/*.js',
      "app/**/*.module.js",
      "app/**/*.service.js",
      "app/**/*.config.js",
      "app/**/*.routes.js",
      "app/**/*.constant.js",
      "app/**/*.controller.js",
      "app/**/*.directive.js",
      "app/**/*.run.js",
      "app/**/*.filter.js",
      'test/unit/**/*.js',

    //  templates
      'app/directives/**/*.html'
    ],
    preprocessors: {
      'app/directives/**/*.html': 'ng-html2js'
    },
    ngHtml2JsPreprocessor: {
      cacheIdFromPath: function(filepath) {
        return filepath.replace('app/directives/', 'assets/view/');
      },

      moduleName: 'templates-directive'
    },
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
