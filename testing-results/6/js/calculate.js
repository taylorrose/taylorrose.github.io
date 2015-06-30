//Convert Query Params into arrays; Pass to variables
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var fillForms = getParameterByName("forms") ==="" ? "" : getParameterByName("forms").split(",").map(function(item) {
    return parseInt(item, 10);
});
var fillCalls = getParameterByName("calls") ==="" ? "" :getParameterByName("calls").split(",").map(function(item) {
    return parseInt(item, 10);
});
var fillVisitors = getParameterByName("visit") ==="" ? "" : getParameterByName("visit").split(",").map(function(item) {
    return parseInt(item, 10);
});

var fillNames = getParameterByName("names").split(",");
var fillExperienceNum = parseInt(getParameterByName("expnum"));
var fillPics = getParameterByName("pic") ==="" ? "" : getParameterByName("pic").split(",");

//Show the backsection, which normally is hidden - !! For Troubleshooting only !!
   // $("div.ui.backSection").css("display","inline-block");

//Add Experiences Button Click
var experienceNumber = 2; // This number defines the default number of experience rows to show on page load

//Set up listener to add experiences rows to calculator
$('#AddExperience').on('click' , function () {
    //First Capture the ID of last Row --> 'metrics2'
    var id_Metrics = $("#myTable tr:last").attr("id");
        //Pull out the '2' in 'metrics2' using regex
    var getID_MetricsNum = id_Metrics.match(/(\d+)/);
        //Make pulled number, e.g., '2', a number and increment. This returns the number of experiences in experiment
     experienceNumber = parseInt(getID_MetricsNum[1],10) + 1;
        //An array to convert numbers into letters - to populate later in field placeholder, e.g., [Experience C]
    var LetterArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ"];
    //Add a row to end of Metrics table
        //Include a unique ID and placeholder attributes in adding in the number of experiments
            //Includes a class of 'lastRow' so it can easily be targeted
    $("#myTable tr:last").after('<tr id = "metrics'+experienceNumber+'" class="exp'+experienceNumber+' metrics lastRow"><td><div class="ui input"><input type="text" id="exp'+experienceNumber+'-name" class="name" placeholder="Experience '+ LetterArray[experienceNumber-1]+'"></div></td><td><div class="ui input"><input type="text" id="exp'+experienceNumber+'-visitors"  class="visitors" placeholder="Visitors"></div></td><td><div class="ui input"><input type="text" id="exp'+experienceNumber+'-forms" class="forms" placeholder="Forms"></div></td><td><div class="ui input"><input type="text" id="exp'+experienceNumber+'-calls" class="calls" placeholder="Calls"></div></td><td ><div class="total"></div></td></tr>');
    //Added ID to <br> tag (I know...) so that I could place additional picture fields before the 'Calculate' button
        //Includes a class of 'lastRow' so it can easily be targeted
    $("#addPics").before('<h4 class="ui header lastRow" style="display:inline-block; margin-right:25px;"><div class="ui input"><input type="text" id="pic'+experienceNumber+'" placeholder="Experience '+LetterArray[experienceNumber-1]+' Image"></div></h4>');
    //Add a row to end of Totals table
        //Include a unique ID and class attributes in adding in the number of experiments
            //Includes a class of 'lastRow' so it can easily be targeted
    $("#tableTotals tr:last").after('<tr id = "total'+experienceNumber+'" class="exp'+experienceNumber+'  lastRow"><td ><div class="experience"></div></td><td ><div class="ui tRR"></div></td><td ><div class="tLift"></div></td><td ><i data-content="Confidence level exceeds 95% and is statistically signficant that randomness or noise is unlikely to be causing a false positive." id="tConf-check" class="ui green icon check"></i><i data-content="Confidence levels below 95% are not statistically significant and risk a false positive in the test. More data should be collected." id="tConf-att" class="ui orange icon attention"></i><div class="tConf"></div></td></tr>');
    //Add a row to end of Calls table
        //Include a unique ID and class attributes in adding in the number of experiments
            //Includes a class of 'lastRow' so it can easily be targeted
    $("#tableCalls tr:last").after('<tr id = "calls'+experienceNumber+'" class="exp'+experienceNumber+' lastRow"><td ><div class="experience"></div></td><td ><div class="ui cRR"></div></td><td ><div class="cLift"></div></td><td ><i data-content="Confidence level exceeds 95% and is statistically signficant that randomness or noise is unlikely to be causing a false positive." id="cConf-check" class="ui green icon check"></i><i data-content="Confidence levels below 95% are not statistically significant and risk a false positive in the test. More data should be collected." id="cConf-att" class="ui orange icon attention"></i><div class="cConf"></div></td></tr>');
    //Add a row to end of Forms table
        //Include a unique ID and class attributes in adding in the number of experiments
            //Includes a class of 'lastRow' so it can easily be targeted
    $("#tableForms tr:last").after('<tr id = "forms'+experienceNumber+'" class="exp'+experienceNumber+' lastRow"><td ><div class="experience"></div></td><td ><div class="ui fRR"></div></td><td ><div class="fLift"></div></td><td ><i data-content="Confidence level exceeds 95% and is statistically signficant that randomness or noise is unlikely to be causing a false positive." id="tConf-check" class="ui green icon check"></i><i data-content="Confidence levels below 95% are not statistically significant and risk a false positive in the test. More data should be collected." id="fConf-att" class="ui orange icon attention"></i><div class="fConf"></div></td></tr>');

    //Show the 'Remove Last Experience' button
    $('#removeLastExperiece').attr("style","display:inline-block");
    //Show the 'Reset' button
    $('#resetExperiece').attr("style","display:inline-block");
});

//Remove Experience Button Click - Listener to remove experience rows from table
$("#removeLastExperiece").on("click", function () {
    //Remove Last Row of Metrics, Totals, Calls, and Forms tables - Will only remove if class of 'lastRow' is present
        //Metrics Table
        $("#myTable tr.lastRow:last").remove();
        //Totals Table
        $("#tableTotals tr.lastRow:last").remove();
        //Calls Table
        $("#tableCalls tr.lastRow:last").remove();
        //Forms Table
        $("#tableForms tr.lastRow:last").remove();
        //Picture Fields
        $("#addPics").prev(".lastRow").remove();


        var id_Metrics = $("#myTable tr:last").attr("id");
        var getID_MetricsNum = id_Metrics.match(/(\d+)/);
         experienceNumber = parseInt(getID_MetricsNum[1],10);

        if(experienceNumber<=3){
            $('#removeLastExperiece').hide();
            $('#resetExperiece').hide();
        };
});

//Reset Button Click
$("#resetExperiece").on("click", function () {
    //Remove all elements with 'lastRow' class
    $(".lastRow").remove();
    //Remove 'Remove Last Experience' and 'Reset' Buttons
    $('#removeLastExperiece').hide();
    $('#resetExperiece').hide();
});

//Populate Open Fields on page load
for(h=2;h<fillExperienceNum;h++){
    $( "#AddExperience" ).click ();
}

for(n=0;n<fillExperienceNum+1;n++){
    var nameFieldFill = "#exp"+(n+1)+"-name"
    $(nameFieldFill).attr("value",fillNames[n]);
}

for(n=2;n<fillExperienceNum+1;n++){
    var nameFieldFill = "#exp"+(n+1)+"-visitors"
    $(nameFieldFill).attr("value",fillVisitors[n]);
}
    
for(n=2;n<fillExperienceNum+1;n++){
    var nameFieldFill = "#exp"+(n+1)+"-calls"
    $(nameFieldFill).attr("value",fillCalls[n]);
}

for(n=2;n<fillExperienceNum+1;n++){
    var nameFieldFill = "#exp"+(n+1)+"-forms"
    $(nameFieldFill).attr("value",fillForms[n]);
}

for(n=0;n<fillExperienceNum+1;n++){
    var nameFieldFill = "#pic"+(n+1)
    $(nameFieldFill).attr("value",fillPics[n]);
}





//Temporary Story responseRateObj globally for QA purposes
    var calculationsObj = [];
    var calls = [];
    var forms = [];
    var visitors = [];
    var metrics = [];
    var names = [];
    var testTitle = "Test Results";

   // var winnerTest;

$('#calculate').on('click' , function () {
    calls = [];
    forms = [];
    visitors = [];
    metrics = [];
    names= [];

    $("tr").css("color","rgba(0, 0, 0, 0.8)");
    $(".ci").css("color","rgba(0, 0, 0, 0.8)");

    //Pre Calculations - Get all data accessible
     
    // get each experience, put in an array.
    var allMetrics = document.getElementsByClassName('metrics');


    for (var j = 0; j < allMetrics.length; j++) {
        //from each experience, get the elements with an tag name of input
        var tempArray = allMetrics[j].getElementsByTagName('input');
        // temporary object to be pushed into the metrics array
        var tempObj = {};
        
        //loop through inputs,
        for (var i = 0; i < tempArray.length; i++) {
            //if the input is the experience name (id with 'name' in it), add it to the object with no changes. 
            if (tempArray[i].id.indexOf('name') > -1) {
                tempObj[tempArray[i].className] = tempArray[i].value;
            // if the input doesn't have 'name' in it, change it to a number, then add to object
            } else {
                tempObj[tempArray[i].className] = parseInt(tempArray[i].value, 10);
            }  
        }
        tempObj['total'] = tempObj.calls + tempObj.forms;
        // push the object to the metrics array
        metrics.push(tempObj);
    }
    //Populate All Total Leads Fields
    for (var t=1; t<=experienceNumber; t++){
        //Find CSS Element to populate
    var total_CSS_ID = ".exp"+t+" div.total";
        //Push result into CSS Element
    $(total_CSS_ID).html(metrics[t-1].total)
    }

    //Functions For Calculations
    function responseRate(visitors, conversions) {
        return (conversions / visitors);
    }

    function toPercent(toConvert, decimal) {
        var num = toConvert*100;
        return num.toFixed(decimal) + "%";
    }

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

    function lift (rrControl,rr2){
        var num1_TR = ((rr2 - rrControl) / rrControl);
        return num1_TR
        // return num1.toFixed(fixed2)+"%";
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

    //Confidence Interval Percentile
    var percentilSTN= parseInt($("#percentile").val());   
    var percentile = percentilSTN || 2;

    //Experiment Title
    testTitle = $("#test_title").val() || "Test Results";

    //////Create Calculations and Range Objects 
    calculationsObj = [];
    var leadTypes = ["forms","calls","total","f","c","t"];
    var calcTypes = ["rr","ci","lift","min","max","conf","liftMax","liftMin"];

    for(var calculations_i = 1; calculations_i <= experienceNumber; calculations_i++){
        var tempObj2 = {forms:{},calls:{},total:{}};
        calculationsObj.push(tempObj2);

        calls.push(metrics[calculations_i-1].calls);
        forms.push(metrics[calculations_i-1].forms);
        visitors.push(metrics[calculations_i-1].visitors);
        names.push(metrics[calculations_i-1].name);

    }

    for (var calcValue_i = 1; calcValue_i<=experienceNumber; calcValue_i++){

        for (var leadTypes_i =0; leadTypes_i <3; leadTypes_i++ ){
            var leadObject = leadTypes[leadTypes_i];
            //Response Rate 
           calculationsObj[calcValue_i-1][leadObject]["rr"] = responseRate(metrics[calcValue_i-1]["visitors"],metrics[calcValue_i-1][leadObject]);
           //Confidence Intervals
           calculationsObj[calcValue_i-1][leadObject]["ci"]  = confInt(se(metrics[calcValue_i-1][leadObject], metrics[calcValue_i-1].visitors), percentile);

        }
    }

    for (var rangeValue_i = 1; rangeValue_i<=experienceNumber; rangeValue_i++){
        for (var leadTypesR_i =0; leadTypesR_i <3; leadTypesR_i++ ){
            var leadObject = leadTypes[leadTypesR_i];
            //lift
            calculationsObj[rangeValue_i-1][leadObject]["lift"] = lift(calculationsObj[0][leadObject]["rr"],calculationsObj[rangeValue_i-1][leadObject]["rr"]);
            //min
            calculationsObj[rangeValue_i-1][leadObject]["min"] = calculationsObj[rangeValue_i-1][leadObject]["rr"] - calculationsObj[rangeValue_i-1][leadObject]["ci"];
            //max
            calculationsObj[rangeValue_i-1][leadObject]["max"] = calculationsObj[rangeValue_i-1][leadObject]["rr"] + calculationsObj[rangeValue_i-1][leadObject]["ci"];
            //conf
            calculationsObj[rangeValue_i-1][leadObject]["conf"] = cumnormdist(zscore(calculationsObj[rangeValue_i-1][leadObject]["rr"],metrics[rangeValue_i-1].visitors,calculationsObj[0][leadObject]["rr"],metrics[0].visitors));
        }

    }

    for (var final_i = 1; final_i<=experienceNumber; final_i++){
        for (var leadTypesF_i =0; leadTypesF_i <3; leadTypesF_i++ ){
        var leadObject = leadTypes[leadTypesF_i];
        //min Lift
        calculationsObj[final_i-1][leadObject]["liftMin"] = lift(calculationsObj[0][leadObject]["max"],calculationsObj[final_i-1][leadObject]["min"]);
        //max Lift
        calculationsObj[final_i-1][leadObject]["liftMax"] = lift(calculationsObj[0][leadObject]["min"],calculationsObj[final_i-1][leadObject]["max"]);
        }
    }

    $("i").show();

    //Populate Results Table
    for (var popRR_i = 1; popRR_i <= experienceNumber; popRR_i++){
        //Populate Experience Column
        var nameHTML = metrics[popRR_i-1].name || "Test"+popRR_i;
        $(".exp"+popRR_i+" .experience").html(nameHTML);
        //Populate RR, Lift, and Confidence Columns
        for (var popRR_ii = 0; popRR_ii <= 2; popRR_ii++){
            var rrCSSID2 = leadTypes[popRR_ii+3]+"RR";
            var rrCSSID = "#"+leadTypes[popRR_ii]+popRR_i+" div."+rrCSSID2;
            var rrHTML = toPercent(calculationsObj[popRR_i-1][leadTypes[popRR_ii]]["rr"],2)+"<div class='ci'>&plusmn;"+toPercent(calculationsObj[popRR_i-1][leadTypes[popRR_ii]]["ci"],2)+"</div>"

            var liftCSSID2 = leadTypes[popRR_ii+3]+"Lift";
            var liftCSSID = "#"+leadTypes[popRR_ii]+popRR_i+" div."+liftCSSID2;
            var liftHTML = toPercent( calculationsObj[popRR_i-1][leadTypes[popRR_ii]]["lift"],2 ) +"<div class='ci'>&nbsp;("+ toPercent(calculationsObj[popRR_i-1][leadTypes[popRR_ii]]["liftMin"],1)+" to "+toPercent(calculationsObj[popRR_i-1][leadTypes[popRR_ii]]["liftMax"],1) +")</div>";

            var confCSSID2 = leadTypes[popRR_ii+3]+"Conf";
            var confCSSID = "#"+leadTypes[popRR_ii]+popRR_i+" div."+confCSSID2;
            var confindenceDecimal = calculationsObj[popRR_i-1][leadTypes[popRR_ii]]["conf"];

            var confHTML = toPercent(confindenceDecimal,1 );


            $(rrCSSID).html(rrHTML);
            $(liftCSSID).html(liftHTML);
            $(confCSSID).html(confHTML);

            var iconCSSID = ".exp"+popRR_i+" i#"+leadTypes[popRR_ii+3]+"Conf-";
            var iconCSSID2="att";
            var iconCSSID3="check";
            if (confindenceDecimal >0.95){
                iconCSSID2 = "att";
                iconCSSID3 =iconCSSID+iconCSSID2;
                $(iconCSSID3).hide();

            }else if (confindenceDecimal<0.90){
                iconCSSID2 = "check";
                iconCSSID3 =iconCSSID+iconCSSID2;
                $(iconCSSID3).hide();
            }else {
                var iconNone1 =iconCSSID+iconCSSID2;
                var iconNone2 = iconCSSID+iconCSSID3;
                $(iconNone1).hide();
                $(iconNone2).hide();

            };

        }

    }
    var picID ="";
    var picNumber ="";
    var picArr = [];
    for(var PICi = 1; PICi<=experienceNumber; PICi++){
        picID = "#pic"+PICi;

        picNumber = $(picID).val();
        picArr.push(picNumber);

    }

    //Populate URL
    var daysInTest = $("#daysInTest").val() || 14;
    var date = new Date();
    var embeddURL = 
    "?title="+ encodeURIComponent(testTitle)+
    "&names=" + encodeURIComponent(names) + 
    "&expnum=" + experienceNumber + 
    "&forms=" + forms + 
    "&calls=" + calls +
    "&visit=" + visitors +
    "&days="  + daysInTest +
    "&pic="  + encodeURIComponent(picArr) +
   // "&pic2="  + encodeURIComponent(pic2) +
    "&confint=" + percentile +
    //"&instrev=" + installRev +
    //"&formcr=" + formCloseRate * 100 +
    //"&callcr=" + callCloseRate *100 +
     "&date="+encodeURIComponent(date.toLocaleString());
    $("a").attr("href",embeddURL);
    $("#linksy").show();


    // document.location.replace(embeddURL);

    $("#embedURL").attr("value",document.location.origin + document.location.pathname +"embedd/"+ embeddURL);
    $("#shareable").attr("href",document.location.origin + document.location.pathname +"embedd/"+ embeddURL)

    //Identify and Highlight Winners
    function maxArr(arr,stringName) {
        var max = arr[0];
        var maxIndex = 0;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }
        return "#"+stringName + (maxIndex + 1);
    }

    function maxArrIndex(arr) {
        var max = arr[0];
        var maxIndex = 0;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }
        return maxIndex;
    }


    var formsResponseArr = [];
    var callsResponseArr = [];
    var totalResponseArr = [];

    for (var q = 0; q < calculationsObj.length; q++){
        formsResponseArr.push(calculationsObj[q].forms.rr);
        callsResponseArr.push(calculationsObj[q].calls.rr);
        totalResponseArr.push(calculationsObj[q].total.rr);
    }

    var formWinner = maxArr(formsResponseArr,"forms");
    var callWinner = maxArr(callsResponseArr,"calls");
    var totalWinner = maxArr(totalResponseArr,"total");
    var totalWinnerIndex = maxArrIndex(totalResponseArr);

    //
    $(formWinner+" > td:nth-child(1) > div").prepend("<i class='trophy small icon' style='color:#666666'></i>");
    $(callWinner+" > td:nth-child(1) > div").prepend("<i class='trophy small icon' style='color:#666666'></i>");
    $(totalWinner+" > td:nth-child(1) > div").prepend("<i class='trophy small icon' style='color:#666666'></i>");
    //
    $(formWinner).css("background-color","#d9f5ff");
    $(callWinner).css("background-color","#d9f5ff");
    $(totalWinner).css("background-color","#d9f5ff");
    //

    //*********************************
    var controlLeads = metrics[0].total;
    var Temp_daysInTest = $("#daysInTest").val();
    var monthlyEstimate = (controlLeads / Temp_daysInTest) * 7 * 4.5;
    var Temp_exp2RRMin = 0.278952;
    var Temp_ctlRRMin = 0.216493;
    var Temp_exp2RRMax = 0.323952;
    var ctlRRMax = 0.262893;

    var Temp_min = (1+calculationsObj[totalWinnerIndex].total.liftMin) * monthlyEstimate;
    var Temp_max = (1+calculationsObj[totalWinnerIndex].total.liftMax) * monthlyEstimate;

    var Temp_cumMonLead = [];
    for(var vip = 1; vip<=6; vip++){
        Temp_cumMonLead.push([Temp_min.toFixed(0)*(vip),Temp_max.toFixed(0)*(vip)]);
    }

    var Temp_winningTest = "<em>"+metrics[totalWinnerIndex].name+"</em>";
    var Temp_today = new Date();
    var Temp_currentMonth = Temp_today.getMonth();
    var Temp_currentYear = parseInt(Temp_today.getFullYear().toString().substring(2));


    function monthStr(month, addition) {
        var montharr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var addMonth = month + addition;
        var monthadj = addMonth - 12;
        if (addMonth > 11) {
            return montharr[monthadj]+" '"+(Temp_currentYear+1);
        } else {
            return montharr[addMonth]+" '"+(Temp_currentYear+0);
        }
    }

    var Temp_nextSixMonths = [];

    for (i = 1; i < 7; i++) {
        Temp_nextSixMonths.push( monthStr(Temp_currentMonth, i));
    }

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
                text: '<strong>Monthly Lead Increase (Range)</strong>',
                 style: {
                fontFamily: 'Arial, Helvetica, sans-serif',
                color: "#808080"
            }
            },

            subtitle: {
                text: 'Exp: '+Temp_winningTest
            },

            xAxis: {
                categories: Temp_nextSixMonths
            },

            yAxis: {
                title: {
                    text: 'Additional Leads'
                }
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
                data: Temp_cumMonLead,
                color:"#6ECFF5"
            }]

        });

    });

    var Temp_winningForms = metrics[totalWinnerIndex].forms;
    var Temp_winningCalls = metrics[totalWinnerIndex].calls;
    var Temp_controlForms =metrics[0].forms;
    var Temp_controlCalls =metrics[0].calls;
    var Temp_callRatio = (Temp_winningCalls/(Temp_winningCalls+Temp_winningForms))*100;
        
    $(function () {
        $('#containerRatio').highcharts({
            chart: {
                type: 'bar'
            },
            legend: {
                itemStyle: {
                    color: '#808080'
                }
            },
            title: {
                text: '<strong>Percent Calls </strong>('+Temp_callRatio.toFixed(0)+"%)",
                style: {
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    color: '#808080'
                }
            },
            xAxis: {
                categories: ['Control', '<strong>Top Exp.</strong>']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Percent of Leads'
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                shared: true
            },
            plotOptions: {
                bar: {
                    stacking: 'percent'
                }
            },
            series: [{
                name: 'Calls',
                data: [Temp_controlCalls, Temp_winningCalls],
                color:'#6ECFF5',
                index:1,
                legendIndex:0
            }, {
                name: 'Forms',
                data: [Temp_controlForms, Temp_winningForms],
                color:'#bccdd6',
                index:0,
                legendIndex:1
            }]
        });
    });

    $("div.ui.backSection").css("display","inline-block");
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");

});


$("#test_title").attr("value",getParameterByName("title"));

$("#exp1-name").attr("value",fillNames[0]);
$("#exp2-name").attr("value",fillNames[1]);

$("#exp1-visitors").attr("value",fillVisitors[0]);
$("#exp2-visitors").attr("value",fillVisitors[1]);

$("#exp1-forms").attr("value",fillForms[0]);
$("#exp2-forms").attr("value",fillForms[1]);

$("#exp1-calls").attr("value",fillCalls[0]);
$("#exp2-calls").attr("value",fillCalls[1]);

$("#daysInTest").attr("value",getParameterByName("days"));


//Capture Images
var pic1 = $("#pic1").val();
var pic2 = $("#pic2").val();

//Populate URL
var daysInTest = $("#daysInTest").val() || 14;

$('.ui.dropdown').dropdown();
