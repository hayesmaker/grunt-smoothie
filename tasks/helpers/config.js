var _ = require('lodash');

module.exports = function(grunt) {

	var plugins = ['angular'];
	var moduleTypes = ['Main', 'Controller', 'Directive', 'Service'];
	var flavours = ['default'];

	var controllerTemplates = {
		classic: function() {

		}
	};

	var modulesApi = [
		//for reference
		{ moduleType: "main", template: controllerTemplates.classic },
		{
			moduleType: "controller_default",
			template: function() {
				return grunt.file.read('./node_modules/grunt-smoothie/tasks/flavours/angular/controllers/controllerTemplate.js');
			}
		},
		{
			moduleType: "service_static",
			template: function() {
				return grunt.file.read('./node_modules/grunt-smoothie/tasks/flavours/angular/services/staticServiceTemplate.js');
			}
		},
		{
			moduleType: "node_class",
			template: function() {
				return grunt.file.read('./node_modules/grunt-smoothie/tasks/flavours/node/app/classModule.js');
			}
		}
	];

	var specsApi = [
		{
			moduleType: "node_class",
			template: function() {
				return grunt.file.read('./node_modules/grunt-smoothie/tasks/flavours/node/specs/classModuleSpec.js');
			}
		}
	];

	var getTemplate = function(type, flavour) {
		var smoothieMix = flavour? type.toLowerCase() + '_' + flavour.toLowerCase() : type.toLowerCase();
		var module = _.find(modulesApi, { moduleType: smoothieMix });
		return module.template;
	};

	var getSpec = function(type, flavour) {
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