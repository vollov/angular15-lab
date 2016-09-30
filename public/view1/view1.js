'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {
		templateUrl: 'view1/view1.html',
		controller: 'View1Ctrl',
		resolve: {
			//requireLogin: 'true',
			rolePromise: [function(){
				console.log('calling resolve from view1');
				return true;
			}]
		}
	});
}])

.controller('View1Ctrl', [function() {

}]);