var generators = require('yeoman-generator');
require('../string-utils');
var directiveName;
module.exports = generators.Base.extend({
  prompting: function () {
    var done = this.async();
    this.prompt({
        type: 'input',
        name: 'name',
        message: 'Your directive name'
      },
      function (answers) {
        directiveName = answers.name;
        done();
      }.bind(this));
  },
  writing: function () {

    /* Copy main module */
    this._copyTpl('directive.js');
    this._copyTpl('html');
    this._copyTpl('less');

  },

  _copyTpl: function(fileName) {
    var projectName = this.config.get('projectName');
    this.fs.copyTpl(
      this.templatePath('directive/'+fileName),
      this.destinationPath(projectName+'/app/directives/' + directiveName.toDash() + '/' + directiveName.toDash() + '.' + fileName),
      {directiveName: directiveName}
    );
  }

});
