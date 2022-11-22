const elInput = document.querySelector('#number');
const elForm = document.querySelector('form');

const h1 = document.createElement('h1');

elForm.addEventListener('submit', function (e) {
	e.preventDefault();

	h1.textContent = elInput.value;
	elForm.appendChild(h1);

	h1.className += ' class';

	console.log(h1.className);
	h1.setAttribute('style', 'color:red');

	h1.style.color = 'blue';
	console.log(h1);

	console.log(elInput.value);
});
