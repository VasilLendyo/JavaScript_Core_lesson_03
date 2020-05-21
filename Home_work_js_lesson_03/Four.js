var array = [ 11, 45, 47, 83, 19, 38, 26, 34, 89, 41, 70 ];
console.log(array);
function filterRange(array, a, b) {
	console.log(array.splice(a, b));
}

filterRange(array, 2, 6);
