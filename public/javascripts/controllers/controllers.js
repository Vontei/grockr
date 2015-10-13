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





app.controller('DemoCtrl', function($scope) {
    $scope.user = {
      userName: 'John Doe',
      password: 'fun@email.com',
      passwordConf: '999-999-9999',
    };
});
//
// app.controller('filmController', ["$scope",'$http','$routeParams',
//   function($scope, $http, $routeParams){
//   console.log('im here')
//   $http.get('http://www.omdbapi.com/?i=' + $routeParams.id).then(function (data) {
//     console.log(data)
//     $scope.movieResults = data.data
//   })
// }])
(function () {

      app.controller('AppCtrl', AppCtrl);
  function AppCtrl ($scope, $log) {
    var tabs = [
          { title: 'One', content: "Tabs will become paginated if there isn't enough room for them."},
          { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
          { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
          { title: 'Four', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
          { title: 'Five', content: "If you remove a tab, it will try to select a new one."},
          { title: 'Six', content: "There's an ink bar that follows the selected tab, you can turn it off if you want."},
          { title: 'Seven', content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."},
          { title: 'Eight', content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"},
          { title: 'Nine', content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs."},
          { title: 'Ten', content: "If you're still reading this, you should just go check out the API docs for tabs!"}
        ],
        selected = null,
        previous = null;
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
    $scope.$watch('selectedIndex', function(current, old){
      previous = selected;
      selected = tabs[current];
      if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
      if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
    });
    $scope.addTab = function (title, view) {
      view = view || title + " Content View";
      tabs.push({ title: title, content: view, disabled: false});
    };
    $scope.removeTab = function (tab) {
      var index = tabs.indexOf(tab);
      tabs.splice(index, 1);
    };
  }
})();



(function() {
  app.controller('DemoCtrl2', function() {
      this.topDirections = ['left', 'up'];
      this.bottomDirections = ['down', 'right'];
      this.isOpen = false;
      this.availableModes = ['md-fling', 'md-scale'];
      this.selectedMode = 'md-fling';
      this.availableDirections = ['up', 'down', 'left', 'right'];
      this.selectedDirection = 'down';
    });
})();



app.controller("highchart", function ($scope) {
  $scope.chart = $(function () {
      var stuff = [
  ["2015-10-09",32.349998,32.689999,31.99,32.52,11822100,32.52  ],
  ["2015-10-08",31.790001,32.5,31.73,32.369999,14239400,32.369999  ],
  ["2015-10-07",31.309999,31.99,31.209999,31.870001,11991000,31.870001  ],
  ["2015-10-06",30.790001,31.190001,30.66,30.959999,10572800,30.959999  ],
  ["2015-10-05",30.799999,31.200001,30.35,30.85,12655000,30.85  ],
  ["2015-10-02",28.620001,30.709999,28.43,30.709999,29098500,30.709999  ],
  ["2015-10-01",28.950001,29,28.440001,28.91,14459100,28.91  ],
  ["2015-09-30",28.65,29.110001,28.49,28.91,17861800,28.91  ],
  ["2015-09-29",28.58,29.23,27.85,28.26,41761600,28.26  ],
  ["2015-09-28",29.030001,29.219999,27.200001,27.6,49088700,27.6  ],
  ["2015-09-25",29.66,29.709999,28.91,29.129999,11525300,29.129999  ],
  ["2015-09-24",29.469999,29.57,28.85,29.34,18723200,29.34  ],
  ["2015-09-23",30.559999,30.57,29.629999,29.74,12674700,29.74  ],
  ["2015-09-22",30.780001,30.92,30.17,30.4,15257000,30.4  ],
  ["2015-09-21",31.200001,31.74,30.879999,31.17,18413400,31.17  ],
  ["2015-09-18",30.51,30.799999,30.41,30.74,20144700,30.74  ],
  ["2015-09-17",31.309999,31.33,30.809999,30.93,16546900,30.93  ],
  ["2015-09-16",31.139999,31.77,30.99,31.4,22171700,31.4  ],
  ["2015-09-15",29.719999,31.23,29.41,31.040001,25637600,31.040001  ],
  ["2015-09-14",30.68,30.92,30,30.32,21951500,30.32  ],
  ["2015-09-11",31.09,31.43,30.629999,31.43,14312100,31.43  ],
  ["2015-09-10",31.35,31.59,31.030001,31.15,14287600,31.15  ],
  ["2015-09-09",30.4,31.799999,30.35,31.52,46957000,31.52  ],
  ["2015-09-08",32.200001,32.830002,30.860001,30.9,25238500,30.9  ],
  ["2015-09-04",32,32.290001,31.440001,31.58,13829900,31.58  ],
  ["2015-09-03",31.860001,32.740002,31.799999,32.540001,13710700,32.540001  ],
  ["2015-09-02",32.009998,32.029999,31.379999,31.77,15551500,31.77  ],
  ["2015-09-01",31.49,32.099998,31.23,31.6,19828300,31.6  ],
  ["2015-08-31",32.91,32.990002,32.23,32.240002,13575100,32.240002  ],
  ["2015-08-28",33.32,33.57,32.93,33.139999,9359500,33.139999  ],
  ["2015-08-27",33.360001,33.77,32.950001,33.689999,18949200,33.689999  ],
  ["2015-08-26",32.459999,32.619999,31.110001,32.52,25375600,32.52  ],
  ["2015-08-25",32.98,33.029999,31.540001,31.74,15626100,31.74  ],
  ["2015-08-24",29.02,32.279999,29,31.309999,22876900,31.309999  ],
  ["2015-08-21",33.580002,34.02,32.91,32.93,18271700,32.93  ]
]

      $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {
          $('#CHARTcontainer').highcharts('StockChart', {
              rangeSelector : {
                  selected : 1
              },
              title : {
                  text : 'AAPL Stock Price'
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
