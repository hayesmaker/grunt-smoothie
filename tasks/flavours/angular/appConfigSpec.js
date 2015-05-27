var angular = require('angular');
var expect = require('chai').expect;


describe("<%= appName %> Tests", function() {
	var $scope, $router, app;

	beforeEach(module('<%= appName %>'));

	beforeEach(inject(function($route) {
		$router = $route;
	}));

	it("application module is created", function() {
		app = module('<%= appName %>');
		expect(app).to.exist;
	});

	it("router should exist", function() {
		expect($router).to.exist;
	});

});