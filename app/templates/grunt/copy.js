module.exports = {
  styles: {
    files: [{
      expand: true,
      dest: 'dist/assets',
      src: '*.css',
      cwd: '.tmp/styles/'
    }]
  },
  scripts: {
    files: [{
      expand: true,
      dest: 'dist/assets/javascript',
      src: '*.js',
      cwd: '.temp/scripts/'
    }]
  },
  templates: {
    files: [{
      expand: true,
      dest: 'dist/assets/view',
      src: '**/*.html',
      cwd: 'app/modules/'
    },
      {
        expand: true,
        dest: 'dist/assets/view',
        src: '**/*.html',
        cwd: 'app/directives/'
      }]
  },
  html: {
    files: [{
      expand: true,
      dest: 'dist/',
      src: '*.html',
      cwd: '.temp/'
    }]
  }
};