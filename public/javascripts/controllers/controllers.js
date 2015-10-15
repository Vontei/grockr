app.controller('yahooController', ['$scope','$http',
  function($scope, $http){
  $scope.getYahoo = function(){
    console.log('GET is WORKING')
    $http.get('/yahoo').then(function (data) {
      console.log('Your response' , data)
    })
  }
}]);


app.controller('cookieController', [
  function($scope, $cookies){
    var favoriteCookie = $cookies.get('myFavorite');
 // Setting a cookie
    $cookies.put('myFavorite', 'oatmeal');
  }
])


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


app.controller('newAccount', ["$scope", "$http","$location",
  function($scope, $http, $location){
    $scope.createAccount = function(credentials){
      $http.post('http://localhost:8080/account/new', credentials).then(function (data) {
        console.log(data.data[0]);
        $location.path('/dash')
      })
    }
  }
])

app.controller('loginController', ["$scope", "$http",'$location',
  function($scope, $http, $location){
    $scope.login= function (credentials) {
      $http.post('http://localhost:8080/account/login', credentials).then(function (data) {
        console.log(data)
        $location.path('/dash')
      })
    }
  }

])




//
// app.controller('DemoCtrl', function($scope) {
//     $scope.user = {
//       userName: 'John Doe',
//       password: 'fun@email.com',
//       passwordConf: '999-999-9999',
//     };
// });
//



//
// (function() {
//   app.controller('DemoCtrl2', function() {
//       this.topDirections = ['left', 'up'];
//       this.bottomDirections = ['down', 'right'];
//       this.isOpen = false;
//       this.availableModes = ['md-fling', 'md-scale'];
//       this.selectedMode = 'md-fling';
//       this.availableDirections = ['up', 'down', 'left', 'right'];
//       this.selectedDirection = 'down';
//     });
// })();



app.controller("highchart", function ($scope) {
  $scope.chart = $(function () {
      $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {
          $('#CHART2container').highcharts('StockChart', {
              rangeSelector : {
                  selected : 1
              },
              title : {
                  text : 'APPLE Stock Price'
              },
              series : [{
                  name : 'GOOG Stock Price',
                  data : data,
                  type : 'areaspline',
                  threshold : null,
                  tooltip : {
                      valueDecimals : 2
                  },
                  fillColor : {
                      linearGradient : {
                          x1: 0,
                          y1: 0,
                          x2: 0,
                          y2: 1
                      },
                      stops : [
                          [0, Highcharts.getOptions().colors[0]],
                          [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                      ]
                  }
              }]
          });
      });
  });

})
app.controller("highchart2", function ($scope) {
  $scope.chart2 = $(function () {
      $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=goog-c.json&callback=?', function (data) {
          $('#CHART2container').highcharts('StockChart', {
              rangeSelector : {
                  selected : 1
              },
              title : {
                  text : 'GOOGLE Stock Price'
              },
              series : [{
                  name : 'AAPL Stock Price',
                  data : data,
                  type : 'areaspline',
                  threshold : null,
                  tooltip : {
                      valueDecimals : 2
                  },
                  fillColor : {
                      linearGradient : {
                          x1: 0,
                          y1: 0,
                          x2: 0,
                          y2: 1
                      },
                      stops : [
                          [0, Highcharts.getOptions().colors[0]],
                          [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                      ]
                  }
              }]
          });
      });
  });

})



app.controller('calculatorController', ["$scope",
  function($scope){
    var qty = $scope.quantity;
    var stock = $scope.stock;
    var start = $scope.priceStart;
    var end = $scope.priceEnd;
    var brokerFee = $scope.fee * 2;
    if(start>end){
      $scope.winloss = 'lost';
      $scope.color = 'red';
      $scope.results = "Congratulations, you have traded " + stock + " and made " + ((qty*start)-(qty*end))-brokerFee;
    } else {
      $scope.winloss = 'made';
      $scope.color = 'green';
      $scope.results = "Your " + stock + " trade has cost you " + (($scope.qty*$scope.end)-($scope.qty*$scope.start))-brokerFee;
    }
    console.log($scope.results)
    console.log($scope.color)
  }
])

app.controller('stock1Controller', ["$scope","$http",
  function($scope, $http){
    var stockPrice;
    var price = $http.get('http://localhost:8080/account/2/2').then(function (data) {
      console.log(data)
      stockPrice = data.data[0];
    }).then(function () {
      $scope.stockPrice = "$ " + stockPrice;
    })
  }
])
