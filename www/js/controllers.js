angular.module('vi-pizza.controllers', [])

.controller('MenuCtrl', function($scope, FoodFactory, $ionicPopup, $state) {
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
   * Popup a lightbox for deal
   * @todo move to traits or something like that
   * @param string src
   */
  $scope.lightbox = function(src) {
    var myPopup = $ionicPopup.show({
      template: '<img style="width: 100%" src="'+src+'"/>',
      scope: $scope,
      buttons: [
        { text: 'Cancel', type: 'button-positive' }
      ]
    });
  };

  /**
   * Goto shopping cart
   */
  $scope.shoppingCart = function() {
    var chosenDeals = [];
    // mock deals
  //   chosenDeals = [{
  //       "id": 0,
  //       "name": "百事可樂 -罐裝",
  //       "image": "https://order1.pizzahut.com.hk/menu/v000001/hk/tc/images/B3761.png",
  //       "price": 8
  //   },
  //   {
  //       "id": 1,
  //       "name": "七喜 -罐裝",
  //       "image": "https://order1.pizzahut.com.hk/menu/v000001/hk/tc/images/B3763.png",
  //       "price": 8
  //   }
  // ];
    // for ($scope.deals.)
    $state.go('shoppingCart', chosenDeals);
  };

  /**
   * Checkout deals
   */
  $scope.checkout = function() {
    $state.go('checkout');
  };

  /**
   * CSS fix
   */
  $scope.fixCss = function() {
    var titles = document.getElementsByClassName('title');
    var height = titles[titles.length-1].offsetHeight;
    document.getElementsByClassName('button-bar')[0].style.top = height + "px";
    console.log(height)
  };

  /**
   * Default click action
   */
  $scope.getAllDeals();
  $scope.show('pizza');
  $scope.fixCss();
})

.controller('ShoppingCartCtrl', function($scope) {
  console.log('s')
})

;