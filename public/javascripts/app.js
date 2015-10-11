var app = angular.module("grockr", ['ui.router','angularModalService'])
app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/landing.html",
      // controller: "homeController"
    })
    .state('home.dash', {
      url: "/dash",
      templateUrl: "partials/dash.html",
      // controller: 'dashController'
    })
    .state('home.dash.level1', {
      url: "/level1",
      templateUrl: "partials/level1.html",
      // controller: "level1Controller"

    })
    .state('home.dash.level2', {
      url: "/level2",
      templateUrl: "partials/level2.html",
      // controller: "level2Controller"

    })
    .state('home.dash.level3', {
      url: "/level3",
      templateUrl: "partials/level3.html",
      // controller: "level3Controller"

    })
    .state('home.dash.level4', {
      url: "/level4",
      templateUrl: "partials/level4.html",
      // controller: "level4Controller"
    })
    .state('splash', {
        url: "/splash",
        templateUrl: "partials/splash.html",
        // controller: "splashController",
    })
    .state('home.dash.profile', {
        url: "/profile",
        templateUrl: "partials/profile.html",
        // controller: "profileController",
    })
    .state('home.dash.account', {
        url: "/account",
        templateUrl: "partials/profile.html",
        // controller: "accountController",
    })
    .state('home.dash.orders', {
        url: "/orders",
        templateUrl: "partials/orders.html",
        // controller: "ordersController",
    })
    .state('home.dash.members', {
        url: "/members",
        templateUrl: "partials/members.html",
        // controller: "ordersController",
    })
  // $urlRouterProvider.otherwise("home");

});

// app.run(function ($rootScope, $state, AuthService) {
//   $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
//     if (toState.authenticate && !AuthService.isAuthenticated()) {
//       $state.transitionTo("not-authenticated");
//       event.preventDefault();
//     }
//
//   })
// })
