'use strict';

angular.module('myApp.grid', [])
.component('myComp', {
    scope: {
        info: '<'
    },
    templateUrl : '/grid.html'
});
