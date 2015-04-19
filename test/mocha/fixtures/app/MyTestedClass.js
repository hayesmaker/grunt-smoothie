/**
 * A private var description
 *
 * @property myPrivateVar
 * @type {number}
 * @private
 */
var myPrivateVar = 0;

/**
 * MyTestedClass description
 * calls init
 *
 * @class MyTestedClass
 * @constructor
 */
var MyTestedClass = function() {
	/**
	 * A public var description
	 *
	 * @property myPublicVar
	 * @type {number}
	 */
	this.myPublicVar = 1;
	this.init();
};

var p = MyTestedClass.prototype;

/**
 * MyTestedClass initialisation
 *
 * @method init
 */
p.init = function() {

};


module.exports = MyTestedClass;