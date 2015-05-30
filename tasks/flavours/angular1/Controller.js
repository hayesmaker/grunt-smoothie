/**
 * <%= appName %>
 * A reference to <%= appName %> app
 *
 * @type {module}
 */
var app = angular.module('<%= appName %>');

/**
 * Define <%= moduleName %> Controller
 *
 * @namespace <%= appName %>
 * @class <%= moduleName %>
 * @constructor
 */
app.controller('<%= moduleName %>', ['$scope', function ($scope) {
	console.log('<%= moduleName %>');

	/**
	 * Hai world
	 *
	 * @property greeting
	 * @type {string}
	 */
	$scope.greeting = 'Hola!';

	/**
	 * It's a start right?
	 *
	 * @method myFirstFunction
	 */
	$scope.myFirstFunction = function() {
		// did you want me to write your entire application
		// or what?
	};
}]);