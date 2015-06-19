var generators = require('yeoman-generator');
require('../string-utils');

module.exports = generators.Base.extend({

  actions: {},

  constructor: function() {
    generators.Base.apply(this, arguments);

    this.argument('actionName', { type: String, required: true, desc: 'The action you want to execute' });
    this.argument('name', { type: String, required: true, desc: 'Param for code generate' });

    /**
     * Create module structure
     */
    this._registerAction('module', function() {
      this._copyTpl('module/module.module.js', 'app/modules/' + this.name.toDash() + '/' + this.name.toDash() + '.module.js');
      this._copyTpl('module/module.controller.js', 'app/modules/' + this.name.toDash() + '/' + this.name.toDash() + '.controller.js');
      this._copyTpl('module/module.route.config.js', 'app/modules/' + this.name.toDash() + '/' + this.name.toDash() + '.route.config.js');
    }.bind(this));

    /**
     * Create directive structure
     */
    this._registerAction('directive', function() {
      this._copyTpl('directive/directive.directive.js', 'app/directives/' + this.name.toDash() + '/' + this.name.toDash() + '.directive.js');
      this._copyTpl('directive/directive.html', 'app/directives/' + this.name.toDash() + '/' + this.name.toDash() + '.html');
      this._copyTpl('directive/directive.less', 'app/directives/' + this.name.toDash() + '/' + this.name.toDash() + '.less');
    }.bind(this));

    /**
     * Create factory
     */
    this._registerAction('factory', function() {
      this._copyTpl('factory/factory.service.js', 'app/services/' + this.name.toDash() + '.service.js');
    }.bind(this));

    /**
     * Create service
     */
    this._registerAction('service', function() {
      this._copyTpl('service/service.service.js', 'app/services/' + this.name.toDash() + '.service.js');
    }.bind(this));

    /**
     * Create provider
     */
    this._registerAction('provider', function() {
      this._copyTpl('provider/provider.service.js', 'app/services/' + this.name.toDash() + '.service.js');
    }.bind(this));

  },

  _registerAction: function(actionName, action) {
    this.actions[actionName] = action;
  },

  writing: function () {

    this.actions[this.actionName]();

  },

  _copyTpl: function(src, dist) {
    var projectName = this.config.get('projectName');
    this.fs.copyTpl(
      this.templatePath(src),
      this.destinationPath(projectName + '/' + dist),
      {name: this.name}
    );
  }

});
