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
		{moduleType: "main", 		template: controllerTemplates.classic},
		{moduleType: "controller", 	template: controllerTemplates.classic},
		{moduleType: "directive", 	template: controllerTemplates.classic},
		{moduleType: "service", 	template: controllerTemplates.classic},
		{
			moduleType: "controller_default",
			template: function() {
				return grunt.file.read('tasks/flavours/angular/controllers/controllerTemplate.js')
			}
		},
		{
			moduleType: "service_static",
			template: function() {
				return grunt.file.read('tasks/flavours/angular/services/staticServiceTemplate.js')
			}
		}


	];

	var getTemplate = function(type, flavour) {
		var smoothieMix = flavour? type.toLowerCase() + '_' + flavour.toLowerCase() : type.toLowerCase();
		var module = _.find(modulesApi, { moduleType: smoothieMix });
		return module.template;
	};

	return {
		plugins: plugins,
		moduleTypes: moduleTypes,
		modulesApi: modulesApi,
		getTemplate: getTemplate
	}
};