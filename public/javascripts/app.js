var app = angular.module("grockr", ['ui.router','angularModalService','ngMaterial'])
app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/landing.html",
      // controller: "homeController"
    })
    .state('dash', {
      url: "/dash",
      templateUrl: "partials/dash.html",
      controller: 'dashThemeController'
    })
    .state('dash.level1', {
      url: "/level1",
      templateUrl: "partials/level1.html",
      // controller: "level1Controller"
    })
    .state('dash.level1.chart', {
      url: "/chart",
      templateUrl: "partials/chart.html",
      controller: 'highchart'
    })
    .state('dash.level1.lesson1', {
      url: "/chart",
      templateUrl: "partials/lesson1.html",
      // controller: 'highchart'
    })
    .state('dash.level2', {
      url: "/level2",
      templateUrl: "partials/level2.html",
      // controller: "level2Controller"

    })
    .state('dash.level3', {
      url: "/level3",
      templateUrl: "partials/level3.html",
      // controller: "level3Controller"

    })
    .state('dash.level4', {
      url: "/level4",
      templateUrl: "partials/level4.html",
      // controller: "level4Controller"
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
        // controller: "accountController",
    })
    .state('dash.orders', {
        url: "/orders",
        templateUrl: "partials/orders.html",
        // controller: "ordersController",
    })
    .state('dash.members', {
        url: "/members",
        templateUrl: "partials/members.html",
        // controller: "ordersController",
    })
    // .state('dash.signup', {
    //     url: "/access",
    //     templateUrl: "partials/signup.html",
    //     controller: "DemoCtrl"
    // })
    .state('dash.calculator', {
        url: "/calculator",
        templateUrl: "partials/calculator.html",
        // controller: "DemoCtrl"
    })
    .state('dash.intro', {
        url: "/intro",
        templateUrl: "partials/intro.html",
        // controller: "DemoCtrl"
    })
    .state('dash.portal', {
        url: "/portal",
        templateUrl: "partials/portal.html",
        // controller: "DemoCtrl"
    })
    .state('dash.portal.login', {
        url: "/login",
        templateUrl: "partials/login.html",
        // controller: "DemoCtrl"
    })
    .state('dash.portal.register', {
        url: "/register",
        templateUrl: "partials/signup.html",
        // controller: "DemoCtrl"
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
