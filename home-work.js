const elInput = document.querySelector('#number');
const elForm = document.querySelector('form');
const elBox1 = document.querySelector('.box1');
const elBox2 = document.querySelector('.box2');
const elBtns = document.querySelector('.btns');

const elBtn0 = document.querySelector('#b0');
const elBtn1 = document.querySelector('#b1');
const elBtn2 = document.querySelector('#b2');
const elBtn3 = document.querySelector('#b3');
const elBtn4 = document.querySelector('#b4');
const elBtn5 = document.querySelector('#b5');
const elBtn6 = document.querySelector('#b6');
const elBtn7 = document.querySelector('#b7');
const elBtn8 = document.querySelector('#b8');
const elBtn9 = document.querySelector('#b9');
const elHeader = document.querySelector('header');

function eventsHandler(btnNumber, value = 10) {
	btnNumber.addEventListener('click', function () {
		if (elInput.value < value && elInput.value !== 0) {
			elInput.value += btnNumber.value;
		}
	});
}

window.addEventListener('scroll', function (e) {
	console.log(window.pageYOffset);

	if (window.pageYOffset > 0) {
		elHeader.style.background = 'gray';
		elHeader.style.height = '100px';
	} else {
		elHeader.style.background = 'red';
		elHeader.style.height = '200px';
	}
});

eventsHandler(elBtn0, 10);
eventsHandler(elBtn1);
eventsHandler(elBtn2);
eventsHandler(elBtn3);
eventsHandler(elBtn4);
eventsHandler(elBtn5);
eventsHandler(elBtn6);
eventsHandler(elBtn7);
eventsHandler(elBtn8);
eventsHandler(elBtn9);

// elBtn1.addEventListener('click', function () {
// 	if (elInput.value < 10) {
// 		elInput.value += elBtn1.value;
// 	}
// });

const clickHandler = function (e) {
	e.preventDefault();

	if (
		elInput.value !== '' &&
		elInput.value >= 0 &&
		elInput.value < 100 &&
		!isNaN(Number(elInput.value))
	) {
		const value = Number(elInput.value);
		if (value < 10) {
			elBox1.style.border = '3px solid blue';
			elBox2.style.border = '3px solid transparent';
		} else if (value >= 10 && value < 100) {
			elBox2.style.border = '3px solid blue';
			elBox1.style.border = '3px solid transparent';
		}
	} else {
		alert('xato qiymat');
	}
};
function sum(a, b) {
	return a + b;
}

elForm.addEventListener('submit', function (e) {
	e.preventDefault();
	console.log(e);
	console.log('test');
});

//

function submitButton() {
	console.log('clicked');
}
