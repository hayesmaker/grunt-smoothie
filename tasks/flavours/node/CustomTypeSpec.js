var expect = require('chai').expect,
	sinon = require('sinon'),
	<%= moduleName %> = require('<%= moduleSrc %><%= moduleName %>');

describe("<%= moduleName %> tests", function() {

	var my<%= moduleName %>, initSpy;

	before(function() {

	});

	beforeEach(function() {

		initSpy = sinon.spy(<%= moduleName %>.prototype, 'init');
		myClass = new <%= moduleName %>();
	});

	afterEach(function() {
		<%= moduleName %>.prototype.init.restore();
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