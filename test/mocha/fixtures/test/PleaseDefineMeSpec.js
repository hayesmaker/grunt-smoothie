var expect = require('chai').expect,
	sinon = require('sinon'),
	PleaseDefineMe = require('../../../../test/mocha/fixtures/app/PleaseDefineMe');

describe("PleaseDefineMe tests", function() {

	var myClass, initSpy, logSpy;

	before(function() {

	});

	beforeEach(function() {

		initSpy = sinon.spy(PleaseDefineMe.prototype, 'init');
		logSpy = sinon.spy(console, 'log');

		myClass = new PleaseDefineMe();
	});

	afterEach(function() {

		PleaseDefineMe.prototype.init.restore();
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