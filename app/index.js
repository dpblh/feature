var generators = require('yeoman-generator');
require('../string-utils');

module.exports = generators.Base.extend({

  constructor: function() {
    generators.Base.apply(this, arguments);

    this.argument('projectName', { type: String, required: true, desc: 'Project name' });

  },

  writing: function () {

    this.config.path = this.destinationRoot() +'\\' + this.projectName.toDash() + '\\.yo-rc.json';
    this.config.set('projectName', this.projectName.toDash());

    /* Create index.html */
    this._copyTpl('app/index.html');

    /* Copy main module */
    this._copyTpl('app/modules/main/main.module.js');
    this._copyTpl('app/modules/main/main.controller.js');
    this._copyTpl('app/modules/main/main.route.config.js');

    /* Create core module */
    this._copy('app/modules/core/core.module.js');

    /* Copy common directives */
    this._copy('app/directives/directives.module.js');

    /* Create common service */
    this._copy('app/services/services.module.js');

    /* Copy grunt config */
    this._copy('Gruntfile.js');
    this._copy('grunt');

    /* Copy bower settings */
    this._copy('.bowerrc');
    this._copy('bower.json');

    /* Copy gitignore */
    this._copy('.gitignore');

    /* Copy jshint settings */
    this._copy('.jshintrc');

    /* Copy test settings */
    this._copy('karma.unit.conf.js');
    this._copy('protractor.e2e.conf.js');

    /* Copy npm settings */
    this._copyTpl('package.json');

    /* Create readme */
    this._copyTpl('README.md');

  },

  _copyTpl: function(fileName) {
    var config = this.config.getAll();
    this.fs.copyTpl(
      this.templatePath(fileName),
      this.destinationPath(config.projectName + '/' + fileName),
      config
    );
  },

  _copy: function(fileName) {
    var config = this.config.getAll();
    this.fs.copy(
      this.templatePath(fileName),
      this.destinationPath(config.projectName + '/' + fileName)
    );
  }
});