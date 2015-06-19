var generators = require('yeoman-generator');
require('../string-utils');
var providerName;
module.exports = generators.Base.extend({
  prompting: function () {
    var done = this.async();
    this.prompt({
        type: 'input',
        name: 'name',
        message: 'Your module name'
      },
      function (answers) {
        providerName = answers.name;
        done();
      }.bind(this));
  },
  writing: function () {

    /* Copy main module */
    this._copyTpl('provider/provider.service.js');

  },

  _copyTpl: function(fileName) {
    var projectName = this.config.get('projectName');
    this.fs.copyTpl(
      this.templatePath(fileName),
      this.destinationPath(projectName+'/app/services/' + providerName.toDash() + '.service.js'),
      {providerName: providerName}
    );
  }

});
