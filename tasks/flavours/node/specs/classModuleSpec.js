var expect = require('chai').expect,
	sinon = require('sinon'),
	<%= moduleName %> = require('./<%= moduleName %>');

describe("<%= moduleName %> tests", function() {

	var myClass, initSpy, logSpy;

	before(function() {

	});

	beforeEach(function() {

		initSpy = sinon.spy(<%= moduleName %>.prototype, 'init');
		logSpy = sinon.spy(console, 'log');

		myClass = new <%= moduleName %>();
	});

	afterEach(function() {

		<%= moduleName %>.prototype.init.restore();
		console.log.restore();

	});

	after(function() {

	});

	describe("constructor: (*please replace with your own tests*)", function() {

		it("myPublicVar is set correctly", function() {
			expect(myClass.myPublicVar).to.equal(1);
		});

		it("init is called", function() {
			expect(initSpy.called).to.equal(true);
		});

	});

	describe("init: (*please replace with your own tests*)", function() {

		it("console.log is called on init", function() {
			expect(logSpy.called).to.equal(true);
		});

	});
});