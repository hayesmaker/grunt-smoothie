/**
 * Created by @hayes_maker on 02/04/2015.
 */
var smoothiedocs = require('../docs/smoothiedocs');

var ControllerTemplates = {
	/**
	 * options.name
	 * options.description
	 *
	 * @method classic
	 * @param options
	 * @returns {string}
	 */
	classic: function(options) {
		var contents = "";
		if (options.yuidocs) contents += smoothiedocs.moduleMetaComment(options);
		contents += "var app = angular.module('<%= name %>');\n\n";
		return contents;
	}
};

module.exports = ControllerTemplates;
