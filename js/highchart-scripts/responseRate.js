var dateRange = [];  
var dateArr = ['02/09/2015','02/10/2015','02/11/2015','02/12/2015','02/13/2015','02/14/2015','02/15/2015','02/16/2015','02/17/2015','02/18/2015','02/19/2015','02/20/2015','02/21/2015','02/22/2015','02/23/2015','02/24/2015','02/25/2015','02/26/2015','02/27/2015','02/28/2015','03/01/2015','03/02/2015','03/03/2015','03/04/2015','03/05/2015','03/06/2015','03/07/2015','03/08/2015','03/09/2015','03/10/2015','03/11/2015','03/12/2015','03/13/2015','03/14/2015','03/15/2015','03/16/2015','03/17/2015','03/18/2015','03/19/2015','03/20/2015','03/21/2015','03/22/2015','03/23/2015','03/24/2015','03/25/2015','03/26/2015','03/27/2015','03/28/2015','03/29/2015','03/30/2015','03/31/2015','04/01/2015','04/03/2015','04/04/2015','04/05/2015','04/06/2015','04/07/2015','04/08/2015','04/09/2015','04/10/2015','04/11/2015','04/12/2015'];

var HomeForms = [0.82,0.80,0.76,1.43,1.41,1.38,1.39,1.46,1.53,1.61,0.99,1.20,1.42,1.53,1.63,1.68,1.72,1.76,1.82,1.61,1.51,1.61,1.60,1.60,1.57,1.52,1.52,1.48,1.23,1.14,1.07,1.05,1.03,1.01,1.02,0.98,0.95,1.00,1.05,1.06,1.07,1.05,1.01,1.11,1.05,1.03,1.06,1.06,1.06,1.10,0.98,0.92,0.96,0.99,1.03,1.08,1.10,1.20,1.27,1.23,1.21,1.20];
    HomeCalls = [0.92,0.92,0.85,0.82,0.77,0.74,0.72,0.70,0.71,0.70,0.74,0.73,0.84,0.86,0.91,0.94,1.01,1.02,1.18,1.14,1.17,1.09,1.09,1.08,1.07,1.01,0.99,0.98,1.06,1.07,1.03,1.05,1.07,1.16,1.16,1.10,1.04,1.09,1.13,1.16,1.12,1.10,1.14,1.17,1.13,1.14,1.10,1.07,1.03,1.00,0.99,0.95,0.88,0.87,0.88,0.93,0.92,0.99,1.08,1.08,1.16,1.18];


var PackageCalls = [3.36,2.41,2.56,2.64,2.12,1.86,3.47,3.14,2.87,2.57,2.80,2.16,2.75,2.44,3.03,2.62,3.40,2.36,3.03,2.51,3.22,2.83,3.13,3.34,2.51,2.15,2.00,3.67,3.55,2.98,2.64,2.41,2.45,3.28,3.14,2.34,1.89,3.25,3.07,2.83,2.59,2.85,2.95,2.57,2.82,3.51,2.46,2.30,2.43,2.54,2.37,2.18,2.27,1.80,2.33,2.71,2.48,3.24,3.20,2.31,3.24,2.86];
var PackageForms = [1.99,2.21,1.59,1.65,2.12,1.08,0.96,1.82,2.30,2.09,1.59,0.79,0.62,0.56,1.84,1.37,2.22,1.66,1.70,1.37,0.94,1.94,2.06,2.22,2.19,2.63,1.16,0.93,2.32,2.69,1.68,2.28,3.16,1.14,1.27,2.50,2.06,1.96,2.43,2.27,1.19,1.94,2.53,2.16,2.95,2.08,2.84,1.59,1.12,1.87,2.17,1.94,2.35,1.00,0.76,2.09,1.55,1.94,1.43,1.78,1.38,0.85];

var PPCcalls = [1.23,1.16,1.05,1.07,1.16,0.93,0.34,1.33,1.58,1.23,1.35,1.55,2.82,1.72,1.50,1.73,1.96,1.48,1.08,1.53,1.22,1.04,1.47,1.01,1.14,1.20,1.50,1.48,1.04,1.39,1.14,1.00,0.80,1.32,0.90,0.76,0.68,1.00,1.01,1.03,1.29,0.96,1.41,1.27,1.19,1.28,1.33,1.62,1.13,2.09,1.80,1.25,1.21,1.59,1.54,1.23,0.82,1.38,1.18,0.94,1.18,0.60];
var PPCforms = [1.50,1.23,1.00,1.19,1.29,1.22,0.45,1.08,1.16,0.90,1.08,0.87,0.72,0.46,1.02,1.52,1.44,1.44,1.44,0.74,0.62,1.30,1.48,1.03,1.13,1.02,0.73,0.69,1.22,1.24,0.93,0.91,0.90,0.63,0.55,0.75,0.77,0.86,0.83,0.90,0.61,0.64,1.10,1.10,0.98,1.02,0.86,0.58,0.29,1.43,0.99,0.87,0.86,0.70,0.15,1.04,1.03,0.99,0.71,0.85,0.83,0.43];

// var callTest1 = [0.27,1.18,1.32,0.68,0.95,0.11,0.00,1.61,1.44,28.00,3.09,0.58,0.94,5.69,3.47,1.75,4.12,1.19,0.79,1.09,0.45,1.28,0.45,0.75,5.56,0.41,1.19,3.23,0.58,4.55,1.60,0.25,1.15,0.34,0.14,0.13,0.50,0.56,0.85,0.43,0.81,0.81,2.34,1.03,1.20,0.71,3.96,0.32,0.00,1.37,1.22,1.10,0.88,1.72,4.07,8.47,0.13,1.05,0.50,1.16,0.00,0.93,3.35,1.69,2.17,0.21,0.85,1.13,0.43,17.86,1.44,2.36,1.12,0.49,0.63,1.05,0.63,0.78,0.24,8.04,4.61,0.15,4.27,0.92,30.77,2.16,0.52,0.39,0.89,0.52,2.28,0.96,3.92,2.42,1.49,3.29,0.26,0.59,0.18,0.99,18.92,1.91,0.81,3.57,0.00,0.97,1.18,0.39,0.13,1.62,10.53,0.62,1.69,2.84,11.43,3.98,0.34,1.62,0.74,1.32,45.00,0.58,1.38,0.71,0.74,1.37,0.86,0.00,0.44,0.11,1.76,3.27,0.82,0.72,2.55,0.15,0.72,2.34,9.09,10.29,0.85,3.69,0.41,0.55,0.47,1.75,1.20,2.61,0.00,16.67,0.32,0.81,0.47,0.33,0.44,0.24,4.76,0.00,1.20,0.00,0.62,2.29,1.13];
// //Set date of first data point
// var startDate = new Date("2/2/2015");
// var numDays = HomeForms.length;

//Build Array for X Axis Object
// var dateArr = [];
// //Function to add a day to a given date and return a string formatted --> D/M
// function dateFormat(dateObject, addDays) {
//     var Date2 = new Date(dateObject.setDate(dateObject.getDate() + addDays));
//     var date3 = Date2.getMonth() + "/" + Date2.getDate()+"/"+Date2.getFullYear();
//     return date3;
// }
//Build Date Array based on number of days 
// for (i = 0; i < numDays; i++) {
//     dateArr[i] = dateFormat(startDate, i);
// }

var newSite = dateArr.indexOf('03/30/2015');

$(function () {
    $('#container').highcharts({
        chart: {
            type: 'area',
            backgroundColor:'transparent',
            zoomType : 'x'
        },
        
        title: {
            text: 'Home Page Resonse Rates'
        },
        subtitle: {
            text: '7 Day Moving Point Average'
        },
        xAxis: {
            categories: dateArr,
            tickmarkPlacement: 'on',
            tickInterval: 16,
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Response Rate (%)'
            },
            labels: {
                valueSuffix:"%"
            }, tickInterval:1
        },
        tooltip: {
            shared: true,
            valueSuffix: '%'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    enabled:false,
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Inbound (Calls)',
            data: HomeCalls,
            color: "#92B0DF"

        }, {
            name: 'Outbound (Forms)',
            data: HomeForms,
            color:"#3C5178"

        },
        ]
    });
        // the line actions
      var hasPlotLine = true,
        hasPlotBand = true,
        chart = $('#container').highcharts();
    
        $('#home').click(function () {
        
        chart.series[0].update({data:HomeCalls});
        chart.series[1].update({data:HomeForms});
        $("#highcharts-0 > svg > text.highcharts-title > tspan").html("Home Page Resonse Rates");
        $("#slides").attr("data-background","http://assets.cdn.aws.vivint.com/global/vivint.com/home/feature-home-v2.jpg")
        Reveal.initialize();
    });
       
      $('#package').click(function () {
        
        chart.series[0].update({data:PackageCalls});
        chart.series[1].update({data:PackageForms});
        $("#highcharts-0 > svg > text.highcharts-title > tspan").html("Package Page Resonse Rates");
        $("#slides").attr("data-background","http://assets.cdn.aws.vivint.com/global/vivint.com/packages/2015/smart-protect/featured-r1.jpg")
        Reveal.initialize();


    });

          $('#ppc').click(function () {
        
        chart.series[0].update({data:PPCcalls});
        chart.series[1].update({data:PPCforms});
        $("#highcharts-0 > svg > text.highcharts-title > tspan").html("PPC Page Resonse Rates");
        $("#slides").attr("data-background","http://images.cdn.aws.vivint.com/global/vivint.com/web/campaigns/ppc/fb-feature-home-sign_opt.jpg")
        Reveal.initialize();
    });


            chart.xAxis[0].addPlotLine({
                value: newSite,
                color: '#FF835D',
                width: 2,
                id: 'plot-line-1',
            });
    
             /*  chart.xAxis[0].addPlotLine({
                value: 9,
                color: '#FF835D',
                width: 2,
                id: 'plot-line-1',
            });
            
  
            chart.xAxis[0].addPlotLine({
                value: 40,
                color: '#F72349',
                width: 2,
                id: 'plot-line-2'
            });
    
       chart.xAxis[0].addPlotLine({
                value: 30,
                color: '#F72349',
                width: 2,
                id: 'plot-line-2'
            });
    
       chart.xAxis[0].addPlotLine({
                value: 40,
                color: '#F72349',
                width: 2,
                id: 'plot-line-2'
            });
    
         chart.xAxis[0].addPlotLine({
                value: 47,
                color: '#F72349',
                width: 2,
                id: 'plot-line-2'
            });
    
       chart.xAxis[0].addPlotLine({
                value: 44,
                color: '#F72349',
                width: 2,
                id: 'plot-line-2'
            });
    
      chart.xAxis[0].addPlotLine({
                value: 45,
                color: '#F72349',
                width: 2,
                id: 'plot-line-2'
            });
    
         chart.xAxis[0].addPlotLine({
                value: 74,
                color: '#F72349',
                width: 2,
                id: 'plot-line-2'
            });
         chart.xAxis[0].addPlotLine({
                value: 73,
                color: '#F72349',
                width: 2,
                id: 'plot-line-2'
            });
               chart.xAxis[0].addPlotLine({
                value: 87,
                color: '#B5A262',
                width: 1,
                id: 'plot-line-2'
            });
        // the band action
    //var hasPlotBand = false,*/
        
        
    
    

});