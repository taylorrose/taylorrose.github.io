$(function () {
    $('#containerBPS').highcharts({
        chart: {
            
        },
        title: {
            text: '<strong>Monthly Increase by Call Response</strong>'
        },
        xAxis: [{
            title: {
                text: 'Basis Points (1/100 of a percent)',
                
            }
            
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '${value}'/2,
                style: {
                    color:'#ff8200'
                }
            },
            title: {
                text: 'NPV Increase ($)',
                style: {
                    color:'#ff8200'
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Additional Accounts',
                style: {
                    color: '#2B9EA9'
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: '#2B9EA9'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: 'Accounts',
            type: 'line',
            yAxis: 1,
            data: [0,9,18,27,35,44,53,62,71,80,88,97,106,115,124,133,141,150,159,168,177,186,195,203,212,221,230,239,248,256,265,274,283,292,301,309,318,327,336,345,354,363,371,380,389,398,407,416,424,433,442,451,460,469,478,486,495,504,513,522,531,539,548,557,566,575,584,592,601,610,619,628,637,646,654,663,672,681,690,699,707,716,725,734,743,752,760,769,778,787,796,805,814,822,831,840,849,858,867,875,884,893,902,911,920,928,937,946,955,964,973,982,990,999,1008,1017,1026,1035,1043,1052,1061,1070,1079,1088,1096,1105,1114,1123,1132,1141,1150,1158,1167,1176,1185,1194,1203,1211,1220,1229,1238,1247,1256,1264,1273,1282,1291,1300,1309,1318,1326,1335,1344,1353,1362,1371,1379,1388,1397,1406,1415,1424,1433,1441,1450,1459,1468,1477,1486,1494,1503,1512,1521,1530,1539,1547,1556,1565,1574,1583,1592,1601,1609,1618,1627,1636,1645,1654,1662,1671,1680,1689,1698,1707,1715,1724,1733,1742,1751,1760,1769,1777,1786,1795,1804,1813,1822,1830,1839,1848,1857,1866,1875,1883,1892,1901,1910,1919,1928,1937,1945,1954,1963,1972,1981,1990,1998,2007,2016,2025,2034,2043,2051,2060,2069,2078,2087,2096,2105,2113,2122,2131,2140,2149,2158,2166,2175,2184,2193,2202,2211],
            color:'#2B9EA9',
            lineWidth:5
        }, {
            name: 'NPV',
            type: 'line',
            data: [0,20142.15,40284.30,60426.45,80568.60,100710.75,120852.89,140995.04,161137.19,181279.34,201421.49,221563.64,241705.79,261847.94,281990.09,302132.24,322274.38,342416.53,362558.68,382700.83,402842.98,422985.13,443127.28,463269.43,483411.58,503553.73,523695.87,543838.02,563980.17,584122.32,604264.47,624406.62,644548.77,664690.92,684833.07,704975.22,725117.36,745259.51,765401.66,785543.81,805685.96,825828.11,845970.26,866112.41,886254.56,906396.71,926538.85,946681.00,966823.15,986965.30,1007107.45,1027249.60,1047391.75,1067533.90,1087676.05,1107818.20,1127960.34,1148102.49,1168244.64,1188386.79,1208528.94,1228671.09,1248813.24,1268955.39,1289097.54,1309239.69,1329381.83,1349523.98,1369666.13,1389808.28,1409950.43,1430092.58,1450234.73,1470376.88,1490519.03,1510661.18,1530803.32,1550945.47,1571087.62,1591229.77,1611371.92,1631514.07,1651656.22,1671798.37,1691940.52,1712082.67,1732224.82,1752366.96,1772509.11,1792651.26,1812793.41,1832935.56,1853077.71,1873219.86,1893362.01,1913504.16,1933646.31,1953788.45,1973930.60,1994072.75,2014214.90,2034357.05,2054499.20,2074641.35,2094783.50,2114925.65,2135067.80,2155209.94,2175352.09,2195494.24,2215636.39,2235778.54,2255920.69,2276062.84,2296204.99,2316347.14,2336489.29,2356631.43,2376773.58,2396915.73,2417057.88,2437200.03,2457342.18,2477484.33,2497626.48,2517768.63,2537910.78,2558052.92,2578195.07,2598337.22,2618479.37,2638621.52,2658763.67,2678905.82,2699047.97,2719190.12,2739332.27,2759474.41,2779616.56,2799758.71,2819900.86,2840043.01,2860185.16,2880327.31,2900469.46,2920611.61,2940753.76,2960895.90,2981038.05,3001180.20,3021322.35,3041464.50,3061606.65,3081748.80,3101890.95,3122033.10,3142175.25,3162317.39,3182459.54,3202601.69,3222743.84,3242885.99,3263028.14,3283170.29,3303312.44,3323454.59,3343596.74,3363738.89,3383881.03,3404023.18,3424165.33,3444307.48,3464449.63,3484591.78,3504733.93,3524876.08,3545018.23,3565160.38,3585302.52,3605444.67,3625586.82,3645728.97,3665871.12,3686013.27,3706155.42,3726297.57,3746439.72,3766581.87,3786724.01,3806866.16,3827008.31,3847150.46,3867292.61,3887434.76,3907576.91,3927719.06,3947861.21,3968003.36,3988145.50,4008287.65,4028429.80,4048571.95,4068714.10,4088856.25,4108998.40,4129140.55,4149282.70,4169424.85,4189566.99,4209709.14,4229851.29,4249993.44,4270135.59,4290277.74,4310419.89,4330562.04,4350704.19,4370846.34,4390988.48,4411130.63,4431272.78,4451414.93,4471557.08,4491699.23,4511841.38,4531983.53,4552125.68,4572267.83,4592409.97,4612552.12,4632694.27,4652836.42,4672978.57,4693120.72,4713262.87,4733405.02,4753547.17,4773689.32,4793831.46,4813973.61,4834115.76,4854257.91,4874400.06,4894542.21,4914684.36,4934826.51,4954968.66,4975110.81,4995252.96,5015395.10,5035537.25],
            tooltip: {
                valuePrefix: '$'
            },
            color:'#ff8200',
            lineWidth:5
        }]
    });
});

var hasPlotLine = true,
        hasPlotBand = true,
        chart = $('#containerBPS').highcharts();

 chart.xAxis[0].addPlotLine({
                value: 3,
                color: '#2B9EA9',
                width: 2,
                id: 'plot-line-2'
            });

$( document ).ready(function() {
        $( "text:contains('Highcharts.com')" ).hide();
    });