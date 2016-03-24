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

.factory('Pizza', function($http) {
  return baseFactory('pizza', $http);
})

.factory('PizzaSet', function($http) {
  return baseFactory('pizzaSet', $http);
});

