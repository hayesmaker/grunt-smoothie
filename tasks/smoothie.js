/*
 * grunt-smoothie
 * https://github.com/hayesmaker/grunt-smoothie
 *
 * Copyright (c) 2015 @hayes_maker
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	grunt.registerMultiTask('smoothie', 'Mix delicious smoothie modules for your javascript projects', function() {
		var inquirer = require("inquirer");
		var change = require('change-case');
		var options = this.options({
			prompt: true,
			src: 'app/src',
			test: 'app/test',
			moduleName: "PleaseDefineMe",
			package: '',
			packageMap: []
		});
		
		//options.packageMap = options.packageMap || [];

		var done = this.async();

		var compile = function(answers) {

			if (answers && answers.moduleName) {
				options.moduleName = answers.moduleName;
				options.package = answers.package;
			}

			var moduleSrc = "";
			var prefixLen = options.src.split('/').length;
			for (var i = 0; i < prefixLen - 1; i++) {
				moduleSrc+="../";
			}


			if (options.package.length) {
				moduleSrc+="../";
			}
			options.moduleSrc = moduleSrc + options.src + options.package;
			
			var srcDest = options.src + options.package + options.moduleName;
			var testDest = options.test + options.package + options.moduleName;

			grunt.log.writeln('mixing smoothie flavour: ' + options.moduleTemplate);

			var template = grunt.file.read(options.moduleTemplate);
			var content = grunt.template.process(template, { data: options });
			grunt.file.write(srcDest + ".js", content);
			grunt.log.writeln('Smoothie');
			grunt.log.writeln('served: ' + srcDest + '.js');

			if (options.specTemplate) {
				var testTemplate = grunt.file.read(options.specTemplate);
				var testContent = grunt.template.process(testTemplate, {data: options});
				grunt.file.write(testDest + "Spec.js", testContent);
				grunt.log.writeln('served:' + testDest + "Spec.js");
			}

			grunt.log.writeln('Delicious!');
			done();
		};

		var questions = [
			{
				type: 'input',
				name: 'moduleName',
				message: 'Name your module',
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
			},
			{
				type: 'list',
				name: 'package',
				message: 'Choose package',
				choices: options.packageMap.map(function(item) {
					if(typeof item === 'string') {
						item = {
							name: change.ucFirst(item),
							value: change.lower(item) + '/'
						}
					}
					return item;
				}),
				default: '',
				when: function() {
					options.package = '';
					return options.packageMap && options.packageMap.length > 0;
				}
			}
		];

		if (options.prompt) {
			inquirer.prompt(questions, compile);
		} else {
			compile();
		}


	});
};
