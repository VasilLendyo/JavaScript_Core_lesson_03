var s = 'my-short-string';

function camelize(str) {
	var arr = str.split('-');
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	str = arr.join('');
	console.log(str);
}

camelize(s);
