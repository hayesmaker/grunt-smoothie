var _ = require('lodash');

module.exports = function(grunt) {

	var self = this;

	this.modulePath = "";
	this.specPath = "";

	var plugins = ['angular'];
	var moduleTypes = ['Main', 'Controller', 'Directive', 'Service'];
	var flavours = ['default'];

	var controllerTemplates = {
		classic: function() {

		}
	};





	//console.log('JSON options:', JSON.stringify(this.options));

	var modulesApi = [
		//for reference
		{ moduleType: "main", template: controllerTemplates.classic },
		{
			moduleType: "controller_default",
			template: function() {
				return grunt.file.read('tasks/flavours/angular/controllers/controllerTemplate.js');
			}
		},
		{
			moduleType: "service_static",
			template: function() {
				return grunt.file.read('tasks/flavours/angular/services/staticServiceTemplate.js');
			}
		},
		{
			moduleType: "node_class",
			template: function() {
				return grunt.file.read(self.modulePath);
			}
		}
	];

	var specsApi = [
		{
			moduleType: "node_class",
			template: function() {
				return grunt.file.read(self.specPath);
			}
		}
	];

	var setCustomTemplate = function(path) {
		self.modulePath = path;
	};

	var setSpecPath = function(path) {
		self.specPath = path;
	};

	var getTemplate = function(type, flavour, modulePath) {
		setCustomTemplate(modulePath);
		var smoothieMix = flavour? type.toLowerCase() + '_' + flavour.toLowerCase() : type.toLowerCase();
		var module = _.find(modulesApi, { moduleType: smoothieMix });
		return module.template;
	};

	var getSpec = function(type, flavour, specPath) {
		setSpecPath(specPath);
		var smoothieMix = flavour? type.toLowerCase() + '_' + flavour.toLowerCase() : type.toLowerCase();
		var moduleSpec = _.find(specsApi, { moduleType: smoothieMix});
		return moduleSpec.template;

	};

	return {
		plugins: plugins,
		moduleTypes: moduleTypes,
		modulesApi: modulesApi,
		getTemplate: getTemplate,
		getSpec: getSpec
	};
};