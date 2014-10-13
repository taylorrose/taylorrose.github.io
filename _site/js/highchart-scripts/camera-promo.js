$(function () {
    $('#container2').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Camera Promo'
        },
        subtitle: {
            text: 'September 3, 2014 - September 14 2014'
        },
        xAxis: {
            categories:['9/3','9/4','9/5','9/6','9/7','9/8','9/9','9/10','9/11','9/12','9/13','9/14']

        },
        yAxis: {
            title: {
                text: 'Total Response Rate (%)'
            },labels: {
                valueSuffix:"%"
            },
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true,
                    valueSuffix:"%"
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Camera Promo',
            data: [4.80,4.56,5.09,3.69,3.68,5.14,4.83,5.14,4.69,4.82,4.71,4.46], color:'#7030a0',lineWidth:'4px'

        }, {
            name: 'Control Dates',
            data: [4.05,3.83,3.83,3.32,3.21,4.39,4.10,4.05,3.83,3.83,3.32,3.21],
                   dashStyle: 'shortdash', color:'#F6DC85',

        }]
    });
});