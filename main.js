const elInput = document.querySelector('#number');
const elForm = document.querySelector('form');
const elBooks = document.querySelector('.books');

// push oxiridan qo'shadi
// pop oxiridan o'chiradi

// unshift boshidan qo'shadi
// shift boshidan o'chiradi

// length uzunligini qaytaradi
// concat arraylarni qo'shib beradi

const books = ['atomic habits', 'deep work', 'js definition guide'];

console.log(books);
// kiss - keep it simply and stupid

function nimadir(array, parentElement) {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];

		const titleBook = document.createElement('h3');

		titleBook.textContent = element;
		parentElement.appendChild(titleBook);
	}
}

elForm.addEventListener('submit', function (e) {
	e.preventDefault();
	elBooks.textContent = '';
	const value = elInput.value;
	if (value.length !== 0) {
		books.push(value);
	}
	nimadir(books, elBooks);
	elInput.value = '';
});

nimadir(books, elBooks);
