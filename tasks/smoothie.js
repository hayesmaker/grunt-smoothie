/*
 * grunt-smoothie
 * https://github.com/hayesmaker/grunt-smoothie
 *
 * Copyright (c) 2015 @hayes_maker
 * Licensed under the MIT license.
 */
'use strict';

var config = require('./helpers/config');

module.exports = function (grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks
	grunt.registerMultiTask('smoothie', 'Mix delicious modules for your javascript projects.', function () {
		var c = config(grunt);
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			name: "party-pokie",
			description: "A reference to Party Pokie app",
			moduleType: 'Controller',
			plugin: 'angular'
		});

		var template = c.getTemplate(options.moduleType);
		var content = grunt.template.process(template.call(this, options), { data: options });

		grunt.file.write(options.dest, content);
		grunt.log.writeln('smoothie served: "' + options.dest + '" ... delicious!');
	});

};
