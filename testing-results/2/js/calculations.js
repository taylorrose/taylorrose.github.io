

	//Assumptions
$("#calculate").on("click",function(){

    var percentilSTN= parseInt($("#percentile").val());   
    var percentile = percentilSTN || 2;

    var installRev = parseInt($("#installRev").val()) || 59;
    var formCloseRate = parseInt($("#formCloseRate").val()) || 0.12;
    var callCloseRate = parseInt($("#callCloseRate").val()) || 0.18;

    $("installRev").html(
        (installRev*formCloseRate*monthlyEstimate*exp2Min)+(installRev*callCloseRate*monthlyEstimate*exp2Min_c)
            );
//Experience 1, refactored
    //notes: Taylor set this calculator up so that it would pass in some default values if the inputs were blank. I need to set up an eloquent fail solution for if they are blank.  /////// Perhaps alert something like "please enter a value for all fields", or maybe default to 0. Value's shouldn't be required for the experience names.



    //Experience 1

    // gather values from all inputs
    var exp1Name = $("#exp1-name").val() || "Test A";
    var exp1Visitors = $("#exp1-visitors").val() || 1000;
    var exp1Forms = $("#exp1-forms").val() || 50;
    var exp1Calls = $("#exp1-calls").val() || 50;
    //convert forms and calls to number, and add them together.
    var exp1Total = parseInt(exp1Forms) + parseInt(exp1Calls);

//FORMS
    // calculate FORMS response rate
    var exp1fRR = responseRate(exp1Visitors, exp1Forms);
    //convert FORMS response rate to a percent using toPercent function
    var exp1fRR_p = toPercent(exp1fRR, 2);
    //get FORMS standard error 
    var exp1Forms_se = se(exp1Forms,exp1Visitors);
    //get FORMS confidence interval
    var exp1Forms_ci = confInt(exp1Forms_se,percentile);

    var exp1Min = exp1fRR - exp1Forms_ci;
    var exp1Max = exp1fRR + exp1Forms_ci;
    var exp1fRR_TT = ((exp1fRR-exp1Forms_ci)*100).toFixed(2)+"% to "+((exp1fRR+exp1Forms_ci)*100).toFixed(2)+"%";

//CALLS
    // calculate CALLS response rate
    var exp1cRR = responseRate(exp1Visitors, exp1Calls);
    //convert CALLS response rate to a percent using toPercent function
    var exp1cRR_p = toPercent(exp1cRR, 2);
    //get CALLS standard error
    var exp1Calls_se = se(exp1Calls,exp1Visitors);
    //get CALLS confidence interval
    var exp1Calls_ci = confInt(exp1Calls_se,percentile);

    var exp1Min_c = exp1cRR - exp1Calls_ci;
    var exp1Max_c = exp1cRR + exp1Calls_ci;
    var exp1cRR_TT = ((exp1cRR-exp1Calls_ci)*100).toFixed(2)+"% to "+((exp1cRR+exp1Calls_ci)*100).toFixed(2)+"%";

//TOTALS
    //calculate TOTAL response rate
    var exp1tRR = responseRate(exp1Visitors, exp1Total);
    //convert TOTAL response rate to a percent using toPercent function
    var exp1tRR_p = toPercent(exp1tRR, 2);
    //get TOTAL standard error
    var exp1Total_se = se(exp1Total,exp1Visitors);
    //get TOTAL confidence interval
    var exp1Total_ci = confInt(exp1Total_se,percentile);

    var exp1Min_t = exp1tRR - exp1Total_ci;
    var exp1Max_t = exp1tRR + exp1Total_ci;
    var exp1tRR_TT = ((exp1tRR-exp1Total_ci)*100).toFixed(2)+"% to "+((exp1tRR+exp1Total_ci)*100).toFixed(2)+"%";


    //------------------------------------

    //Experience 2
    var exp2Name = $("#exp2-name").val() || "Test B";
    var exp2Visitors = $("#exp2-visitors").val() || 1000;
    var exp2Forms = $("#exp2-forms").val() || 70;
    var exp2Calls = $("#exp2-calls").val() || 70;
    var exp2Total = parseInt(exp2Forms) + parseInt(exp2Calls);

    var exp2fRR = responseRate(exp2Visitors, exp2Forms);
    var exp2fRR_p = toPercent(exp2fRR, 2);
    var exp2Forms_se = se(exp2Forms,exp2Visitors);
    var exp2Forms_ci = confInt(exp2Forms_se,percentile);
    var exp2Min = exp2fRR - exp2Forms_ci;
    var exp2Max = exp2fRR + exp2Forms_ci;
    var exp2fRR_TT = ((exp2fRR-exp2Forms_ci)*100).toFixed(2)+"% to "+((exp2fRR+exp2Forms_ci)*100).toFixed(2)+"%";

    var exp2cRR = responseRate(exp2Visitors, exp2Calls);
    var exp2cRR_p = toPercent(exp2cRR, 2);
    var exp2Calls_se = se(exp2Calls,exp2Visitors);
    var exp2Calls_ci = confInt(exp2Calls_se,percentile);
    var exp2Min_c = exp2cRR - exp2Calls_ci;
    var exp2Max_c = exp2cRR + exp2Calls_ci;
    var exp2cRR_TT = ((exp2cRR-exp2Calls_ci)*100).toFixed(2)+"% to "+((exp2cRR+exp2Calls_ci)*100).toFixed(2)+"%";

    var exp2tRR = responseRate(exp2Visitors, exp2Total);
    var exp2tRR_p = toPercent(exp2tRR, 2);
    var exp2Total_se = se(exp2Total,exp2Visitors);
    var exp2Total_ci = confInt(exp2Total_se,percentile);
    var exp2Min_t = exp2tRR - exp2Total_ci;
    var exp2Max_t = exp2tRR + exp2Total_ci;
    var exp2tRR_TT = ((exp2tRR-exp2Total_ci)*100).toFixed(2)+"% to "+((exp2tRR+exp2Total_ci)*100).toFixed(2)+"%";

    



    //Calculations

    //simple response rate (amount of responses divided by number of visitors)
    function responseRate(visitors, conversions) {
        return (conversions / visitors);
    }

    //convert decimal to a percent, give number of decimal places to include. RETURNS AS A STRING.
    function toPercent(toConvert, decimal) {
        var num = toConvert*100;
        return num.toFixed(decimal) + "%";
    }

    //calculates the standard error 
    function se(conversions, visitors) {
        var p = conversions / visitors;
        var a = p * (1 - p);
        var b = a / visitors;
        var standerr = Math.sqrt(b);
        return standerr;
    }

    function confInt(standerr, sig) {
        var perctl;
        switch (sig) {
            case 1:
                perctl = 1.28;
                break;
            case 2:
                perctl = 1.65;
                break;
            case 3:
                perctl = 1.96;
                break;
            case 4:
                perctl = 2.58;
                break;
        }
        return standerr * perctl;
    }
    
    function ciDisplay(input){
        var ci = input * 100;
        return "<div class='ci'>&plusmn"+ci.toFixed(2)+"%</div>";
    }

    function lift (rrControl,rr2){
        var num1 = ((rr2 - rrControl) / rrControl)*100;
        return num1.toFixed(2)+"%";
    }

    function zscore (P,N,Pc,Nc){
        var Ac = Pc*(1-Pc);
        var Bc = Ac/Nc;
        /********************/
        var A = P*(1-P);
        var B = A/N;
        /******************/
        var C = B + Bc;
        var Numerator = P - Pc;
        var Denomninator = Math.sqrt(C);
      
        return Numerator/Denomninator;
    }

    function cumnormdist(x) {
        var b1 = 0.319381530;
        var b2 = -0.356563782;
        var b3 = 1.781477937;
        var b4 = -1.821255978;
        var b5 = 1.330274429;
        var p = 0.2316419;
        var c = 0.39894228;
        var t;
        var taylor;
        var package;
        var exponent1;

        if (x >= 0) {

            t = 1.0 / (1.0 + p * x);
            exponent1 =  (-x * x) / 2.0;
            package = ( t *( t * ( t * ( t * b5 + b4 ) + b3 ) + b2 ) + b1 );
            taylor = 1.0 - c * Math.exp(exponent1) * t * package;
            return taylor;

        } else {
             t = 1.0 / (1.0 - p * x);
            exponent1 =  -x * x / 2.0;
            package = ( t *( t * ( t * ( t * b5 + b4 ) + b3 ) + b2 ) + b1 );
            taylor = (c * Math.exp(exponent1)) * t * package;
            return 1 - taylor;
        }
    }

    //Populate Experience Names
    $(".exp1 div.experience").html(exp1Name + " [CONTROL]");
    $(".exp2 div.experience").html(exp2Name);

    //Populate Metrics
    //$(".exp1 div.visitors").html(exp1Visitors);
    //$(".exp1 div.forms").html(exp1Forms);
    //$(".exp1 div.calls").html(exp1Calls);
    $(".exp1 div.total").html(exp1Total);

    $(".exp2 div.visitors").html(exp2Visitors);
    $(".exp2 div.forms").html(exp2Forms);
    $(".exp2 div.calls").html(exp2Calls);
    $(".exp2 div.total").html(exp2Total);

    //Populate Outbound Leads (Forms)
    $(".exp1 div.fRR").html(exp1fRR_p + " " + ciDisplay(exp1Forms_ci));
    $(".exp1 div.fRR").attr("data-content",exp1fRR_TT);

    $(".exp2 div.fRR").html(exp2fRR_p + " " + ciDisplay(exp2Forms_ci));
    $(".exp2 div.fRR").attr("data-content",exp2fRR_TT);
    $(".exp2 div.fLift").html(lift(exp1fRR,exp2fRR)+"<div class='ci'> ("+lift(exp1Max,exp2Min)+" to "+lift(exp1Min,exp2Max)+")</div>");
    $(".exp2 div.fConf").html((cumnormdist(zscore(exp2fRR,exp2Visitors,exp1fRR,exp1Visitors))*100).toFixed(2)+"%");

    //Populate Inbound Leads (Calls)
    $(".exp1 div.cRR").html(exp1cRR_p + " " + ciDisplay(exp1Calls_ci));
    $(".exp1 div.cRR").attr("data-content",exp1cRR_TT);

    $(".exp2 div.cRR").html(exp2cRR_p + " " + ciDisplay(exp2Calls_ci));
    $(".exp2 div.cRR").attr("data-content",exp2cRR_TT);
    $(".exp2 div.cLift").html(lift(exp1cRR,exp2cRR)+"<div class='ci'> ("+lift(exp1Max_c,exp2Min_c)+" to "+lift(exp1Min_c,exp2Max_c)+")</div>");
    $(".exp2 div.cConf").html((cumnormdist(zscore(exp2cRR,exp2Visitors,exp1cRR,exp1Visitors))*100).toFixed(2)+"%");

    //Populate Total Leads
    $(".exp1 div.tRR").html(exp1tRR_p + " " + ciDisplay(exp1Total_ci));
    $(".exp1 div.tRR").attr("data-content",exp1tRR_TT);

    $(".exp2 div.tRR").html(exp2tRR_p + " " + ciDisplay(exp2Total_ci));
    $(".exp2 div.tRR").attr("data-content",exp2tRR_TT);
    $(".exp2 div.tLift").html(lift(exp1tRR,exp2tRR)+"<div class='ci'> ("+lift(exp1Max_t,exp2Min_t)+" to "+lift(exp1Min_t,exp2Max_t)+")</div>");
    $(".exp2 div.tConf").html((cumnormdist(zscore(exp2tRR,exp2Visitors,exp1tRR,exp1Visitors))*100).toFixed(2)+"%");

    var fConfidence = cumnormdist(zscore(exp2fRR,exp2Visitors,exp1fRR,exp1Visitors));
    var cConfidence = cumnormdist(zscore(exp2cRR,exp2Visitors,exp1cRR,exp1Visitors));
    var tConfidence = cumnormdist(zscore(exp2tRR,exp2Visitors,exp1tRR,exp1Visitors));

    if(fConfidence >= 0.95) {
     $("#fConf-check").show();
     $("#fConf-att").hide();

    } else if (fConfidence <=0.85) {
         $("#fConf-check").hide();
        $("#fConf-att").show();

    } else {
     $("#fConf-check").hide();
     $("#fConf-att").hide();

    };

    if(cConfidence >= 0.95) {
     $("#cConf-check").show();
     $("#cConf-att").hide();

    } else if (cConfidence <=0.85) {
         $("#cConf-check").hide();
        $("#cConf-att").show();

    } else {
     $("#cConf-check").hide();
     $("#cConf-att").hide();

    };

    if(tConfidence >= 0.95) {
     $("#tConf-check").show();
     $("#tConf-att").hide();

    } else if (tConfidence <=0.85) {
         $("#tConf-check").hide();
        $("#tConf-att").show();
    } else {
     $("#tConf-check").hide();
     $("#tConf-att").hide();
    };

    if (!(percentile >= 0)){
    $(".ui.selection.dropdown").addClass("error");
    }else{
    $(".ui.selection.dropdown").removeClass("error");
    }


    $("div.ui.backSection").css("display","inline-block");
    $(".highchartsDisplay").css("display","inline-block");


    var visitsInTest = parseInt($("#exp1-visitors").val()) + parseInt($("#exp2-visitors").val()) || 2000;
    var daysInTest = $("#daysInTest").val() || 14;
    var monthlyEstimate = (visitsInTest / daysInTest) * 7 * 4.33333334;
    var test1Min = exp2Min_t;
    var ctl1Min = exp1Min_t;
    var test1Max = exp2Max_t;
    var ctlRRMax = exp1Max_t;


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
    var winningTest = "<em>"+exp2Name+"</em>";
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
    };

    /**************************************************
    ***************************************************
    ***************************************************/

    $(function () {

        $('#containerCum').highcharts({

            chart: {
                type: 'columnrange',
                inverted: false,
                  style: {
                fontFamily: 'Arial, Helvetica, sans-serif'

            }
            },

            title: {
                text: '<strong>Monthly Lead Increase (Range)</strong>'
            },

            subtitle: {
                text: 'Experience: '+winningTest
            },

            xAxis: {
                categories: nextSixMonths
                
            },

            yAxis: {
                title: {
                   text: 'Additional Leads'
                },
                gridLineWidth: 1,
                tickLength: 8,
            tickWidth: 1,
            tickPosition: 'outside',
             /*plotLines : [{
                        value : -13,
                        color : 'red',
                        dashStyle : 'shortdash',
                        width : 1,
                        
                    }]*/
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
                data: cumMonLead,
                color:"#A1CF64"
            }]

        });

    });
    var TRtest1Calls = parseInt(exp1Calls);
    var TRtest2Calls = parseInt(exp2Calls);
    var TRtest1Forms = parseInt(exp1Forms);
    var TRtest2Forms = parseInt(exp2Forms);
    $(function () {
        $('#containerRatio').highcharts({
            chart: {
                type: 'column',
                inverted: true,
                style:{
                    fontFamily:'Arial, Helvetica, sans-serif'

                }
            },
            legend:'none',
            title: {text:"<strong>Calls vs. Forms (% Total)</strong>"},
            xAxis: {
                categories: [exp1Name, exp2Name],
                tickLength:0
            },
            yAxis: {
                min: 0,
                title: 'none'
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                shared: true
            },
            plotOptions: {
                column: {
                    stacking: 'percent',

                }
            },
            series: [{
                name: 'Forms',
                data: [TRtest1Forms, TRtest2Forms],
                
                color:'#F05940'
            }, {
                name: 'Calls',
                data: [TRtest1Calls, TRtest2Calls],
                color:'#6ECFF5'
            }]
        });
    });

var minaddRev = Math.round( 
    (
      (installRev*formCloseRate*monthlyEstimate*exp2Min)+(installRev*callCloseRate*monthlyEstimate*exp2Min_c)//Minimum Experience 2 Rev
    ) - (
      (installRev*formCloseRate*monthlyEstimate*exp1Max)+(installRev*callCloseRate*monthlyEstimate*exp1Max_c)//Minus Maximum Experience 1 Rev
        ) 
    );

var maxaddRev = Math.round(
    (
        (installRev*formCloseRate*monthlyEstimate*exp2Max)+(installRev*callCloseRate*monthlyEstimate*exp2Max_c)//Maximum Experience 2 Rev
    ) - (
        (installRev*formCloseRate*monthlyEstimate*exp1Min)+(installRev*callCloseRate*monthlyEstimate*exp1Min_c)//Minus Minimum Experience 1 Rev
        )
    );
var revSymbol1 = "";
var revSymbol2 = "";

if (minaddRev<0) {
   revSymbol1 = "-$";
}else{
    revSymbol1="$";
};

if (maxaddRev<0) {
   revSymbol2 = "-$";
}else{
    revSymbol2="$";
};

    $("#addRev").html(
        revSymbol1+Math.abs(minaddRev).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")+" <span style='font-size:28px;'>to</span> "+
        revSymbol2+Math.abs(maxaddRev).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
            );

    $( document ).ready(function() {
        $( "text:contains('Highcharts.com')" ).hide();
    });

    $('.ui')
  .popup({
    position: 'left center',
    delay:0
  })
  ;
$("#result").show();
$("html, body").animate({ scrollTop: $(document).height() }, "slow");
});
