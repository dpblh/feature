var generators = require('yeoman-generator');
require('../string-utils');

module.exports = generators.Base.extend({

  actions: {},

  constructor: function() {
    generators.Base.apply(this, arguments);

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
      this._copyTpl('directive/directive.html', 'app/directives/' + this.name.toDash() + '/' + this.name.toDash() + '.tpl.html');
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

    /**
     * Register params
     */
    this.argument('actionName', { type: String, required: true, desc: 'The action you want to execute. Available action: ' + Object.keys(this.actions).join(', ') });
    this.argument('name', { type: String, required: true, desc: 'Param for code generate' });

  },

  _registerAction: function(actionName, action) {
    this.actions[actionName] = action;
  },

  writing: function () {

    if (!this.name.match(/^[a-z]{1}[a-zA-Z]+$/)) {
      throw new Error('It can only be ^[a-z]{1}[a-zA-Z]+$');
    }

    if (!this.actions[this.actionName]) {
      throw new Error('Action does not exist');
    }

    this.actions[this.actionName]();

  },

  _copyTpl: function(src, dist) {
    this.fs.copyTpl(
      this.templatePath(src),
      this.destinationPath(dist),
      {name: this.name}
    );
  }

});
