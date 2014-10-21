var visitsInTest = 12013;
var daysInTest = 14;
var monthlyEstimate = (visitsInTest / daysInTest) * 7 * 4.5;
var test1Min = 0.278952;
var ctl1Min = 0.216493;
var test1Max = 0.323952;
var ctlRRMax = 0.262893;
var minMaxArr = [Math.round((test1Min * monthlyEstimate) - (ctlRRMax * monthlyEstimate)),Math.round((test1Max * monthlyEstimate) - (ctl1Min * monthlyEstimate))];

var cumMonLead =[
    [minMaxArr[0]*(1),minMaxArr[1]*(1)],
    [minMaxArr[0]*(2),minMaxArr[1]*(2)],
    [minMaxArr[0]*(3),minMaxArr[1]*(3)],
    [minMaxArr[0]*(4),minMaxArr[1]*(4)],
    [minMaxArr[0]*(5),minMaxArr[1]*(5)],
    [minMaxArr[0]*(6),minMaxArr[1]*(6)]
];
    

//*********************************
var winningTest = "<em>Experience B</em>";
var today = new Date();
var currentMonth = today.getMonth();
var currentYear = parseInt(today.getFullYear().toString().substring(2));


function monthStr(month, addition) {
    var montharr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var addMonth = month + addition;
    var monthadj = addMonth - 12;
    if (addMonth > 11) {
        return montharr[monthadj]+" '"+(currentYear+1);
    } else {
        return montharr[addMonth]+" '"+(currentYear+0);
    }
}

var nextSixMonths = [];

for (i = 1; i < 7; i++) {
    nextSixMonths.push( monthStr(currentMonth, i));
}

/**************************************************
***************************************************
***************************************************/

$(function () {

    $('#containerCum').highcharts({

        chart: {
            type: 'columnrange',
            inverted: true
        },

        title: {
            text: 'Cumulative Monthly Lead Increase (Range)'
        },

        subtitle: {
            text: 'Winning Test: '+winningTest
        },

        xAxis: {
            categories: nextSixMonths
        },

        yAxis: {
            title: {
               // text: 'Range of Additional Leads from '+ winningTest
            },
            gridLineWidth: 0,
            tickLength: 8,
        tickWidth: 1,
        tickPosition: 'outside'
        },

        tooltip: {
            //valueSuffix: '°C'
        },

        plotOptions: {
            columnrange: {
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                       return this.y;
                    }
                }
            }
        },

        legend: {
            enabled: false
        },

        series: [{
            name: 'Leads',
            data: cumMonLead
        }]

    });

});