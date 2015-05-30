/**
 * Instantiates a new Angular application
 *
 * @namespace <%= appName %>
 * @type {angular.IModule}
 */
var app = angular.module('<%= appName %>', []);

/**
 * Configures a simple angular router
 *
 * @class configuration
 * @static
 */
app.config(['$routeProvider', function($routeProvider) {

	$routeProvider
		.when('/exampleRoute1', { })
		.otherwise({ redirectTo: '/' });

}]);

/**
 * Additional Bootstrapping
 * Hard to test code can be isolated here and ignored in the tests.
 *
 * @class run
 * @static
 */
app.run(['', function() {

	//Additional bootstrapping
	//Ignore in unit tests
	//Can inject instances (not providers)

}]);