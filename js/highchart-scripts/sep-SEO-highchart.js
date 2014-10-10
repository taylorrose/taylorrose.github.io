$(function () {
    $('#container1').highcharts({
        chart: {
       
            type: 'area',
            backgroundColor:'transparent';,
            zoomType : 'x'
            
        },
        
        title: {
            text: 'Organic Response Rates - 7 Day MPA'
        },
        subtitle: {
            text: 'Rollover Chart for Additional Information'
        },
        xAxis: {
            categories:['7/7/2014','7/8/2014','7/9/2014','7/10/2014','7/11/2014','7/12/2014','7/13/2014','7/14/2014','7/15/2014','7/16/2014','7/17/2014 - DR Page Test','7/18/2014','7/19/2014','7/20/2014','7/21/2014 - Fios Inspired Mobile Page','7/22/2014 - Bigger Click-to-Call Mobile Button','7/23/2014','7/24/2014 - Package Page Wide Form','7/25/2014','7/26/2014','7/27/2014','7/28/2014','7/29/2014','7/30/2014','7/31/2014','8/1/2014','8/2/2014','8/3/2014','8/4/2014','8/5/2014','8/6/2014','8/7/2014','8/8/2014','8/9/2014','8/10/2014','8/11/2014','8/12/2014','8/13/2014','8/14/2014','8/15/2014','8/16/2014','8/17/2014','8/18/2014','8/19/2014 - Outfield Test','8/20/2014-Mobile Inline Form','8/21/2014','8/22/2014','8/23/2014','8/24/2014','8/25/2014 - Labor Day Promo','8/26/2014 - Labor Day Promo','8/27/2014 - Labor Day Promo','8/28/2014 - Labor Day Promo','8/29/2014 - Labor Day Promo','8/30/2014 - Labor Day Promo','8/31/2014 - Labor Day Promo','9/1/2014 - Labor Day Promo','9/2/2014 - Camera Promotion','9/3/2014 - Camera Promotion','9/4/2014 - Camera Promotion','9/5/2014','9/6/2014 - Camera Promotion','9/7/2014 - Camera Promotion','9/8/2014 - Camera Promotion','9/9/2014 - Camera Promotion','9/10/2014 - Camera Promotion','9/11/2014 - Camera Promotion','9/12/2014 - Camera Promotion','9/13/2014 - Camera Promotion','9/14/2014 - Camera Promotion','9/15/2014','9/16/2014','9/17/2014','9/18/2014','9/19/2014','9/20/2014','9/21/2014','9/22/2014','9/23/2014','9/24/2014','9/25/2014','9/26/2014','9/27/2014','9/28/2014','9/29/2014 - October Promo','9/30/2014 - October Promo'],
            tickmarkPlacement: 'on',
            tickInterval: 12,
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
            name: 'Inbound NIS Leads (Calls)',
            data: [{y:1.21},{y:1.20},{y:1.15},{y:1.21},{y:1.29},{y:1.31},{y:1.33},{y:1.29},{y:1.26},{y:1.26},{y:1.27},{y:1.22},{y:1.20},{y:1.21},{y:1.23},{y:1.27},{y:1.27},{y:1.25},{y:1.30},{y:1.33},{y:1.33},{y:1.35},{y:1.29},{y:1.32},{y:1.33},{y:1.32},{y:1.32},{y:1.32},{y:1.34},{y:1.43},{y:1.46},{y:1.50},{y:1.52},{y:1.52},{y:1.54},{y:1.52},{y:1.48},{y:1.46},{y:1.47},{y:1.49},{y:1.52},{y:1.52},{y:1.54},{y:1.51},{y:1.51},{y:1.51},{y:1.55},{y:1.55},{y:1.55},{y:1.60},{y:1.65},{y:1.66},{y:1.66},{y:1.62},{y:1.65},{y:1.67},{y:1.55},{y:1.61},{y:1.63},{y:1.64},{y:1.70},{y:1.70},{y:1.68},{y:1.79},{y:1.79},{y:1.86},{y:1.86},{y:1.86},{y:1.90},{y:1.92},{y:1.92},{y:1.94},{y:1.89},{y:1.89},{y:1.89},{y:1.83},{y:1.81},{y:1.82},{y:1.72},{y:1.76},{y:1.77},{y:1.78},{y:1.83},{y:1.82},{y:1.88},{y:1.93}],
            color: "#0AE0A3"

        }, {
            name: 'Outbound NIS Leads (Forms)',
            data:[{y:0.62},{y:0.61},{y:0.63},{y:0.65},{y:0.62},{y:0.62},{y:0.61},{y:0.64},{y:0.64},{y:0.63},{y:0.61},{y:0.63},{y:0.63},{y:0.65},{y:0.64},{y:0.64},{y:0.63},{y:0.60},{y:0.61},{y:0.63},{y:0.62},{y:0.63},{y:0.60},{y:0.60},{y:0.61},{y:0.59},{y:0.57},{y:0.57},{y:0.56},{y:0.58},{y:0.57},{y:0.57},{y:0.59},{y:0.60},{y:0.61},{y:0.60},{y:0.60},{y:0.61},{y:0.60},{y:0.58},{y:0.56},{y:0.53},{y:0.53},{y:0.52},{y:0.52},{y:0.54},{y:0.54},{y:0.55},{y:0.57},{y:0.61},{y:0.61},{y:0.62},{y:0.61},{y:0.66},{y:0.68},{y:0.70},{y:0.71},{y:0.72},{y:0.72},{y:0.72},{y:0.71},{y:0.70},{y:0.69},{y:0.66},{y:0.69},{y:0.72},{y:0.74},{y:0.74},{y:0.75},{y:0.75},{y:0.74},{y:0.74},{y:0.72},{y:0.71},{y:0.69},{y:0.69},{y:0.70},{y:0.72},{y:0.69},{y:0.69},{y:0.69},{y:0.72},{y:0.73},{y:0.72},{y:0.78},{y:0.82}],
            color:"#26ABA1"

        },
                 {name:'Optimization Test Wins',color:'#F72349'},{name:'Site-Wide Promotion',color:'#F6DC85'}            
                ]
    });
        // the line actions
      var hasPlotLine = true,
        hasPlotBand = true,
        chart = $('#container1').highcharts();
    
       
    
     chart.xAxis[0].addPlotBand({
                from: 79-30,
                to: 99-30,
                color: '#F6DC85',
                id: 'plot-band-1'
            });
          chart.xAxis[0].addPlotBand({
                from: 84,
                to: 85,
                color: '#F6DC85',
                id: 'plot-band-1'
            });

            chart.xAxis[0].addPlotLine({
                value: 6-30,
                color: '#FF835D',
                width: 2,
                id: 'plot-line-1',
            });
    
           chart.xAxis[0].addPlotLine({
                value: 9-30,
                color: '#FF835D',
                width: 2,
                id: 'plot-line-1',
            });
            
  
            chart.xAxis[0].addPlotLine({
                value: 40-30,
                color: '#F72349',
                width: 2,
                id: 'plot-line-2'
            });
    
       chart.xAxis[0].addPlotLine({
                value: 30-30,
                color: '#F72349',
                width: 2,
                id: 'plot-line-2'
            });
    
       chart.xAxis[0].addPlotLine({
                value: 40-30,
                color: '#F72349',
                width: 2,
                id: 'plot-line-2'
            });
    
         chart.xAxis[0].addPlotLine({
                value: 47-30,
                color: '#F72349',
                width: 2,
                id: 'plot-line-2'
            });
    
       chart.xAxis[0].addPlotLine({
                value: 44-30,
                color: '#F72349',
                width: 2,
                id: 'plot-line-2'
            });
    
      chart.xAxis[0].addPlotLine({
                value: 45-30,
                color: '#F72349',
                width: 2,
                id: 'plot-line-2'
            });
    
         chart.xAxis[0].addPlotLine({
                value: 74-30,
                color: '#F72349',
                width: 2,
                id: 'plot-line-2'
            });
         chart.xAxis[0].addPlotLine({
                value: 73-30,
                color: '#F72349',
                width: 2,
                id: 'plot-line-2'
            });
               chart.xAxis[0].addPlotLine({
                value: 87-30,
                color: '#B5A262',
                width: 1,
                id: 'plot-line-2'
            });
        // the band action
    //var hasPlotBand = false,
        
        
    
    

});
