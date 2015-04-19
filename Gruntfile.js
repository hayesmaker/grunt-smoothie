/*
 * grunt-smoothie
 * https://github.com/hayesmaker/grunt-smoothie
 *
 * Copyright (c) 2015 @hayes_maker
 * Licensed under the MIT license.
 */

'use strict';
/**
 * Current Flavours:
 * 	- Node / Browserify Custom Type Module + Mocha Spec
 *
 *
 *
 * @param grunt
 */
module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/**/*.js',
				'!tasks/flavours/**/*.js'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		smoothie: {
			example_task: {
				options: {
					src: "temp/src/",
					test: "temp/test/",
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
			},

			node_test_example: {
				options: {
					prompt: false,
					moduleName: "MyTestedClass",
					src: "test/mocha/fixtures/app/",
					test: "test/mocha/fixtures/test/",
					moduleTemplate: './tasks/flavours/node/app/classModule.js',
					specTemplate: './tasks/flavours/node/specs/classModuleSpec.js'

				}
			}
		},

		clean: {
			test: ['test/mocha/fixtures/app/', 'test/mocha/fixtures/test/']
		},

		mochaTest: {
			test: {
				options: {
					reporter: 'spec'
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
	grunt.loadNpmTasks('grunt-mocha-test');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'smoothie:node_test_example', 'mochaTest']);
	grunt.registerTask('test:prompt', ['clean', 'smoothie:node_test_example', 'mochaTest']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['smoothie:example_task']);

};
