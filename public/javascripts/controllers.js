app.controller('yahooController', ['$scope','$http',
  function($scope, $http){
  $scope.getYahoo = function(){
    console.log('GET is WORKING')
    $http.get('/yahoo').then(function (data) {
      console.log('Your response' , data)
    })
  }
}]);



app.controller('movieController', ["$scope","$http",
  function ($scope, $http) {
    $scope.message = "Welcome!"
    $scope.getMovie = function(){
      $http.get('http://www.omdbapi.com/?s='+ $scope.search).then(function (data) {
        console.log(data)
        $scope.results = data.data.Search
        $scope.search = ''
      })
    }
}])


app.controller('filmController', ["$scope",'$http','$routeParams',
  function($scope, $http, $routeParams){
  console.log('im here')
  $http.get('http://www.omdbapi.com/?i=' + $routeParams.id).then(function (data) {
    console.log(data)
    $scope.movieResults = data.data
  })
}])
