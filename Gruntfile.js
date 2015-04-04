/*
 * grunt-smoothie
 * https://github.com/hayesmaker/grunt-smoothie
 *
 * Copyright (c) 2015 @hayes_maker
 * Licensed under the MIT license.
 */

'use strict';
/**
 *
 * @param grunt
 */
module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['tmp']
		},

		// Configuration to be run (and then tested).
		smoothie: {
			options: {
				name: "party-pokie",
				description: "A reference to Party Pokie app",
				moduleType: 'Controller',
				dest: 'tmp/default_options.js'
			},
			my_default_angular_controller: {
				options: {
					appName: "angular-smoothie",
					moduleName: "MyAngularController",
					moduleType: 'Controller',
					flavour: 'default',
					dest: 'tmp/myDefaultController.js'
				}
			},
			my_static_angular_service: {
				options: {
					appName: "angular-smoothie",
					moduleName: "angularServiceSingleton",
					moduleType: "Service",
					flavour: "static",
					dest: 'tmp/myStaticService.js'
				}
			}

		},

		// Unit tests.
		nodeunit: {
			tests: ['test/*_test.js']
		}

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'smoothie', 'nodeunit']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'test']);

};
