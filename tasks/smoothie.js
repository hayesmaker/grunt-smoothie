/*
 * grunt-smoothie
 * https://github.com/hayesmaker/grunt-smoothie
 *
 * Copyright (c) 2015 @hayes_maker
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks
	grunt.registerMultiTask('testsmoothie', 'Test delicious smoothie made modules for your javascript projects.', function () {
		//grunt.task.requires('prompt:smoothie');
		var config = require('./helpers/config');
		var change = require('./../node_modules/change-case/change-case.js');
		var c = config(grunt);
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({

		});

		var done = this.async();
		var compile = function() {
			var dest = options.dest;
			if (dest) {
				var template = c.getTemplate(options.moduleType, options.flavour);
				var content = grunt.template.process(template.call(this, options), { data: options });

				grunt.file.write(dest + ".js", content);

				if (options.spec === true) {
					var testTemplate = c.getSpec(options.moduleType, options.flavour);
					var testContent = grunt.template.process(testTemplate.call(this, options), {data: options});
					grunt.file.write(dest + "Spec.js", testContent);
				}

				grunt.log.writeln('smoothie served: "' + dest + '" ... delicious test!');
				done();
			}
		};

		compile();
	});

	grunt.registerMultiTask('smoothie', 'Mix delicious smoothie modules for your javascript projects', function() {
		var inquirer = require("./../node_modules/inquirer/lib/inquirer.js");
		var config = require('./helpers/config');
		var change = require('./../node_modules/change-case/change-case.js');
		var c = config(grunt);

		var options = this.options({
			moduleName: 'Example'
		});

		var done = this.async();
		var compile = function(answers) {
			if (answers.moduleName) {
				options.moduleName = answers.moduleName;
			}
			var dest = options.dir + options.moduleName;
			var template = c.getTemplate(options.moduleType, options.flavour);
			var content = grunt.template.process(template.call(this, options), { data: options });

			grunt.file.write(dest + ".js", content);

			if (options.spec === true) {
				var testTemplate = c.getSpec(options.moduleType, options.flavour);
				var testContent = grunt.template.process(testTemplate.call(this, options), {data: options});
				grunt.file.write(dest + "Spec.js", testContent);
			}

			grunt.log.writeln('smoothie served: "' + dest + '" ... delicious!');
			done();
		};

		var questions = [
			{
				type: 'input',
				name: 'moduleName',
				message: 'Name your node / browserify module',
				default: 'Spaces Allowed',
				filter: function (value) {
					return change.pascalCase(value);
				},
				validate: function (value) {
					if (value.length) {
						return true;
					}
				},
				when: function () {
					return true;
				}
			}
		];

		inquirer.prompt(questions, compile);
	});
};
