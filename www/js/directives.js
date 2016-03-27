angular.module('vi-pizza.directives', [])

.directive('viQty', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/qty.html',
    link: function(scope, element, attribute) {
        scope.qtyCounter = Array;
        // For some reasons integer didn't work
        // You can try test it in the mock data
        for (var t=0; t<scope.deals.length; t++) {
	        scope.deals[t].qty = scope.deals[t].qty.toString();
	    }
    }
  };
})

.directive('viSummary', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/summary.html',
    link: function(scope, element, attribute) {
    }
  };
})