var baseFactory = function(model, $http) {
  var getJson = function(callback) {
    $http.get('data/'+model+'.json').success( function(data) {
      // Data massage
      for (var t=0; t<data.deals.length; t++) {
        if (typeof data.deals[t].qty === 'undefined') {
          data.deals[t].qty = 0;
        }
        data.deals[t].foodType = model;
      }
      return callback(data);
    });
  };
  return {
    all: function (callback) {
      return getJson(callback);
    }
  };
};

angular.module('vi-pizza.services', [])

.factory('FoodFactory', function($http) {
  /**
   * FoodFactory create method
   * @deprecated
   * @param string foodType
   */
  var createFood = function(foodType) {
    return baseFactory(foodType, $http);
  }

  /**
   * Get all food, V2 main method of the Factory
   */
  var getAllFood = function(callback) {
    /**
     * Food type list
     * @todo prevent hardcoding
     * @var array
     */
    var foodTypes = ['pizza', 'pizzaSet', 'mainDish',  'sideDish', 'drinks'];

    var foodTypeIndex = 0;
    var validateIndex = 0;
    var deals = [];

    /**
     * Since we have no sync method for $http.get(), I have to use this hack for getting all deals
     * It will send a callback that notify it is finish
     * This function used to collect the deals by each iteration
     * @param Deals[] data
     */
    var iterationCallback = function (data) {
      deals = deals.concat(data.deals);
      if (++validateIndex == foodTypes.length) {
        callback({"deals": deals});
      }
      return false;
    }
    
    for (foodType in foodTypes) {
      baseFactory(foodTypes[foodTypeIndex++], $http).all(iterationCallback);    
    }
    return false;
  }
  return {
    createFood: createFood,
    getAllFood: function(callback) {
      return getAllFood(callback);
    }
  };
});

