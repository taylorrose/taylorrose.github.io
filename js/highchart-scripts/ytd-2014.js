$(function () {
    $('#container').highcharts({
        chart: {
            type: 'area',
            backgroundColor:'transparent',
            zoomType : 'x'
        },
        
        title: {
            text: '2014 YTD Response Rates - 28 Day MPA'
        },
        subtitle: {
            text: 'Rollover Chart for Additional Information'
        },
       
        xAxis: {
            categories:['1/1/2014','1/2/2014','1/3/2014','1/4/2014','1/5/2014','1/6/2014','1/7/2014','1/8/2014','1/9/2014','1/10/2014','1/11/2014','1/12/2014','1/13/2014','1/14/2014','1/15/2014','1/16/2014','1/17/2014','1/18/2014','1/19/2014','1/20/2014','1/21/2014','1/22/2014','1/23/2014','1/24/2014','1/25/2014','1/26/2014','1/27/2014','1/28/2014','1/29/2014','1/30/2014','1/31/2014','2/1/2014','2/2/2014','2/3/2014','2/4/2014','2/5/2014','2/6/2014','2/7/2014','2/8/2014','2/9/2014','2/10/2014- HP: Banner Test PPC Security','2/11/2014- Solution: Alternate Disclaimer','2/12/2014- PPC: MVT: January Push Edition','2/13/2014- Affiliate: homesecuritysystems.net Banner','2/14/2014- Affiliate: ShopAtHome.com Banner','2/15/2014','2/16/2014','2/17/2014','2/18/2014','2/19/2014','2/20/2014- PPC: MVT: Green with Red Button','2/21/2014','2/22/2014','2/23/2014','2/24/2014','2/25/2014','2/26/2014','2/27/2014','2/28/2014','3/1/2014','3/2/2014','3/3/2014','3/4/2014','3/5/2014','3/6/2014','3/7/2014','3/8/2014','3/9/2014','3/10/2014- PPC: Control vs New Testimonial Layout','3/11/2014','3/12/2014','3/13/2014','3/14/2014','3/15/2014','3/16/2014','3/17/2014','3/18/2014','3/19/2014','3/20/2014','3/21/2014','3/22/2014','3/23/2014','3/24/2014','3/25/2014- HP: Comparison Chart','3/26/2014- PPC: Segmented: Wireless Security','3/27/2014','3/28/2014','3/29/2014','3/30/2014','3/31/2014','4/1/2014','4/2/2014','4/3/2014','4/4/2014','4/5/2014','4/6/2014','4/7/2014- PPC: Green with Red Button, Browsers 1280 and lower','4/8/2014','4/9/2014','4/10/2014- HP: 50% Off Promo','4/11/2014- PPC: 50 off and 1 month free','4/12/2014- Solutions Page 50% off and $1300','4/13/2014','4/14/2014-PPC: 4 Way: Controls vs Testimonials','4/15/2014','4/16/2014','4/17/2014','4/18/2014','4/19/2014','4/20/2014','4/21/2014','4/22/2014- Solutions Page $100 off Activation','4/23/2014- PPC: 100 off and Static Number Test','4/24/2014- HP:Featured In Icons','4/25/2014- HP: Video Banner Centered','4/26/2014-HP: $100 Off Activation','4/27/2014-Solutions Page $1300 Free Equipment Banner','4/28/2014- Package:Credibility Icon Test','4/29/2014','4/30/2014','5/1/2014- element existence test','5/2/2014','5/3/2014','5/4/2014','5/5/2014','5/6/2014','5/7/2014','5/8/2014','5/9/2014','5/10/2014','5/11/2014','5/12/2014','5/13/2014','5/14/2014','5/15/2014','5/16/2014','5/17/2014','5/18/2014','5/19/2014- Trust Icons','5/20/2014- Site wide Request Quote Page','5/21/2014','5/22/2014- HP: Affinity Model','5/23/2014','5/24/2014','5/25/2014','5/26/2014','5/27/2014','5/28/2014','5/29/2014','5/30/2014','5/31/2014','6/1/2014','6/2/2014- Local : Refer to Package Pages (sender)','6/3/2014','6/4/2014','6/5/2014- Solutions Page Great Values up to $1300','6/6/2014','6/7/2014','6/8/2014','6/9/2014- Solutions Package Creditability Icons','6/10/2014','6/11/2014','6/12/2014','6/13/2014','6/14/2014','6/15/2014','6/16/2014','6/17/2014','6/18/2014','6/19/2014','6/20/2014','6/21/2014','6/22/2014','6/23/2014','6/24/2014- PPC: A/B Cluster','6/25/2014','6/26/2014','6/27/2014','6/28/2014','6/29/2014','6/30/2014','7/1/2014','7/2/2014','7/3/2014','7/4/2014','7/5/2014','7/6/2014','7/7/2014','7/8/2014','7/9/2014','7/10/2014','7/11/2014','7/12/2014','7/13/2014','7/14/2014','7/15/2014','7/16/2014','7/17/2014','7/18/2014 -PPC DR Iter. 1','7/19/2014','7/20/2014','7/21/2014','7/22/2014','7/23/2014','7/24/2014','7/25/2014','7/26/2014','7/27/2014','7/28/2014','7/29/2014- Sitewide: Click to call mobile nav button','7/30/2014','7/31/2014','8/1/2014','8/2/2014','8/3/2014','8/4/2014','8/5/2014','8/6/2014','8/7/2014','8/8/2014','8/9/2014','8/10/2014','8/11/2014','8/12/2014','8/13/2014','8/14/2014','8/15/2014','8/16/2014','8/17/2014','8/18/2014','8/19/2014- PPC: Control vs DR Page','8/20/2014','8/21/2014','8/22/2014','8/23/2014','8/24/2014','8/25/2014','8/26/2014','8/27/2014- Package Page Wide Form','8/28/2014','8/29/2014','8/30/2014','8/31/2014','9/1/2014','9/2/2014','9/3/2014','9/4/2014','9/5/2014','9/6/2014','9/7/2014','9/8/2014','9/9/2014','9/10/2014- home page quiz V2','9/11/2014','9/12/2014','9/13/2014','9/14/2014','9/15/2014- PPC: DR Page VS. Security Page 2','9/16/2014','9/17/2014','9/18/2014','9/19/2014','9/20/2014','9/21/2014','9/22/2014- PPC: Outfield +1','9/23/2014','9/24/2014','9/25/2014- HP: Mobile Inline Form Test','9/26/2014- PPC: Outfield +2','9/27/2014','9/28/2014','9/29/2014','9/30/2014','10/1/2014','10/2/2014- HP: Page-Header part 2','10/3/2014- Mobile: 3 Offers: Red Button - V2','10/4/2014','10/5/2014','10/6/2014','10/7/2014- PPC: Placebo','10/8/2014','10/9/2014','10/10/2014','10/11/2014','10/12/2014','10/13/2014','10/14/2014','10/15/2014','10/16/2014','10/17/2014','10/18/2014','10/19/2014','10/20/2014','10/21/2014','10/22/2014','10/23/2014-2014: March: Account Center - Login: 50 Dollar Referral for US and NZ','10/24/2014-2014: March: Account Center - Dashboard: 50 Dollar Referral US and NZ','10/25/2014-PPC: Mobile feature vs DR Responsive','10/26/2014-PPC: Outfield +2 (Mobile)','10/27/2014-PPC Branded : HP vs. Jones Page','10/28/2014','10/29/2014']

,
            tickmarkPlacement: 'on',
            tickInterval: 35,
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Response Rate (%)'
            },
            labels: {
                format:'{value}%',
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
                        data: [{y:0.83},{y:0.82},{y:0.83},{y:0.82},{y:0.82},{y:0.80},{y:0.79},{y:0.78},{y:0.78},{y:0.76},{y:0.77},{y:0.78},{y:0.78},{y:0.77},{y:0.76},{y:0.73},{y:0.73},{y:0.72},{y:0.72},{y:0.71},{y:0.73},{y:0.73},{y:0.72},{y:0.70},{y:0.69},{y:0.69},{y:0.68},{y:0.68},{y:0.70},{y:0.70},{y:0.70},{y:0.69},{y:0.70},{y:0.70},{y:0.69},{y:0.70},{y:0.71},{y:0.71},{y:0.72},{y:0.72},{y:0.72},{y:0.71},{y:0.72},{y:0.74},{y:0.74},{y:0.75},{y:0.75},{y:0.76},{y:0.78},{y:0.82},{y:0.84},{y:0.86},{y:0.88},{y:0.89},{y:0.90},{y:0.92},{y:0.94},{y:0.94},{y:0.94},{y:0.95},{y:0.95},{y:0.96},{y:0.96},{y:0.96},{y:0.96},{y:0.95},{y:0.94},{y:0.94},{y:0.94},{y:0.96},{y:0.96},{y:0.94},{y:0.95},{y:0.95},{y:0.95},{y:0.95},{y:0.96},{y:0.95},{y:0.94},{y:0.94},{y:0.94},{y:0.94},{y:0.95},{y:0.95},{y:0.95},{y:0.96},{y:0.97},{y:0.98},{y:0.98},{y:0.99},{y:0.99},{y:1.01},{y:1.02},{y:1.04},{y:1.04},{y:1.05},{y:1.06},{y:1.07},{y:1.08},{y:1.09},{y:1.10},{y:1.09},{y:1.09},{y:1.08},{y:1.07},{y:1.06},{y:1.06},{y:1.05},{y:1.05},{y:1.05},{y:1.05},{y:1.06},{y:1.06},{y:1.05},{y:1.06},{y:1.05},{y:1.04},{y:1.04},{y:1.04},{y:1.05},{y:1.06},{y:1.06},{y:1.06},{y:1.06},{y:1.08},{y:1.08},{y:1.09},{y:1.10},{y:1.11},{y:1.11},{y:1.11},{y:1.13},{y:1.14},{y:1.15},{y:1.16},{y:1.17},{y:1.17},{y:1.18},{y:1.18},{y:1.19},{y:1.20},{y:1.21},{y:1.21},{y:1.22},{y:1.23},{y:1.21},{y:1.23},{y:1.22},{y:1.23},{y:1.22},{y:1.22},{y:1.21},{y:1.21},{y:1.21},{y:1.20},{y:1.19},{y:1.18},{y:1.17},{y:1.17},{y:1.17},{y:1.13},{y:1.11},{y:1.10},{y:1.09},{y:1.08},{y:1.07},{y:1.07},{y:1.06},{y:1.05},{y:1.05},{y:1.03},{y:1.02},{y:1.01},{y:1.03},{y:1.01},{y:1.01},{y:0.99},{y:0.99},{y:0.99},{y:0.98},{y:0.99},{y:0.99},{y:0.99},{y:0.98},{y:0.97},{y:0.96},{y:0.96},{y:0.96},{y:0.99},{y:1.01},{y:1.02},{y:1.03},{y:1.04},{y:1.05},{y:1.06},{y:1.06},{y:1.07},{y:1.09},{y:1.10},{y:1.11},{y:1.12},{y:1.14},{y:1.16},{y:1.17},{y:1.19},{y:1.21},{y:1.22},{y:1.23},{y:1.25},{y:1.25},{y:1.27},{y:1.30},{y:1.33},{y:1.35},{y:1.35},{y:1.38},{y:1.40},{y:1.42},{y:1.43},{y:1.45},{y:1.44},{y:1.45},{y:1.47},{y:1.50},{y:1.53},{y:1.54},{y:1.55},{y:1.56},{y:1.57},{y:1.60},{y:1.62},{y:1.64},{y:1.66},{y:1.68},{y:1.69},{y:1.70},{y:1.72},{y:1.76},{y:1.80},{y:1.82},{y:1.84},{y:1.86},{y:1.88},{y:1.88},{y:1.91},{y:1.92},{y:1.94},{y:1.98},{y:2.01},{y:2.02},{y:2.04},{y:2.06},{y:2.07},{y:2.10},{y:2.13},{y:2.15},{y:2.17},{y:2.18},{y:2.20},{y:2.20},{y:2.23},{y:2.24},{y:2.24},{y:2.25},{y:2.25},{y:2.24},{y:2.23},{y:2.23},{y:2.25},{y:2.24},{y:2.23},{y:2.26},{y:2.26},{y:2.29},{y:2.30},{y:2.29},{y:2.28},{y:2.28},{y:2.28},{y:2.30},{y:2.31},{y:2.31},{y:2.30},{y:2.30},{y:2.28},{y:2.28},{y:2.27},{y:2.28},{y:2.28},{y:2.28},{y:2.29},{y:2.29},{y:2.30},{y:2.32},{y:2.35},{y:2.34},{y:2.33},{y:2.33},{y:2.32},{y:2.31},{y:2.33},{y:2.41}]

,
            color: "#F5AA39"

        }, {
            name: 'Outbound NIS Leads (Forms)',
            data: [{y:1.55},{y:1.54},{y:1.54},{y:1.55},{y:1.52},{y:1.55},{y:1.59},{y:1.61},{y:1.63},{y:1.67},{y:1.66},{y:1.66},{y:1.63},{y:1.67},{y:1.58},{y:1.58},{y:1.57},{y:1.57},{y:1.58},{y:1.57},{y:1.55},{y:1.55},{y:1.54},{y:1.53},{y:1.51},{y:1.49},{y:1.48},{y:1.49},{y:1.50},{y:1.50},{y:1.49},{y:1.50},{y:1.53},{y:1.50},{y:1.45},{y:1.45},{y:1.43},{y:1.42},{y:1.42},{y:1.43},{y:1.45},{y:1.43},{y:1.47},{y:1.49},{y:1.50},{y:1.53},{y:1.52},{y:1.55},{y:1.54},{y:1.58},{y:1.59},{y:1.62},{y:1.64},{y:1.68},{y:1.70},{y:1.71},{y:1.70},{y:1.70},{y:1.71},{y:1.68},{y:1.69},{y:1.70},{y:1.70},{y:1.68},{y:1.72},{y:1.72},{y:1.73},{y:1.67},{y:1.66},{y:1.66},{y:1.67},{y:1.64},{y:1.64},{y:1.61},{y:1.58},{y:1.53},{y:1.53},{y:1.53},{y:1.51},{y:1.47},{y:1.48},{y:1.46},{y:1.47},{y:1.51},{y:1.53},{y:1.53},{y:1.54},{y:1.58},{y:1.56},{y:1.56},{y:1.57},{y:1.57},{y:1.53},{y:1.55},{y:1.53},{y:1.55},{y:1.57},{y:1.53},{y:1.50},{y:1.51},{y:1.47},{y:1.48},{y:1.52},{y:1.54},{y:1.54},{y:1.54},{y:1.53},{y:1.56},{y:1.53},{y:1.51},{y:1.48},{y:1.43},{y:1.42},{y:1.40},{y:1.39},{y:1.37},{y:1.40},{y:1.41},{y:1.42},{y:1.39},{y:1.40},{y:1.40},{y:1.39},{y:1.41},{y:1.38},{y:1.38},{y:1.40},{y:1.39},{y:1.42},{y:1.41},{y:1.39},{y:1.36},{y:1.34},{y:1.28},{y:1.30},{y:1.29},{y:1.29},{y:1.29},{y:1.31},{y:1.30},{y:1.26},{y:1.24},{y:1.21},{y:1.21},{y:1.18},{y:1.15},{y:1.12},{y:1.11},{y:1.10},{y:1.06},{y:1.06},{y:1.04},{y:1.05},{y:1.05},{y:1.03},{y:1.07},{y:1.04},{y:1.03},{y:1.04},{y:1.08},{y:1.11},{y:1.11},{y:1.06},{y:1.06},{y:1.05},{y:1.05},{y:1.02},{y:1.02},{y:1.03},{y:1.05},{y:1.05},{y:1.04},{y:1.03},{y:1.02},{y:1.03},{y:1.02},{y:1.00},{y:0.99},{y:0.98},{y:0.97},{y:0.97},{y:0.95},{y:0.94},{y:0.90},{y:0.90},{y:0.90},{y:0.89},{y:0.83},{y:0.82},{y:0.80},{y:0.82},{y:0.81},{y:0.82},{y:0.83},{y:0.85},{y:0.84},{y:0.82},{y:0.84},{y:0.83},{y:0.84},{y:0.87},{y:0.88},{y:0.89},{y:0.91},{y:0.93},{y:0.94},{y:0.95},{y:0.97},{y:0.98},{y:1.00},{y:1.05},{y:1.06},{y:1.07},{y:1.07},{y:1.08},{y:1.11},{y:1.10},{y:1.14},{y:1.16},{y:1.16},{y:1.17},{y:1.18},{y:1.17},{y:1.18},{y:1.20},{y:1.18},{y:1.18},{y:1.18},{y:1.14},{y:1.13},{y:1.11},{y:1.10},{y:1.08},{y:1.09},{y:1.09},{y:1.08},{y:1.07},{y:1.06},{y:0.99},{y:0.98},{y:0.98},{y:0.98},{y:0.99},{y:0.97},{y:1.01},{y:1.02},{y:1.03},{y:1.04},{y:1.03},{y:1.01},{y:1.03},{y:1.08},{y:1.07},{y:1.07},{y:1.11},{y:1.11},{y:1.15},{y:1.15},{y:1.15},{y:1.19},{y:1.25},{y:1.27},{y:1.26},{y:1.28},{y:1.28},{y:1.29},{y:1.32},{y:1.31},{y:1.33},{y:1.35},{y:1.37},{y:1.39},{y:1.37},{y:1.34},{y:1.35},{y:1.35},{y:1.36},{y:1.37},{y:1.36},{y:1.37},{y:1.40},{y:1.40},{y:1.41},{y:1.42},{y:1.42},{y:1.42},{y:1.45},{y:1.46},{y:1.43},{y:1.43},{y:1.48},{y:1.49},{y:1.51},{y:1.54},{y:1.55},{y:1.58},{y:1.56},{y:1.55},{y:1.53},{y:1.49},{y:1.50},{y:1.51}]


,
            color:"#ff8200"

        },
                 {name:'Significant Optimization Tests',color:'#2B9EA9'},{name:'Insignificant Optimization Tests',color:'#888888'}]
    });
        // the line actions
      var hasPlotLine = true,
        hasPlotBand = true,
        chart = $('#container').highcharts();
    
var addMonth = 31;
    
chart.xAxis[0].addPlotLine({
                value: 10 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
            chart.xAxis[0].addPlotLine({
                value: 12 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    chart.xAxis[0].addPlotLine({
                value: 13 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    
    
    
     chart.xAxis[0].addPlotLine({
                value: 19 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    
     chart.xAxis[0].addPlotLine({
                value: 52 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    
    chart.xAxis[0].addPlotLine({
                value: 65 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    chart.xAxis[0].addPlotLine({
                value: 68 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    
    chart.xAxis[0].addPlotLine({
                value: 69 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    chart.xAxis[0].addPlotLine({
                value: 70 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    
    chart.xAxis[0].addPlotLine({
                value: 72 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    chart.xAxis[0].addPlotLine({
                value: 80 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    
    chart.xAxis[0].addPlotLine({
                value: 81 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    chart.xAxis[0].addPlotLine({
                value: 82 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    
    chart.xAxis[0].addPlotLine({
                value: 83 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    chart.xAxis[0].addPlotLine({
                value: 84 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
chart.xAxis[0].addPlotLine({
                value: 85 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });    
    chart.xAxis[0].addPlotLine({
                value: 89 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    
    chart.xAxis[0].addPlotLine({
                value: 108 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    
    chart.xAxis[0].addPlotLine({
                value: 110 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    
    chart.xAxis[0].addPlotLine({
                value: 121 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    
    chart.xAxis[0].addPlotLine({
                value: 124 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
   
    
    chart.xAxis[0].addPlotLine({
                value: 128 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    
    chart.xAxis[0].addPlotLine({
                value: 143 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    
    chart.xAxis[0].addPlotLine({
                value: 221 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    
    chart.xAxis[0].addPlotLine({
                value: 226 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    
    chart.xAxis[0].addPlotLine({
                value: 233 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    
    chart.xAxis[0].addPlotLine({
                value: 243 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
    chart.xAxis[0].addPlotLine({
                value: 244 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
        chart.xAxis[0].addPlotLine({
                value: 248 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });
 chart.xAxis[0].addPlotLine({
                value: 266 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });    
    chart.xAxis[0].addPlotLine({
                value: 267 + addMonth,
                color: '#888888',
                width: 1,
                id: 'plot-line-1',
            });  
        
            
  
            chart.xAxis[0].addPlotLine({
                value: 9 + addMonth,
                color: '#2B9EA9',
                width: 2,
                id: 'plot-line-2'
            });
    
       chart.xAxis[0].addPlotLine({
                value: 11 + addMonth,
                color: '#2B9EA9',
                width: 2,
                id: 'plot-line-2'
            });
    

    chart.xAxis[0].addPlotLine({
                value: 37 + addMonth,
                color: '#2B9EA9',
                width: 2,
                id: 'plot-line-2'
            });
         chart.xAxis[0].addPlotLine({
                value: 53 + addMonth,
                color: '#2B9EA9',
                width: 2,
                id: 'plot-line-2'
            });
    
       chart.xAxis[0].addPlotLine({
                value: 69 + addMonth,
                color: '#2B9EA9',
                width: 2,
                id: 'plot-line-2'
            });
        
      
    chart.xAxis[0].addPlotLine({
                value: 85 + addMonth,
                color: '#2B9EA9',
                width: 2,
                id: 'plot-line-2'
            });
    
         chart.xAxis[0].addPlotLine({
                value: 86 + addMonth,
                color: '#2B9EA9',
                width: 2,
                id: 'plot-line-2'
            });
         chart.xAxis[0].addPlotLine({
                value: 107 + addMonth,
                color: '#2B9EA9',
                width: 2,
                id: 'plot-line-2'
            });
    chart.xAxis[0].addPlotLine({
                value: 167 + addMonth,
                color: '#2B9EA9',
                width: 2,
                id: 'plot-line-1',
            });
    chart.xAxis[0].addPlotLine({
                value: 178 + addMonth,
                color: '#2B9EA9',
                width: 2,
                id: 'plot-line-2'
            });
    chart.xAxis[0].addPlotLine({
                value: 199 + addMonth,
                color: '#2B9EA9',
                width: 2,
                id: 'plot-line-2'
            });
    chart.xAxis[0].addPlotLine({
                value: 207 + addMonth,
                color: '#2B9EA9',
                width: 2,
                id: 'plot-line-2'
            });
    chart.xAxis[0].addPlotLine({
                value: 236 + addMonth,
                color: '#2B9EA9',
                width: 2,
                id: 'plot-line-2'
            });
    chart.xAxis[0].addPlotLine({
                value: 237 + addMonth,
                color: '#2B9EA9',
                width: 2,
                id: 'plot-line-2'
            });
chart.xAxis[0].addPlotLine({
                value: 264 + addMonth,
                color: '#2B9EA9',
                width: 2,
                id: 'plot-line-2'
            });  
    chart.xAxis[0].addPlotLine({
                value: 265 + addMonth,
                color: '#2B9EA9',
                width: 2,
                id: 'plot-line-2'
            }); 
               chart.xAxis[0].addPlotLine({
                value: 267 + addMonth,
                color: '#B5A262',
                width: 1,
                id: 'plot-line-2'
            });
     chart.xAxis[0].addPlotLine({
                value: 268 + addMonth,
                color: '#B5A262',
                width: 1,
                id: 'plot-line-2'
            });
        // the band action
    //var hasPlotBand = false,
        
        
    
    

});
$( document ).ready(function() {
        $( "text:contains('Highcharts.com')" ).hide();
    });