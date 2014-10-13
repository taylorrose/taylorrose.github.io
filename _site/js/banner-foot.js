$('#closed-offer, #open-button').click(function() {
	$('#closed-offer').hide();
	$('.open-offer').show();
});

$('#close-button').click(function() {
	$('#closed-offer').show();
	$('.open-offer').hide();
});