/**
 * A private var description
 *
 * @property myPrivateVar
 * @type {number}
 * @private
 */
var myPrivateVar = 0;

/**
 * NodeCustomType description
 * calls init
 *
 * @class NodeCustomType
 * @constructor
 */
var NodeCustomType = function() {
	/**
	 * A public var description
	 *
	 * @property myPublicVar
	 * @type {number}
	 */
	this.myPublicVar = 1;
	this.init();
};

var p = NodeCustomType.prototype;

/**
 * NodeCustomType initialisation
 *
 * @method init
 */
p.init = function() {

};


module.exports = NodeCustomType;