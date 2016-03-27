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

  .state('food', {
    url: '/menu',
    views: {
      'viewContent': {
        templateUrl: 'templates/deals.html',
        controller: 'MenuCtrl'
      }
    }
  })

  .state('shoppingCart', {
    url: '/shoppingCart',
    views: {
      'viewContent': {
        templateUrl: 'templates/shoppingCart.html',
        controller: 'ShoppingCartCtrl'
      }
    }
  })

  .state('checkout', {
    url: '/checkout',
    views: {
      'viewContent': {
        templateUrl: 'templates/checkout.html',
        controller: 'CheckoutCtrl'
      }
    }
  })

  .state('confirm', {
    url: '/confirm',
    views: {
      'viewContent': {
        templateUrl: 'templates/confirm.html',
        controller: 'ConfirmCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/menu');

});
