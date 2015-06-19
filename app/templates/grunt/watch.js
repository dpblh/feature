module.exports = {
  options: {
    spawn: false,
    livereload: true
  },
  scripts: {
    files: [
      'app/modules/**/*.js',
      'app/directives/**/*.js',
      'app/services/*.js'
    ],
    tasks: [
      'develop'
    ]
  },
  styles: {
    files: [
      'app/app.less',
      'app/**/*.less'
    ],
    tasks: [
      'develop'
    ]
  },
  templates: {
    files: [
      'app/*.html',
      'app/modules/**/*.html',
      'app/directives/**/*.html'
    ],
    tasks: [
      'develop'
    ]
  }
};