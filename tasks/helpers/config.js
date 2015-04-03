var controllerTemplates = require('../plugins/angular/controllerTemplates');
var _ = require('lodash');

module.exports = function(grunt) {

	var plugins = ['angular'];
	var moduleTypes = ['Controller', 'Main', 'Directive', 'Service'];

	var modulesApi = [
		{moduleType: "Main", 		template: controllerTemplates.classic},
		{moduleType: "Controller", 	template: controllerTemplates.classic},
		{moduleType: "Directive", 	template: controllerTemplates.classic},
		{moduleType: "Service", 	template: controllerTemplates.classic}
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