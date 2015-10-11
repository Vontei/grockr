var app = angular.module("grockr", ['ui.router','angularModalService'])
app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('splash', {
      url: "/splash",
      templateUrl: "partials/splash.html",
      controller: "xhrController",
    })
    .state('dash', {
      url: "/dash",
      templateUrl: "partials/dash.html",
      controller: 'yahooController'
    })
    .state('landing', {
      url: "/",
      templateUrl: "partials/landing.html",
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
