var controllerTemplates = require('../flavours/angular/controllerTemplates');
var _ = require('lodash');

module.exports = function(grunt) {

	var plugins = ['angular'];
	var moduleTypes = ['Main', 'Controller', 'Directive', 'Service'];

	var modulesApi = [
		{moduleType: "Main", 		template: controllerTemplates.classic},
		{moduleType: "Controller", 	template: controllerTemplates.classic},
		{moduleType: "Directive", 	template: controllerTemplates.classic},
		{moduleType: "Service", 	template: controllerTemplates.classic},
		{
			moduleType: "CustomController",
			template: function() {
				return grunt.file.read('tasks/flavours/angular/custom/controllerTemplate.js')
		}}
	];

	var getTemplate = function(type) {
		var module = _.find(modulesApi, {moduleType: type});
		return module.template;
	};

	return {
		plugins: plugins,
		moduleTypes: moduleTypes,
		modulesApi: modulesApi,

		getTemplate: getTemplate
	}


};