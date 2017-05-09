$('#myForm').submit(function() {
	event preventDefault();

	console.log(event);

	var nmae = $('#name-input').val();
	$('#target').text(name);
})

$('#name-input') keyup(function)