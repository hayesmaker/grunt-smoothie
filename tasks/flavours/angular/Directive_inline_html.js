/**
 * <%= appName %>
 * A reference to <%= appName %> app
 *
 * @type {module}
 */
var app = angular.module('<%= appName %>');

/**
 * Defines <%= moduleName %> Directive
 *
 * Modify these defaults to suit your needs, be aware that giving directive unrestricted to outside scope is possible, but not recommended
 * Add Pre-render dom manipulations to compile function but it's important for performance to keep this as light as possible.
 *
 * -restrict: A: Attribute | Optionally restrict for E: Element, C: Class, M: Just don't do this it's horrible
 * -require: ngModel
 * -scope: Isolate Scope (recommended)
 * -template: Inline HTML | Use templateUrl: "path/template.html" if you don't like in-lining HTML
 * -controller: Expose an API for the Directive
 * -compile: Dom manipulation pre-render (potentially expensive operation)
 * -link: Inject scope or services here, code run when directive is linked to DOM
 *
 * @namespace <%= appName %>
 * @class <%= moduleName %>
 * @constructor
 * @usage Instantiate this directive in HTML using <div <%= moduleName %> ng-model="World"></div>
 * @returns {Object} The Directive
 * @static
 */
app.directive('<%= moduleName %>', function() {
	/**
	 *
	 */
	return {
		restrict: 'A',
		require: '^ngModel',
		scope: {},
		template: '<div><h4>{{greeting}} {{ngModel}}</h4></div>',
		controller: ['$scope', function($scope) {
			//No Dom manipulations here
			$scope.createGreeting = function(sillyString) {
				$scope.greeting = "Hola " + sillyString;
			}
		}],
		compile: function() {
			//prerender stuff, keep this light for performance.
			//put methods which need to
		},
		link: function(scope, iElement, iAttrs) {
			//link to DOM
			//Register listeners on Dom elements
			scope.createGreeting("Pizza");
		}
	}
});



