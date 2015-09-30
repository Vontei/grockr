var app = angular.module("grockr", ['ui.router','angularModalService'])
app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/splash.html"
    })
    .state('about', {
      url: "/about",
      templateUrl: "partials/about.html"
    })

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
