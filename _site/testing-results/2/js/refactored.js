//Pre Calculations - Get all data accessible
 
// get each experience, put in an array.
var allMetrics = document.getElementsByClassName('metrics');
var metrics = [];

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

/* 

After this step, all metrics are available as properties on each object in the metrics array.
	* Experience 1 is in metrics[0], Experience 2 is in metrics[1], experience n is in metrics[n-1]
	* each property is named by its class in the html (name, calls, forms, etc), and is accessible by calling it as a property
		ex: 
			to get calls for experience 1:
			"metrics[0].calls"
*/


//Functions - I've largely kept Taylor's functions as is. 

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

//Calculations - Here I'll take all the data from the pre-cal section, and then perform all the calculations on it. 

// First, create function to do all calculations, then run write loop to run all experiences through it. 
	//get response rate (visitors, conversion)
		//get it as a percentage
	//get standard error 
	//get confidence interval (standard error, sigma)
	//get minimum
	//get maximum

function testCalculations (visit, conver){
	var respRate = responseRate(visit,conver)
	var respRatePercent = toPercent(respRate, 2);
	var confidenceInterval = confInt(se(conver, visit), percentile);

	return "(" + respRate + "," + respRatePercent + "," + confidenceInterval +")";
}	





//JUNK YARD

// var elementsArray = document.getElementsByTagName('input');

// metrics = {};
// experienceTotals = [];

// (function (){
// 	for (var i = 0; i < elementsArray.length; i++) {
// 		if(elementsArray[i].id !== 'percentile' && elementsArray[i].id !== 'daysInTest' ){
// 			if(elementsArray[i].id.indexOf('name') > -1){
// 				metrics[elementsArray[i].id] = elementsArray[i].value;	
// 			}else{
// 				metrics[elementsArray[i].id] = parseInt(elementsArray[i].value, 10);
// 				// if(elementsArray[i].id.indexOf('form') > -1 || elementsArray[i].id.indexOf('call') > -1){
// 				// 	experienceTotals.push(elementsArray[i].id,parseInt(elementsArray[i].value, 10));
// 				// }
// 			}		
// 		}	
// 	}
	
// 	// metrics['exp1total']= metrics.exp1forms + metrics.exp1calls;
// 	// metrics['exp2total']= metrics.exp2forms + metrics.exp2calls;
// })();


///////////////////////



// function getVal (elementID) {
// 	var inputObj;
// 	var elementInput = document.getElementById(elementID);
// 	inputObj= {};
// 	inputObj[elementID] = elementInput.value;
// 	return inputArray.push(inputObj);
// }

// for (var i = 0; i < elementsArray.length; i++) {
// 	if( elementsArray[i].id != 'percentile' || elementsArray[i].id != 'daysInTest' ){
// 		getVal(elementsArray[i].id);
// 	}

// };

// //loop through elementsArray
// 	//make key-value object
// 	//key = id of element
// 	//value = value of input


// function getVal (elementID) {
// 	var inputObj = {};
// 	inputObj[elementID] = elementInput.value;
// 	return inputArray.push(inputObj);
// }