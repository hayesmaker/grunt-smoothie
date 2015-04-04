'use strict';

/**
 * My <%= appName %> module
 * A reference to <%= appName %> app
 *
 * @type {module}
 */
var app = angular.module('<%= appName %>');

/**
 * A singleton model service example
 *
 * @namespace <%= appName %>
 * @class <%= moduleName %>
 * @static
 */
app.service('<%= moduleName %>', [function() {

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