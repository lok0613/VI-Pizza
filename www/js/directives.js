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

    	/**
    	 * Calculate total amount of deals
    	 */
    	scope.total = function() {
    		var amount = 0;
		    for (var t=0; t<scope.deals.length; t++) {
		      amount += scope.deals[t].qty * scope.deals[t].price;
		    }
		    return amount;
    	}
    }
  };
})

.directive('viRemoveDeal', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/removeDeal.html',
    link: function(scope, element, attribute) {

    	/**
    	 * Remove the deal from $scope.deals
		 * @param Deal deal
		 */
		scope.removeDeal = function(deal) {
			var index = scope.deals.indexOf(deal);
		    scope.deals[index].qty = "0";
		    scope.deals.splice(index, 1);
		};
    }
  };
})

.directive('viLightBox', function($ionicPopup, $parse) {
  return {
    restrict: 'A',
    link: function(scope, element, attribute) {
    	var src = attribute.ngSrc;

    	/**
		 * Popup a lightbox for deal
		 * @todo move to traits or something like that
		 * @param string src
		 */
    	scope.showLightBox = function() {
			var myPopup = $ionicPopup.show({
			    template: '<img style="width: 100%" src="'+src+'"/>',
			    scope: scope,
			    buttons: [
		    		{ text: 'Cancel', type: 'button-positive' }
		    	]
		  	});
		};
    }
  };
})

.directive('viMoreInfo', function($ionicPopup) {
  return {
    restrict: 'E',
    templateUrl: 'directives/moreInfo.html',
    link: function(scope, element, attribute) {

    	/**
    	 * Show more info popup
    	 * @param string info
    	 */
    	scope.showMoreInfo = function(info) {
			var myPopup = $ionicPopup.show({
			    template: info,
			    scope: scope,
			    buttons: [
		    		{ text: 'Cancel', type: 'button-positive' }
		    	]
		  	});
		};
    }
  };
})


