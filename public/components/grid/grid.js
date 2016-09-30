'use strict';

angular.module('myApp.grid', [])
.component('myComp', {
    bindings: {
        info: '='
    },
    templateUrl : '/components/grid/grid.html'
});
