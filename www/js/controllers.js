angular.module('vi-pizza.controllers', [])

.controller('MenuCtrl', function($scope, FoodFactory, $state, $rootScope) {
  /**
   * State the current food type
   * @var string
   */
  $scope.activeFoodType = '';

  /**
   * Retrievel deals for initializing
   * @use $scope.deals
   */
  $scope.getAllDeals = function(foodType) {
    FoodFactory.getAllFood( function (data) {
      $scope.deals = data.deals;
    });
  };

  /**
   * Invoke by click action to retrievel deals
   * @param string show
   * @use $scope.deals
   * @use $scope.activeFoodType
   */
  $scope.show = function(foodType) {
    $scope.activeFoodType = foodType;
  };

  /**
   * Check food type is active
   * @param string foodType
   * @use $scope.activeFoodType
   * @return boolean
   */
  $scope.active = function(foodType) {
    return $scope.activeFoodType == foodType;
  };

  /**
   * Check deal can be visible
   * @param Deal deal
   * @use $scope.activeFoodType
   * @return boolean
   */
  $scope.visible = function(deal) {
    return deal.foodType == $scope.activeFoodType;
  }

  /**
   * Put deals into cart
   * @use $rootScope.cartDeals
   */
  $scope.getCartDeals = function() {
    $rootScope.cartDeals = [];
    for (var t=0; t<$scope.deals.length; t++) {
      if ($scope.deals[t].qty > 0) {
        $rootScope.cartDeals.push($scope.deals[t]);
      }
    }
  };

  /**
   * Goto shopping cart
   * @use $scope.getCartDeals()
   */
  $scope.shoppingCart = function() {
    $scope.getCartDeals();
    $state.go('shoppingCart');
  };

  /**
   * Checkout deals
   * @use $scope.getCartDeals()
   */
  $scope.checkout = function() {
    $scope.getCartDeals();
    $state.go('checkout');
  };

  /**
   * CSS fix
   */
  $scope.fixCss = function() {
    var titles = document.getElementsByClassName('title');
    var height = titles[titles.length-1].offsetHeight;
    document.getElementsByClassName('button-bar')[0].style.top = height + "px";
  };

  /**
   * Default click action
   */
  $scope.getAllDeals();
  $scope.show('pizza');
  $scope.fixCss();
})

.controller('ShoppingCartCtrl', function($scope, $rootScope, $state) {
  $scope.deals = $rootScope.cartDeals;

  $scope.total = function () {
    var amount = 0;
    for (var t=0; t<$scope.deals.length; t++) {
      amount += $scope.deals[t].qty * $scope.deals[t].price;
    }
    return amount;
  };

  /**
   * Checkout deals
   * @use $scope.getCartDeals()
   */
  $scope.checkout = function() {
    $state.go('checkout');
  };

})

.controller('CheckoutCtrl', function($scope, $rootScope, $state, $ionicHistory) {
  $scope.deals = $rootScope.cartDeals;
  $scope.userForm = {};

  /**
   * Forcing all deals have to visible in checkout
   * @param Deal deal
   * @param Boolean
   */
  $scope.visible = function(deal) {
    return true;
  };

  /**
   * Confirm and put data to rootScope
   */
  $scope.confirm = function() {
    $rootScope.userForm = $scope.userForm;
    $state.go('confirm');
  };

})

.controller('ConfirmCtrl', function($scope, $rootScope, $state) {
  $scope.deals = $rootScope.cartDeals;
  $scope.userForm = $rootScope.userForm;

  /**
   * Forcing all deals have to visible in checkout
   * @param Deal deal
   * @param Boolean
   */
  $scope.visible = function(deal) {
    return true;
  };
})

;