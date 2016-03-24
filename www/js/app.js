// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('vi-pizza', ['ionic', 'vi-pizza.controllers', 'vi-pizza.services', 'vi-pizza.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    ionic.Platform.setPlatform('android');
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('shoppingCart', {
    url: '/shoppingCart',
    views: {
      'shoppingCartContent': {
        templateUrl: 'templates/shoppingCart.html'
      }
    }
  })

  // setup an abstract state for the tabs directive
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'MainCtrl'
  })

  // Each tab has its own nav history stack:

  .state('app.set', {
    url: '/pizzaSet',
    views: {
      'pizzaSetContent': {
        templateUrl: 'templates/deals.html',
        controller: 'PizzaSetCtrl'
      }
    }
  })

  .state('app.pizza', {
    url: '/pizza',
    views: {
      'pizzaContent': {
        templateUrl: 'templates/deals.html',
        controller: 'PizzaCtrl'
      }
    }
  })

  .state('app.mainDish', {
    url: '/mainDish',
    views: {
      'mainDishContent': {
        templateUrl: 'templates/deals.html'
      }
    }
  })

  .state('app.sideDish', {
    url: '/sideDish',
    views: {
      'sideDishContent': {
        templateUrl: 'templates/deals.html'
      }
    }
  })

  .state('app.drinks', {
    url: '/drinks',
    views: {
      'drinksContent': {
        templateUrl: 'templates/deals.html'
      }
    }
  })



  .state('checkout', {
    url: '/checkout',
    views: {
      'tabContent': {
        templateUrl: 'templates/checkout.html'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/pizza');

});
