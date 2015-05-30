/**
 * My <%= appName %> module
 * A reference to <%= appName %> app
 *
 * @type {module}
 */
var app = angular.module('<%= appName %>');

/**
 * A singleton service factory style example
 *
 * @namespace <%= appName %>
 * @class <%= moduleName %>
 * @static
 */
app.factory('<%= moduleName %>', [function() {

	return {
		/**
		 * Factory Service says hai world
		 *
		 * @method sayHello
		 * @param text
		 * @returns {string}
		 */
		sayHello: function(text) {
			return "Factory says \"Hello " + text + "\"";
		}
	}

}]);