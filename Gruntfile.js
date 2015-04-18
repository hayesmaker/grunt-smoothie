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
	var change = require('./node_modules/change-case/change-case.js');

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/**/*.js',
				'!tasks/flavours/**/*.js',
				'<%= nodeunit.tests %>'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		smoothie: {
			default_task: {
				options: {
					src: "app/src/",
					test: "app/test/",
					moduleTemplate: 'tasks/flavours/node/app/classModule.js',
					specTemplate: 'tasks/flavours/node/specs/classModuleSpec.js',
					packageMap: [
						{
							name: 'Top Level',
							value: ''
						},
						'core',
						'components',
						'states',
						'utils'
					]
				}
			}
		}

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-mocha-test');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'testsmoothie', 'nodeunit', 'mochaTest']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['smoothie']);

};
