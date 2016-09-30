'use strict';

angular.module('myApp.view1', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('view1', {
  	url : '/view1',
    templateUrl: '/views/view1/view1.html',
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
	console.log(' View1Ctrl ');
}]);