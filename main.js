const elBtn = document.querySelector('.btn');
const elForm = document.querySelector('form');

elBtn.addEventListener('click', function () {
	elForm.classList.toggle('form-active');
});

