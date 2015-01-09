$("#calculate").on("click",function(){
// Assumptions
var call_CR_INPUT = $("#call_CR").val();
var form_CR_INPUT = $("#form_CR").val();
var extractPercent = /(\d+)/g;
var extractPercent2 = /(\d+)/g;
var call_CR_regex = extractPercent.exec(call_CR_INPUT);
var form_CR_regex = extractPercent2.exec(form_CR_INPUT);
var call_CR = parseInt(call_CR_regex[1]);
var form_CR = parseInt(form_CR_regex[1]);




var inbound_conversionRate = call_CR/100 || 0.19;
var outbound_conversionRate = form_CR/100 || 0.12;
var call_percent_increaseTR = 0.05;
//Static
var total_hypothetical_leads = 1000;
var call_hypothetical_mix = 0.5;
var form_hypothetical_mix = 0.5;
//Dynamic
var call_hypothetical_installs = inbound_conversionRate*total_hypothetical_leads*call_hypothetical_mix;
var form_hypothetical_installs = outbound_conversionRate*total_hypothetical_leads*form_hypothetical_mix;
var total_hypothetical_installs = call_hypothetical_installs+form_hypothetical_installs;
var lifted_calls_mix = (call_percent_increaseTR+1)*call_hypothetical_mix;

var new_hypo_call_installs = inbound_conversionRate*total_hypothetical_leads*lifted_calls_mix;
var new_hypo_form_installs = total_hypothetical_installs - new_hypo_call_installs;

var lowered_forms_mix = new_hypo_form_installs/outbound_conversionRate/total_hypothetical_leads;
var form_percent_decreaseTR = (lowered_forms_mix/form_hypothetical_mix)-1;

var call_increase = Math.round(call_percent_increaseTR*100)+"%";
var form_decrease =Math.round(Math.abs(form_percent_decreaseTR)*100)+"%";

$("#call_percent").html(call_increase);
$("#form_percent").html(form_decrease);
}
);