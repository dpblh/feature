var generators = require('yeoman-generator');
require('../string-utils');
var moduleName;
module.exports = generators.Base.extend({
  prompting: function () {
    var done = this.async();
    this.prompt({
        type: 'input',
        name: 'name',
        message: 'Your module name'
      },
      function (answers) {
        moduleName = answers.name;
        done();
      }.bind(this));
  },
  writing: function () {

    /* Copy main module */
    this._copyTpl('module');
    this._copyTpl('controller');
    this._copyTpl('route.config');

  },

  _copyTpl: function(fileName) {
    var projectName = this.config.get('projectName');
    this.fs.copyTpl(
      this.templatePath('module/module.'+fileName+'.js'),
      this.destinationPath(projectName+'/app/modules/' + moduleName.toDash() + '/' + moduleName.toDash() + '.' + fileName + '.js'),
      {moduleName: moduleName}
    );
  }

});
