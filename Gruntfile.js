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

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['tmp']
		},

		// Configuration to be run (and then tested).
		testsmoothie: {
			options: {
				moduleName: "MyClassModule",
				moduleType: 'node',
				flavour: 'class',
				dest: 'tmp/MyNodeClass'
			},
			my_default_angular_controller: {
				options: {
					appName: "angular-smoothie",
					moduleName: "MyAngularController",
					moduleType: 'Controller',
					flavour: 'default',
					dest: 'tmp/myDefaultController'
				}
			},
			my_static_angular_service: {
				options: {
					appName: "angular-smoothie",
					moduleName: "angularServiceSingleton",
					moduleType: "Service",
					flavour: "static",
					dest: 'tmp/myStaticService'
				}
			},
			my_node_class: {
				options: {
					src: "app/",
					test: "app/test/",
					moduleType: 'node',
					flavour: 'class',
					spec: true,
					moduleTemplate: '../flavours/node/specs/classModuleSpec.js',
					specTemplate: '../flavours/node/specs/classModuleSpec.js'
				}
			}
		},

		smoothie: {
			default_task: {
				options: {
					src: "app/",
					test: "app/test/",
					moduleType: 'node',
					flavour: 'class',
					spec: true,
					moduleTemplate: 'tasks/flavours/node/specs/classModule.js',
					specTemplate: 'tasks/flavours/node/specs/classModuleSpec.js'
				}
			}
		},

		// Unit tests.
		nodeunit: {
			tests: ['test/nodeunit/*_test.js']
		},

		mochaTest: {
			test: {
				options: {
					reporter: 'nyan',
					quiet: false, // Optionally suppress output to standard out (defaults to false)
					clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
				},
				src: ['test/mocha/**/*.js']
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
