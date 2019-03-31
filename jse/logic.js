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


	try {
		eval(code); 
	} catch (e) {
		if (e instanceof SyntaxError) {
			print("Fehler! Zeile: " + e.lineNumber + "\n" + e.message);
		}
		else {
			print("Fehler!\n" + e);
		}
	}
}


