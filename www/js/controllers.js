angular.module('vi-pizza.controllers', [])

.controller('MainCtrl', function($scope, $rootScope, $ionicPopup) {
  // I think it's gonna to declare the root scope


  $scope.lightbox = function(src) {
    var myPopup = $ionicPopup.show({
    template: '<img style="width: 100%" src="'+src+'"/>',
    scope: $scope,
    buttons: [
      { text: 'Cancel', type: 'button-positive' }
    ]
  });
  }
})

.controller('FoodCtrl', function($scope, FoodFactory, $ionicHistory) {
  $scope.qtyCounter = Array;
  $scope.activeFoodType = '';
  $scope.show = function(foodType) {
    $scope.deals = FoodFactory.createFood(foodType).all( function (data) {
      $scope.deals = data.deals;
      $scope.activeFoodType = foodType;
    });
  };
  $scope.active = function(foodType) {
    return $scope.activeFoodType == foodType;
  };
  $scope.show('pizza');
})

.controller('PizzaSetCtrl', function($scope, PizzaSet) {
  $scope.deals = PizzaSet.all( function (data) {
    $scope.deals = data.pizzaSets;
  });
});
