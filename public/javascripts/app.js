var app = angular.module("grockr", ['ui.router','angularModalService','ngMaterial','ngStorage','ngCookies'])
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/landing.html",
      controller: "storageController"
    })
    .state('dash', {
      url: "/dash",
      templateUrl: "partials/dash.html",
      controller: 'dashController',
    })
    .state('dash.level1', {
      url: "/level1",
      templateUrl: "partials/level1.html",
      // controller: "stockController"
    })
    .state('dash.level1.lesson1', {
      url: "/lesson1",
      templateUrl: "partials/lesson1.html"
    })
    .state('dash.level1.stock1', {
      url: "/stock1",
      templateUrl: "partials/stock1.html",
      controller: "stockController"

    })
    .state('dash.level1.chart', {
      url: "/chart",
      templateUrl: "partials/chart.html",
      controller: 'highchart'
    })
    .state('dash.level2', {
      url: "/level2",
      templateUrl: "partials/level2.html",
    })
    .state('dash.level2.lesson2', {
      url: "/lesson2",
      templateUrl: "partials/lesson2.html",
    })
    .state('dash.level2.chart2', {
      url: "/chart2",
      templateUrl: "partials/chart2.html",
      controller: "highchart2"

    })
    .state('dash.level2.stock2', {
      url: "/stock2",
      templateUrl: "partials/stock2.html",
      controller: 'stock2Controller'
    })
    .state('splash', {
        url: "/splash",
        templateUrl: "partials/splash.html",
        // controller: "splashController",
    })
    .state('dash.profile', {
        url: "/profile",
        templateUrl: "partials/profile.html",
        // controller: "profileController",
    })
    .state('dash.account', {
        url: "/account",
        templateUrl: "partials/profile.html",
    })
    .state('dash.orders', {
        url: "/orders",
        templateUrl: "partials/orders.html",
        controller: 'ordersController'
    })
    .state('dash.members', {
        url: "/members",
        templateUrl: "partials/members.html",
    })
    .state('dash.calculator', {
        url: "/calculator",
        templateUrl: "partials/calculator.html",
        controller: 'whatIfController',
    })
    .state('dash.intro', {
        url: "dash/intro",
        templateUrl: "partials/intro.html",
    })
    .state('dash.portal', {
        url: "/portal",
        templateUrl: "partials/portal.html",
        controller: "logOutController"
    })
    .state('dash.library', {
        url: "/library",
        templateUrl: "partials/library.html",
        controller: "LibraryDefinitions"
    })
    .state('dash.portal.login', {
        url: "/login",
        templateUrl: "partials/login.html",
        controller: "loginController"
    })
    .state('dash.portal.register', {
        url: "/register",
        templateUrl: "partials/signup.html",
        controller: "newAccount"
    })
    .state('dash.portal.logout', {
        url: "/logout",
        templateUrl: "partials/logout.html",
    })


  // $urlRouterProvider.otherwise("home");
    // $locationProvider.html5Mode(true);

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
