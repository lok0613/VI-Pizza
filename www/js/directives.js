angular.module('vi-pizza.directives', [])

.directive('deal', function() {
  return {
    restrict: 'E',
    template: 'deal.html',
    link: function(scope, element, attribute) {
        console.log(scope);
    }
  };
})