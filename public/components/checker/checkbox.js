'use strict';

angular.module('myApp.checker.checkbox', [])

.component('listComponent', {
	bindings: {
        info: '='
    },

    // Inline template which is binded to message variable
    // in the component controller
    template:'<div>Hello {{$ctrl.info}}</div>',

    // The controller that handles our component logic
    // controller: function () {
    //     this.message = "Thomas component"
    // }
})
.component('ourComponent', {
  // Binds the attibute data to the component controller.
  bindings: {
    data: '@'
  },

  // We can now access the data from the data attribute with `$ctrl`
  template:'<p>{{ $ctrl.data }}</p>'
});