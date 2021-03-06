$(function () {
    $('#container').highcharts({
        chart: {
            type: 'area',
            backgroundColor:'transparent',
            zoomType : 'x'
        },
        
        title: {
            text: 'Paid Search Response Rates - 7 Day MPA'
        },
        subtitle: {
            text: 'Rollover Chart for Additional Information'
        },
        xAxis: {
            categories:['6/7/2014','6/8/2014','6/9/2014','6/10/2014','6/11/2014','6/12/2014','6/13/2014 -Increased Phone Number Size','6/14/2014','6/15/2014','6/16/2014 - Speed Optimization','6/17/2014','6/18/2014','6/19/2014','6/20/2014','6/21/2014','6/22/2014','6/23/2014','6/24/2014','6/25/2014','6/26/2014','6/27/2014','6/28/2014','6/29/2014','6/30/2014','7/1/2014','7/2/2014','7/3/2014','7/4/2014','7/5/2014','7/6/2014','7/7/2014 - Added Click-to-Call Button','7/8/2014','7/9/2014','7/10/2014','7/11/2014','7/12/2014','7/13/2014','7/14/2014','7/15/2014','7/16/2014','7/17/2014 - DR Page Test','7/18/2014','7/19/2014','7/20/2014','7/21/2014 - Fios Inspired Mobile Page','7/22/2014 - Bigger Click-to-Call Mobile Button','7/23/2014','7/24/2014 - Package Page Wide Form','7/25/2014','7/26/2014','7/27/2014','7/28/2014','7/29/2014','7/30/2014','7/31/2014','8/1/2014','8/2/2014','8/3/2014','8/4/2014','8/5/2014','8/6/2014','8/7/2014','8/8/2014','8/9/2014','8/10/2014','8/11/2014','8/12/2014','8/13/2014','8/14/2014','8/15/2014','8/16/2014','8/17/2014','8/18/2014','8/19/2014 - Outfield Test','8/20/2014-Mobile Inline Form','8/21/2014','8/22/2014','8/23/2014','8/24/2014','8/25/2014 - Labor Day Promo','8/26/2014 - Labor Day Promo','8/27/2014 - Labor Day Promo','8/28/2014 - Labor Day Promo','8/29/2014 - Labor Day Promo','8/30/2014 - Labor Day Promo','8/31/2014 - Labor Day Promo','9/1/2014 - Labor Day Promo','9/2/2014 - Camera Promotion','9/3/2014 - Camera Promotion','9/4/2014 - Camera Promotion','9/5/2014 - Camera Promotion','9/6/2014 - Camera Promotion','9/7/2014 - Camera Promotion','9/8/2014 - Camera Promotion','9/9/2014 - Camera Promotion','9/10/2014 - Camera Promotion','9/11/2014 - Camera Promotion','9/12/2014 - Camera Promotion','9/13/2014 - Camera Promotion','9/14/2014 - Camera Promotion','9/15/2014','9/16/2014','9/17/2014','9/18/2014','9/19/2014','9/20/2014','9/21/2014','9/22/2014','9/23/2014','9/24/2014','9/25/2014','9/26/2014','9/27/2014','9/28/2014','9/29/2014 - October Promo','9/30/2014 - October Promo'],
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
            data: [{y:2.04},{y:2.08},{y:2.01},{y:1.93},{y:1.80},{y:1.84},{y:1.90, fillColor:'#FF835D', states: {hover: {fillColor: '#FF835D',}}},{y:1.91},{y:1.88},{y:1.90, fillColor:'#FF835D', states: {hover: {fillColor: '#FF835D',}}},{y:2.02},{y:2.20},{y:2.29},{y:2.36},{y:2.38},{y:2.40},{y:2.45},{y:2.48},{y:2.40},{y:2.36},{y:2.32},{y:2.38},{y:2.40},{y:2.39},{y:2.47},{y:2.48},{y:2.46},{y:2.40},{y:2.34},{y:2.30},{y:2.40, fillColor:'red', states: {hover: {fillColor: 'red',}}},{y:2.36},{y:2.42},{y:2.56},{y:2.62},{y:2.70},{y:2.69},{y:2.72},{y:2.74},{y:2.77},{y:2.76, fillColor:'red', states: {hover: {fillColor: 'red',}}},{y:2.92},{y:2.88},{y:2.91},{y:3.01, fillColor:'red', states: {hover: {fillColor: 'red',}}},{y:3.07, fillColor:'red', states: {hover: {fillColor: 'red',}}},{y:3.10},{y:3.16, fillColor:'red', states: {hover: {fillColor: 'red',}}},{y:3.19},{y:3.23},{y:3.26},{y:3.20},{y:3.19},{y:3.19},{y:3.16},{y:3.12},{y:3.10},{y:3.06},{y:3.13},{y:3.22},{y:3.27},{y:3.27},{y:3.22},{y:3.19},{y:3.22},{y:3.28},{y:3.28},{y:3.39},{y:3.41},{y:3.43},{y:3.46},{y:3.44},{y:3.45},{y:3.40, fillColor:'red', states: {hover: {fillColor: 'red',}}},{y:3.36, fillColor:'red', states: {hover: {fillColor: 'red',}}},{y:3.33},{y:3.49},{y:3.53},{y:3.60},{y:3.61, fillColor:'#F6DC85', states: {hover: {fillColor: '#F6DC85',}}},{y:3.68, fillColor:'#F6DC85', states: {hover: {fillColor: '#F6DC85',}}},{y:3.76, fillColor:'#F6DC85', states: {hover: {fillColor: '#F6DC85',}}},{y:3.87, fillColor:'#F6DC85', states: {hover: {fillColor: '#F6DC85',}}},{y:3.83, fillColor:'#F6DC85', states: {hover: {fillColor: '#F6DC85',}}},{y:3.93, fillColor:'#F6DC85', states: {hover: {fillColor: '#F6DC85',}}},{y:3.98, fillColor:'#F6DC85', states: {hover: {fillColor: '#F6DC85',}}},{y:3.86, fillColor:'#F6DC85', states: {hover: {fillColor: '#F6DC85',}}},{y:3.93, fillColor:'#F6DC85', states: {hover: {fillColor: '#F6DC85',}}},{y:3.86, fillColor:'#F6DC85', states: {hover: {fillColor: '#F6DC85',}}},{y:3.87, fillColor:'#F6DC85', states: {hover: {fillColor: '#F6DC85',}}},{y:3.98, fillColor:'#F6DC85', states: {hover: {fillColor: '#F6DC85',}}},{y:3.85, fillColor:'#F6DC85', states: {hover: {fillColor: '#F6DC85',}}},{y:3.88, fillColor:'#F6DC85', states: {hover: {fillColor: '#F6DC85',}}},{y:3.99, fillColor:'#F6DC85', states: {hover: {fillColor: '#F6DC85',}}},{y:3.90, fillColor:'#F6DC85', states: {hover: {fillColor: '#F6DC85',}}},{y:3.92, fillColor:'#F6DC85', states: {hover: {fillColor: '#F6DC85',}}},{y:3.88, fillColor:'#F6DC85', states: {hover: {fillColor: '#F6DC85',}}},{y:3.78, fillColor:'#F6DC85', states: {hover: {fillColor: '#F6DC85',}}},{y:3.91, fillColor:'#F6DC85', states: {hover: {fillColor: '#F6DC85',}}},{y:3.94},{y:3.93},{y:3.88},{y:3.88},{y:3.85},{y:3.83},{y:3.76},{y:3.61},{y:3.63},{y:3.77},{y:3.69},{y:3.76},{y:3.85},{y:3.87},{y:3.95},{y:4.00},{y:3.94}],
            color: "#B9F291"

        }, {
            name: 'Outbound (Forms)',
            data: [{y:2.15},{y:2.20},{y:2.18},{y:2.26},{y:2.30},{y:2.27},{y:2.23},{y:2.27},{y:2.25},{y:2.32},{y:2.24},{y:2.23},{y:2.25},{y:2.24},{y:2.17},{y:2.19},{y:2.12},{y:2.09},{y:1.99},{y:1.92},{y:1.86},{y:1.90},{y:1.85},{y:1.82},{y:1.78},{y:1.76},{y:1.73},{y:1.75},{y:1.70},{y:1.76},{y:1.76},{y:1.74},{y:1.80},{y:1.85},{y:1.83},{y:1.80},{y:1.79},{y:1.81},{y:1.80},{y:1.77},{y:1.76},{y:1.83},{y:1.90},{y:1.84},{y:1.82},{y:1.88},{y:1.87},{y:1.86},{y:1.83},{y:1.81},{y:1.84},{y:1.86},{y:1.81},{y:1.80},{y:1.84},{y:1.84},{y:1.90},{y:1.89},{y:1.87},{y:1.87},{y:1.84},{y:1.84},{y:1.82},{y:1.74},{y:1.80},{y:1.75},{y:1.73},{y:1.74},{y:1.66},{y:1.60},{y:1.59},{y:1.50},{y:1.54},{y:1.50},{y:1.55},{y:1.61},{y:1.68},{y:1.72},{y:1.79},{y:1.81},{y:1.88},{y:1.86},{y:1.88},{y:1.91},{y:1.99},{y:2.01},{y:2.15},{y:2.33},{y:2.44},{y:2.45},{y:2.46},{y:2.40},{y:2.40},{y:2.32},{y:2.24},{y:2.28},{y:2.33},{y:2.38},{y:2.45},{y:2.47},{y:2.45},{y:2.47},{y:2.46},{y:2.52},{y:2.48},{y:2.46},{y:2.40},{y:2.42},{y:2.36},{y:2.30},{y:2.21},{y:2.11},{y:2.12},{y:2.19},{y:2.34},{y:2.44}],
            color:"#50BF94"

        },
                 {name:'Optimization Test Wins',color:'#F72349'},{name:'Site-Wide Promotion',color:'#F6DC85'}]
    });
        // the line actions
      var hasPlotLine = true,
        hasPlotBand = true,
        chart = $('#container').highcharts();
    
       
    
     chart.xAxis[0].addPlotBand({
                from: 79,
                to: 99,
                color: '#F6DC85',
                id: 'plot-band-1'
            });
          chart.xAxis[0].addPlotBand({
                from: 114,
                to: 115,
                color: '#F6DC85',
                id: 'plot-band-1'
            });

            chart.xAxis[0].addPlotLine({
                value: 6,
                color: '#FF835D',
                width: 2,
                id: 'plot-line-1',
            });
    
           chart.xAxis[0].addPlotLine({
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
    //var hasPlotBand = false,
        
        
    
    

});