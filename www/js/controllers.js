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

.controller('PizzaCtrl', function($scope, Pizza) {
  $scope.counter = Array;
  $scope.deals = Pizza.all( function (data) {
    $scope.deals = data.pizzas;
  });
})

.controller('PizzaSetCtrl', function($scope, PizzaSet) {
  $scope.deals = PizzaSet.all( function (data) {
    $scope.deals = data.pizzaSets;
  });
});
