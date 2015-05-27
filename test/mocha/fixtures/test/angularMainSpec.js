var angular = require('angular');
var expect = require('chai').expect;


describe("angular-smoothie Tests", function() {
	var $scope, $router, app;

	beforeEach(module('angular-smoothie'));

	beforeEach(inject(function($route) {
		$router = $route;
	}));

	it("application module is created", function() {
		app = module('angular-smoothie');
		expect(app).to.exist;
	});

	it("router should exist", function() {
		expect($router).to.exist;
	});

});