app.controller('stockController', ['$scope','$http','$localStorage','$cookies','$location',
  function($scope, $http, $localStorage, $cookies, $location){
    $scope.msft = $localStorage.msft;
    $scope.aapl = $localStorage.aapl;
    $scope.goog = $localStorage.aapl;

    $scope.aaplOrder = function(){
      console.log($scope.qty);
      var order = {
        id: $cookies.get('id'),
        stock: 'AAPL',
        price: $scope.aapl,
        qty: $scope.qty
      }
      post(order);
    }
    $scope.msftOrder = function(){
      var order = {
        id: $cookies.get('id'),
        stock: 'MSFT',
        price: $scope.msft,
        qty: $scope.MSFTqty
      }
      post(order);
    }
    var post = function(order) {
       $http.post('http://localhost:8080/buy', order).then(function (data) {
        console.log("posted order");
        $location.path('/dash')
      })
    }

  }
]);

app.controller('stock2Controller', ['$scope','$localStorage',
  function($scope, $localStorage){
    $scope.goog = $localStorage.goog;
}]);



app.controller('ordersController', ["$scope", "$http" ,"$cookies","$localStorage",
  function ($scope, $http, $cookies, $localStorage) {
    $http.get('http://localhost:8080/orders/'+ $cookies.get('id')).then(function (data) {
      var list = data.data;
      console.log(data.data);
      var orders = list.map(function (e) {
        var priceNow;
        if(e.stock ==='AAPL') priceNow = $localStorage.aapl;
        if(e.stock ==='MSFT') priceNow = $localStorage.msft;
        if(e.stock ==='GOOG') priceNow = $localStorage.goog;
        var buy = parseInt(e.buyPrice);
        var nowPrice = parseInt(priceNow);
        var qty = parseInt(e.qty);
        var pl;
        buy > nowPrice ? pl = "- " + ((buy-nowPrice)*qty) : pl= "+ " + ((nowPrice-buy)*qty);
        return {
          id: e.id,
          stock: e.stock,
          qty: qty,
          buyPrice: e.buyPrice,
          currentPrice: priceNow,
          profitLoss: pl
        }
      })
      $scope.orders = orders;
    })

    $scope.sellOrder = function(){
      if(this.order.stock ==='AAPL') priceNow = $localStorage.aapl;
      if(this.order.stock ==='MSFT') priceNow = $localStorage.msft;
      if(this.order.stock ==='GOOG') priceNow = $localStorage.goog;
      currentPrice = parseFloat(priceNow);
      buy = parseFloat(this.order.buyPrice);
      qty = parseInt(this.order.qty)
      var profit;
      var newBalance;
      if(currentPrice > buy) {
        newBalance=(currentPrice-buy)*qty;
        profit=true;
      }
      if(currentPrice < buy){
        newBalance=(buy-currentPrice)*qty
        profit=false;
      }
      if(currentPrice === buy){
        newBalance = 0;
        profit=false;
      }
      var order = {
        profit: profit,
        orderid: this.order.id,
        accountid: $cookies.get('id'),
        balance: newBalance
      }
      console.log(order)
      $http.post('http://localhost:8080/sell', order).then(function (data) {
        var list = data.data;
        console.log(data.data);
        var orders = list.map(function (e) {
          var priceNow;
          if(e.stock ==='AAPL') priceNow = $localStorage.aapl;
          if(e.stock ==='MSFT') priceNow = $localStorage.msft;
          if(e.stock ==='GOOG') priceNow = $localStorage.goog;
          var buy = parseInt(e.buyPrice);
          var nowPrice = parseInt(priceNow);
          var qty = parseInt(e.qty);
          var pl;
          buy > nowPrice ? pl = "- " + ((buy-nowPrice)*qty) : pl= "+ " + ((nowPrice-buy)*qty);
          return {
            id: e.id,
            stock: e.stock,
            qty: qty,
            buyPrice: e.buyPrice,
            currentPrice: priceNow,
            profitLoss: pl
          }
        })
        $scope.orders = orders;
        $location.path('/orders')
      })
    }


  }
])



app.controller('sentimentController', ['$scope','$http',
  // function($scope, $http){
  //   $http.get('http://localhost:8080/alchemy').then(function (data) {
  //     var positive = 0;
  //     var negative = 0;
  //     $scope.face;
  //     var sentiments = data.data.body.object.result.docs.map(function (doc) {
  //       return doc.source.enriched.url.docSentiment.type;
  //     })
  //     sentiments.forEach(function (x) {
  //       x === 'positive'? positive++ : negative++;
  //     })
  //     positive>negative ? $scope.face='fa fa-smile-o fa-3x' : $scope.face='fa fa-frown-o fa-3x';
  //     console.log($scope.face)
  //   })
  // }
]);


app.controller('storageController', ['$scope','$http','$localStorage',
  function($scope, $http, $localStorage){
      $http.get('http://localhost:8080/yahoo').then(function (data) {
          console.log(data)
          $localStorage.msft = data.data[0];
          $localStorage.aapl = data.data[1];
          $localStorage.goog = data.data[2];
      }).then(function () {
        console.log($localStorage.aapl);
      })
  }
])


app.controller('cookieController', [
  function($scope, $cookies){
    var favoriteCookie = $cookies.get('myFavorite');
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

app.controller('logOutController', ["$scope",'$localStorage','$location','$cookies',
  function($scope, $localStorage, $location, $cookies){
    $scope.logout = function(){
      $cookies.remove('id');
      $cookies.remove('user');
      $location.path('/dash');
    }
  }
])

app.controller('loginController', ["$scope", "$http",'$location','$localStorage','$cookies',
  function($scope, $http, $location, $localStorage, $cookies){
    $scope.login= function (credentials) {
      $http.post('http://localhost:8080/account/login', credentials).then(function (data) {
        $cookies.put('id', data.data[0].id)
        $cookies.put('user', data.data[0].userName)
        $location.path('/dash')
      })
    }
  }
])



app.controller('dashController', ["$scope","$localStorage","$cookies","$rootScope",
  function ($scope, $localStorage, $cookies, $rootScope) {
    function login(){
      var brand = 'grockr';
      if($cookies.get('user') != null){
        $rootScope.nameSpace = $cookies.get('user')
      }
      else{
        $rootScope.nameSpace = brand;
      }
    }
    $scope.$watch('nameSpace', login)
  }
])


app.controller('newOrder', ["$scope", "$http","$location",
  function($scope, $http, $location){
    $scope.createOrder = function(credentials){
      $http.post('http://localhost:8080/buy', credentials).then(function (data) {
        console.log("posted order");
        $location.path('/dash')
      })
    }
  }
])




app.controller('whatIfController', ["$scope",
  function($scope){
    var calculate = function(){
    var price = parseFloat($scope.price);
    var wallet = parseFloat($scope.wallet);
    var profit = parseFloat($scope.profit);
    var fee = parseFloat($scope.fee);
    var afford = Math.floor(wallet/price) ;
    var breakeven = (afford*price)+(2*fee);
    $scope.afford = afford || 0;
    $scope.spend = (afford*price) || 0;
    $scope.breakeven = breakeven || 0;
    $scope.goal = breakeven+profit || 0;
    $scope.sell = ((breakeven+profit)/2) || 0;
  }
    $scope.$watch('price', calculate)
    $scope.$watch('wallet', calculate)
    $scope.$watch('profit', calculate)
    $scope.$watch('fee', calculate)
  }
])




app.controller("highchart", function ($scope) {
  $scope.chart = $(function () {
      $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {
          $('#CHARTcontainer').highcharts('StockChart', {
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
  $scope.chart3 = $(function () {
      $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=msft-c.json&callback=?', function (data) {
          $('#CHART3container').highcharts('StockChart', {
              rangeSelector : {
                  selected : 1
              },
              title : {
                  text : 'MICROSOFT Stock Price'
              },
              series : [{
                  name : 'MSFT Stock Price',
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
