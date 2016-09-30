'use strict';

angular.module('myApp.grid', [])
.component('myComp', {
    scope: {
        info: '=info'
    },
    templateUrl : '/grid.html'
});
