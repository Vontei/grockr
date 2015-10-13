var chartData = generateChartData();

function generateChartData() {
  var chartResults =[];
  var chartData = [
  {
    "date":"2010-10-15",
    "value":16.17,
    "high":16.73,
    "low":15.9,
    "close":16.25,
    "volume":58481800,
    "adj close":16.25
  },
  {
    "date":"2010-10-18",
    "value":16.200001,
    "high":16.280001,
    "low":15.75,
    "close":15.93,
    "volume":35876500,
    "adj close":15.93
  },
  {
    "date":"2010-10-19",
    "value":15.73,
    "high":15.8,
    "low":15.37,
    "close":15.49,
    "volume":32678600,
    "adj close":15.49
  },
  {
    "date":"2010-10-20",
    "value":15.79,
    "high":16.25,
    "low":15.79,
    "close":15.8,
    "volume":37790200,
    "adj close":15.8
  },
  {
    "date":"2010-10-21",
    "value":15.9,
    "high":16,
    "low":15.73,
    "close":15.97,
    "volume":26935500,
    "adj close":15.97
  },
  {
    "date":"2010-10-22",
    "value":15.9,
    "high":16.41,
    "low":15.86,
    "close":16.309999,
    "volume":24264100,
    "adj close":16.309999
  },
  {
    "date":"2010-10-25",
    "value":16.299999,
    "high":16.440001,
    "low":16.15,
    "close":16.4,
    "volume":17251500,
    "adj close":16.4
  },
  {
    "date":"2010-10-26",
    "value":16.219999,
    "high":16.48,
    "low":16.200001,
    "close":16.459999,
    "volume":22349000,
    "adj close":16.459999
  },
  {
    "date":"2010-10-27",
    "value":16.4,
    "high":16.43,
    "low":16.200001,
    "close":16.42,
    "volume":13764400,
    "adj close":16.42
  },
  {
    "date":"2010-10-28",
    "value":16.450001,
    "high":16.450001,
    "low":16.309999,
    "close":16.4,
    "volume":12689500,
    "adj close":16.4
  },
  {
    "date":"2010-10-29",
    "value":16.370001,
    "high":16.52,
    "low":16.33,
    "close":16.49,
    "volume":16013700,
    "adj close":16.49
  },
  {
    "date":"2010-11-01",
    "value":16.5,
    "high":16.52,
    "low":16.08,
    "close":16.15,
    "volume":14360600,
    "adj close":16.15
  },
  {
    "date":"2010-11-02",
    "value":16.290001,
    "high":16.4,
    "low":16.18,
    "close":16.190001,
    "volume":9964700,
    "adj close":16.190001
  },
  {
    "date":"2010-11-03",
    "value":16.209999,
    "high":16.23,
    "low":16.01,
    "close":16.17,
    "volume":17325500,
    "adj close":16.17
  },
  {
    "date":"2010-11-04",
    "value":16.309999,
    "high":16.35,
    "low":16.02,
    "close":16.200001,
    "volume":26484700,
    "adj close":16.200001
  },
  {
    "date":"2010-11-05",
    "value":16.18,
    "high":16.4,
    "low":16.18,
    "close":16.27,
    "volume":13414000,
    "adj close":16.27
  },
  {
    "date":"2010-11-08",
    "value":16.290001,
    "high":16.5,
    "low":16.25,
    "close":16.440001,
    "volume":15561500,
    "adj close":16.440001
  },
  {
    "date":"2010-11-09",
    "value":17.219999,
    "high":17.6,
    "low":16.860001,
    "close":16.969999,
    "volume":56218900,
    "adj close":16.969999
  },
  {
    "date":"2010-11-10",
    "value":17,
    "high":17.01,
    "low":16.75,
    "close":16.940001,
    "volume":17012600,
    "adj close":16.940001
  },
  {
    "date":"2010-11-11",
    "value":16.629999,
    "high":16.860001,
    "low":16.52,
    "close":16.799999,
    "volume":15310600,
    "adj close":16.799999
  },
  {
    "date":"2010-11-12",
    "value":16.65,
    "high":16.75,
    "low":16.4,
    "close":16.549999,
    "volume":17703400,
    "adj close":16.549999
  }];

  for ( var i = 0; i < chartData.length; i++ ) {

  chartResults.push( {
      date: chartData[i]['date'],
      value: parseInt(chartData[i]['value']).toFixed(3),
      volume: chartData[i]['volume']
    } );
  }
  return chartResults;
}

var chart = AmCharts.makeChart( "chartdiv", {

  type: "stock",
  "theme": "light",

  categoryAxesSettings: {
    minPeriod: "mm"
  },

  dataSets: [ {
    color: "#b0de09",
    fieldMappings: [ {
      fromField: "",
      toField: ""
    }, {
      fromField: "volume",
      toField: "volume"
    } ],

    dataProvider: chartData,
    categoryField: "date"
  } ],


  panels: [ {
      showCategoryAxis: false,
      title: "",
      percentHeight: 70,

      stockGraphs: [ {
        id: "g1",
        Field: "",
        type: "smoothedLine",
        lineThickness: 2,
        bullet: "round"
      } ],


      stockLegend: {
        TextRegular: " ",
        markerType: "none"
      }
    },

    {
      title: "Volume",
      percentHeight: 30,
      stockGraphs: [ {
        Field: "volume",
        type: "column",
        cornerRadiusTop: 2,
        fillAlphas: 1
      } ],

      stockLegend: {
        TextRegular: " ",
        markerType: "none"
      }
    }
  ],

  chartScrollbarSettings: {
    graph: "g1",
    usePeriod: "10mm",
    position: "top"
  },

  chartCursorSettings: {
    BalloonsEnabled: true
  },

  periodSelector: {
    position: "top",
    dateFormat: "YYYY-MM-DD JJ:NN",
    inputFieldWidth: 150,
    periods: [ {
      period: "hh",
      count: 1,
      label: "1 hour",
      selected: true

    }, {
      period: "hh",
      count: 2,
      label: "2 hours"
    }, {
      period: "hh",
      count: 5,
      label: "5 hour"
    }, {
      period: "hh",
      count: 12,
      label: "12 hours"
    }, {
      period: "MAX",
      label: "MAX"
    } ]
  },

  panelsSettings: {
    usePrefixes: true
  },

  "export": {
    "enabled": true,
    "position": "bottom-right"
  }
} );
