'use strict';

/**
 * My <%= appName %> module
 * A reference to <%= appName %> app
 *
 * @type {module}
 */
var app = angular.module('<%= appName %>');


/**
 * Define <%= controllerName %>
 *
 * @namespace <%= appName %>
 * @class <%= controllerName %>
 * @constructor
 */
app.controller('<%= controllerName %>', ['$scope', function ($scope) {
	console.log('<%= controllerName %>');

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