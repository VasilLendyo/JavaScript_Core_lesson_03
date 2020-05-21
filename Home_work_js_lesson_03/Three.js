var arr = [ 'Apple', 'Orange', 'Cherry' ];
console.log(arr);

function find(arr, value) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == value) {
			console.log(i);
		} else {
			console.log('-1');
		}
	}
}

find(arr, 'Cherry');
