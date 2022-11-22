var userName = 'John'; //string
var age = 23; //number
var birthYear = 1900;
var isMarried = false; //boolean  true false
//    = . John + 1923 + false
var result =
	'Salom ' +
	userName +
	',\n  Yoshingiz-' +
	age +
	'da' +
	"\n Tug'ilgan yilingiz " +
	birthYear;

alert(result);
const elForm = document.querySelector('form');
const elInputNumber = elForm.querySelector('.number');
const elResultText = document.querySelector('.result-name');

// var - variable
//  123

// 15 % 3 == 0  // Fizz
// 15 % 5 == 0 // Buzz
// 15 % 3 == 0  && 15 % 5 === 0  // FizzBuzz
// 15 % 3 != 0 && 15 % 5 !== 0  // 15

elForm.addEventListener('submit', function (e) {
	elResultText.textContent = 'Natija:';
	e.preventDefault();
	var number = Number(elInputNumber.value);

	console.log(number);

	if (number % 3 === 0 && number % 5 === 0) {
		elResultText.textContent += ' FizzBuzz';
	} else if (number % 3 === 0) {
		elResultText.textContent += ' Fizz';
	} else if (number % 5 === 0) {
		elResultText.textContent += ' Buzz';
	} else {
		elResultText.textContent += number;
	}
});
