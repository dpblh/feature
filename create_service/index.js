var generators = require('yeoman-generator');
require('../string-utils');
var serviceName;
module.exports = generators.Base.extend({
  prompting: function () {
    var done = this.async();
    this.prompt({
        type: 'input',
        name: 'name',
        message: 'Your module name'
      },
      function (answers) {
        serviceName = answers.name;
        done();
      }.bind(this));
  },
  writing: function () {

    /* Copy main module */
    this._copyTpl('service/service.service.js');

  },

  _copyTpl: function(fileName) {
    var projectName = this.config.get('projectName');
    this.fs.copyTpl(
      this.templatePath(fileName),
      this.destinationPath(projectName+'/app/services/' + serviceName.toDash() + '.service.js'),
      {serviceName: serviceName}
    );
  }

});
