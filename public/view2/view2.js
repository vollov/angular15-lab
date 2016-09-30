'use strict';

angular.module('myApp.view2', ['ui.router', 'myApp.employee'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('view2', {
  	url : '/view2',
    templateUrl: '/views/view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','employeeService', function($scope, employeeService) {
	console.log(' View2Ctrl ');
	$scope.message = "Thomas component";
	//$scope.employees = employeeService.employees;
	$scope.employees = [{
			firstName: 'Rima',
			lastName: 'George',
			location: 'San Francisco'
		}, {
			firstName: 'Shaun',
			lastName: 'John',
			location: 'Germany'
		}, {
			firstName: 'Rahul',
			lastName: 'Kurup',
			location: 'Bangalore'
		}, {
			firstName: 'Samson',
			lastName: 'Davis',
			location: 'Canada'
		}, {
			firstName: 'Shilpa',
			lastName: 'Agarwal',
			location: 'Noida'
		}];
}]);
