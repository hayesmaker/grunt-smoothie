/**
 * A private var description
 *
 * @property myPrivateVar
 * @type {number}
 * @private
 */
var myPrivateVar = 0;

/**
 * <%= moduleName %> description
 * calls init
 *
 * @class <%= moduleName %>
 * @constructor
 */
var <%= moduleName %> = function() {
	/**
	 * A public var description
	 *
	 * @property myPublicVar
	 * @type {number}
	 */
	this.myPublicVar = 1;
	this.init();
};

var p = <%= moduleName %>.prototype;

/**
 * <%= moduleName %> initialisation
 *
 * @method init
 */
p.init = function() {

};


module.exports = <%= moduleName %>;