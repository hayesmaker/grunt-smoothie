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
 *
 * defines a public variable and calls init - change this constructor to suit your needs.
 * nb. there's no requirement to call an init function
 *
 * @class NodeCustomType
 * @constructor
 */
function NodeCustomType() {
	/**
	 * A public var description
	 *
	 * @property myPublicVar
	 * @type {number}
	 */
	this.myPublicVar = 1;
	this.init();
}

var p = NodeCustomType.prototype;

/**
 * NodeCustomType initialisation
 *
 * @method init
 */
p.init = function() {

};


module.exports = NodeCustomType;