app.controller('yahooController', ['$scope','$http',
  function($scope, $http){
  $scope.getYahoo = function(){
    console.log('GET is WORKING')
    $http.get('/yahoo').then(function (data) {
      console.log('Your response' , data)
    })
  }
}]);


app.controller('xhrController', ['$scope','$http',
  function($scope, $http){
    $scope.java= function(){
      console.log('JAVA CALL');
      $http.get('http://localhost:8080/greeting?name='+$scope.name).then(function (data) {
        $scope.javaResponse = data.data.content;
      })
      $http.get("http://localhost:8080/account/people").then(function(results){
        var people = results.data
        people.forEach(function (x) {
          var y = x.split(',');
          var z = y[1].split(',');
          var w = z[0].split('=');
          console.log(w[1]);
        })
      })
      $http.get('http://localhost:8080/account/'+$scope.num1 +'/'+ $scope.num2).then(function (data) {
        console.log(data)
        $scope.stockPrice = data.data[0];
        $scope.resultNum = data.data[1];
      })
  }
  $scope.submitForm = function(){
    var data = {
     name: $scope.trial
    }
    $http.post('http://localhost:8080/account/trial', data).then(function (data) {
      console.log(data)
      console.log(JSON.parse(data.data[0]));
    })
  }
}
])


app.controller('newAccount', ["$scope", "$http",
  function($scope, $http){
    $scope.createAccount = function(credentials){
      $http.post('http://localhost:8080/account/new', credentials).then(function (data) {
        console.log(data);
      })
    }
  }


])

//
// app.controller('filmController', ["$scope",'$http','$routeParams',
//   function($scope, $http, $routeParams){
//   console.log('im here')
//   $http.get('http://www.omdbapi.com/?i=' + $routeParams.id).then(function (data) {
//     console.log(data)
//     $scope.movieResults = data.data
//   })
// }])
