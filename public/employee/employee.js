'use strict';

angular.module('myApp.employee', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('employees', {
  	url : '/employees',
		templateUrl: '/views/employee/list.html',
		controller: 'employeeCtrl',
		resolve: {
			//requireLogin: 'true',
			rolePromise: [function(){
				console.log('calling resolve from employee');
				return true;
			}]
		}
	});
}])
.factory('employeeService', EmployeeService)
.controller('employeeCtrl', EmployeeCtrl);

EmployeeCtrl.$inject = ['$scope','employeeService'];

// define controller
function EmployeeCtrl($scope,employeeService){
	var vm = this;
	$scope.employees = employeeService.employees;
}

// define service
function EmployeeService(){
	var service = {
		name : 'employee',
		employees : [{
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
		}]
	};
	return service;
}