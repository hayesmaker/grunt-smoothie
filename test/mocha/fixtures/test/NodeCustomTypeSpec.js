var expect = require('chai').expect,
	sinon = require('sinon'),
	NodeCustomType = require('../../../../test/mocha/fixtures/src/NodeCustomType');

describe("NodeCustomType tests", function() {

	var myNodeCustomType, initSpy;

	before(function() {

	});

	beforeEach(function() {

		initSpy = sinon.spy(NodeCustomType.prototype, 'init');
		logSpy = sinon.spy(console, 'log');

		myClass = new NodeCustomType();
	});

	afterEach(function() {
		NodeCustomType.prototype.init.restore();
	});

	after(function() {

	});

	describe("constructor: (*EXAMPLE* please replace with your own tests)", function() {

		it("myPublicVar is set correctly", function() {
			expect(myClass.myPublicVar).to.equal(1);
		});

		it("init is called", function() {
			expect(initSpy.called).to.equal(true);
		});

	});
});