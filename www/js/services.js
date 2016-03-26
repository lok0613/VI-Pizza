var baseFactory = function(model, $http) {
  var getJson = function(callback) {
    $http.get('data/'+model+'.json').success(callback);
  };
  return {
    all: function (callback) {
      return getJson(callback);
    }
  };
};

angular.module('vi-pizza.services', [])

.factory('FoodFactory', function($http) {
  var createFood = function(foodType) {
    return baseFactory(foodType, $http);
  }
  return {
    createFood: createFood
  };
});

