const array = ['element', 'test', 3, 4, 5];

const filteredArray = array.filter(function (element) {
	if (typeof element === 'number') {
		return element;
	}
});

console.log(filteredArray);

// for (let index = 0; index < array.length; index++) {
// 	const element = array[index];
// 	console.log(element);
// }
