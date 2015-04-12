'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.smoothie = {
	setUp: function (done) {
		// setup here if necessary
		done();
	},
	my_default_angular_controller: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/myDefaultController.js');
		var expected = grunt.file.read('test/nodeunit/expected/myDefaultController.js');
		test.equal(actual, expected, 'Should create a basic angular controller based on vanilla controller template');

		test.done();
	},
	my_static_angular_service: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/myStaticService.js');
		var expected = grunt.file.read('test/nodeunit/expected/myStaticService.js');
		test.equal(actual, expected, 'Should create a basic data model, inside an angular service based on static service template');

		test.done();
	},
	my_node_class: function(test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/MyNodeClass.js');
		var expected = grunt.file.read('test/nodeunit/expected/node/app/classModule.js');

		test.equal(actual, expected, 'Should create a Class node module');

		test.done();
	}

};
