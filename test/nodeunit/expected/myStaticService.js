'use strict';

/**
 * My angular-smoothie module
 * A reference to angular-smoothie app
 *
 * @type {module}
 */
var app = angular.module('angular-smoothie');

/**
 * A singleton model service example
 *
 * @namespace angular-smoothie
 * @class angularServiceSingleton
 * @static
 */
app.service('angularServiceSingleton', [function() {

	/**
	 * A simple data object - replace with your own data
	 *
	 * @property data
	 * @type {{name: string, type: string, description: string, cost: number, thumbnail: string, background: string}}
	 */
	this.data = {
		name: 				"theme1",
		type: 				"budget",
		description: 		"a budget theme1",
		cost: 				100,
		thumbnail: 			"image1.png",
		background: 		"background_1.png"
	};
}]);