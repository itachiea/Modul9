window.onload = function() {
	var button = document.getElementsByClassName("button");
	for(var i = 0; i < button.length; i++) {
		console.log(button[i].innerText);
	}
}