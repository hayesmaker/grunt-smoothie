/**
 * Created by @hayes_maker on 02/04/2015.
 */
'use strict';

var _ = require('lodash');


/**
 * @supports yuidocs
 * @type <%moduleMetaComment: Function, controllerMetaComment: Function, methodMetaComment: Function%>
 */
var docHelpers = {

	/**
	 * options.name
	 * options.description
	 *
	 * @method moduleMetaComment
	 * @param options
	 */
	moduleMetaComment: function(options) {
		var contents = "/**\n";
		contents +=	" * My <%= name %> module\n";
		contents += " * <%= description %>\n";
		contents +=	" *\n";
		contents += " * @type {module}\n";
		contents += " */\n";
		return contents;
	},

	/**
	 * options.name
	 * options.description
	 * options.namespace
	 *
	 * @method controllerMetaComment
	 * @param options
	 */
	controllerMetaComment: function(options) {
		var contents = "/**\n";
		contents += "* <%= description %>";
		contents += "*\n";
		contents += "* @namespace <%= namespace %>\n";
		contents += "* @class <%= name %>\n";
		contents += "* @constructor\n";
		contents += "*/\n";
		return contents;
	},

	/**
	 * options.description
	 * options.name
	 * options.params
	 *
	 * @method methodMetaComment
	 * @param options
	 */
	methodMetaComment: function(options) {
		var contents = "/**\n";
		contents += "* <% description %>";
		contents += "*\n";
		contents += "* @method <% name %>\n";
		_.each(options.params, function(param) {
			contents+="* @param " + param;
		});
		contents += "*/\n";
		return contents;
	}




};

module.exports = docHelpers;
