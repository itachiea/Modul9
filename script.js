window.onload = function() {
	var list = document.getElementById('list');
	var add = document.getElementById('addElem');
	var clickCount = 0;

	add.addEventListener('click', function() {
		var element = document.createElement('li');
		clickCount ++;
		element.innerText = 'item' + " " + clickCount;
		list.appendChild(element);
		}
	);

}