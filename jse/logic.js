$(document).ready(function() {
	$('#execute').click(executeCode)
});

function print(text) {
	$('#output').text($('#output').text() + text);
}

function executeCode() {
	let code = $('#code').val();
	$('#output').text("");
	let in1 = $('#in1').val();
	let in2 = $('#in2').val();
	
	eval(code);
}


