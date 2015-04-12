'use strict';

/**
 * angular-smoothie
 * A reference to angular-smoothie app
 *
 * @type {module}
 */
var app = angular.module('angular-smoothie');


/**
 * Define MyAngularController
 *
 * @namespace angular-smoothie
 * @class MyAngularController
 * @constructor
 */
app.controller('MyAngularController', ['$scope', function ($scope) {
	console.log('MyAngularController');

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