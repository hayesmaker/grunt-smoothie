/**
 * Created by @hayes_maker on 02/04/2015.
 */
var smoothiedocs = require('./smoothiedocs');

var ControllerTemplates = {
	/**
	 * Constructs an angular module getter template string
	 * with optional yuidocs
	 *
	 * options.name
	 * options.description
	 *
	 * @method moduleGetter
	 * @param options see description
	 * @returns {string} The template string
	 * @todo get from new module
	 */
	moduleGetter: function(options) {
		var contents = "";
		contents += "var app = angular.module('<%= name %>');\n\n";
		return contents;
	}
};

module.exports = ControllerTemplates;
