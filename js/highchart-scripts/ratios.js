$(function () {
    $('#containerRatio').highcharts({
        chart: {
            type: 'column',
            inverted:true
        },
        legend: {
            enabled: false
        },
        title: {
            text: 'Forms Vs Calls - June 2014'
        },
        xAxis: {
            categories: ['Paid', 'Organic']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percent Lead Mix'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: [{
            name: 'Calls',
            data: [1.8, 1.21],
            color:'#92B0DF'
        }, {
            name: 'Forms',
            data: [2.3, 0.62],
            color:'#3C5178'
        }]
    });
});