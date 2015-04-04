/**
 * Created by @hayes_maker on 02/04/2015.
 */
var smoothiedocs = require('./smoothiedocs');
var appTemplates = require('./appTemplates');

var ControllerTemplates = {
	/**
	 * Constructs an angular module getter template string
	 * with optional yuidocs
	 *
	 * options.name
	 * options.description
	 *
	 * @method classic
	 * @param options see description
	 * @returns {string} The template string
	 * @todo get from new module
	 */
	classic: function(options) {
		var contents = "";
		if (options.yuidocs) contents += smoothiedocs.moduleMetaComment(options);
		contents += appTemplates.moduleGetter(options);
		return contents;
	}

};

module.exports = ControllerTemplates;
