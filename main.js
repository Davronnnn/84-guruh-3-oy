const elInput = document.querySelector('#number');
const elForm = document.querySelector('form');
const elBox1 = document.querySelector('.box1');
const elBox2 = document.querySelector('.box2');
const elBtns = document.querySelector('.btns');

// for (let i = 0; i < 10; i++) {
// 	const input = document.createElement('input');
// 	input.setAttribute('type', 'button');
// 	input.setAttribute('value', i);
// 	input.setAttribute('id', i);

// 	elBtns.appendChild(input);
// }


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

elBtn0.addEventListener('click', function () {
	console.log(elInput.value);
	if (elInput.value < 10) {
		elInput.value += elBtn0.value;
	}
});

elBtn1.addEventListener('click', function () {
	console.log(elInput.value);
	if (elInput.value < 10) {
		elInput.value += elBtn1.value;
	}
});
elBtn2.addEventListener('click', function () {
	if (elInput.value < 10) {
		elInput.value += elBtn2.value;
	}
});
elBtn3.addEventListener('click', function () {
	elInput.value += elBtn3.value;
});
elBtn4.addEventListener('click', function () {
	elInput.value += elBtn4.value;
});
elBtn5.addEventListener('click', function () {
	elInput.value += elBtn5.value;
});
elBtn6.addEventListener('click', function () {
	elInput.value += elBtn6.value;
});
elBtn7.addEventListener('click', function () {
	elInput.value += elBtn7.value;
});
elBtn8.addEventListener('click', function () {
	elInput.value += elBtn8.value;
});
elBtn9.addEventListener('click', function () {
	elInput.value += elBtn9.value;
});

elForm.addEventListener('submit', function (e) {
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
});
