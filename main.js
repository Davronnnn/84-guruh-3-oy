const elResult = document.querySelector('.todos');

const products = [
	{
		title: 'Холодильник Hofmann',
		star: 0.5,
		price: '2 300 000 sum',
		img: 'https://picsum.photos/200/300',
	},
	{
		title: 'Холодильник Hofmann',
		star: 0.5,
		price: '2 300 000 sum',
		img: 'https://picsum.photos/200/300',
	},
	{
		title: 'Холодильник Hofmann',
		star: 0.5,
		price: '2 300 000 sum',
		img: 'https://picsum.photos/200/300',
	},
	{
		title: 'Холодильник Hofmann',
		star: 0.5,
		price: '2 300 000 sum',
		img: 'https://picsum.photos/200/300',
	},
];

for (let i = 0; i < products.length; i++) {
	const product = products[i];

	const li = document.createElement('li');

	const img = document.createElement('img');
	const title = document.createElement('h3');
	const price = document.createElement('p');
	const rating = document.createElement('p');

	title.textContent = product.title;
	price.textContent = product.price;

	img.src = product.img;

	if (product.star > 4 && product.star <= 5) {
		rating.textContent = '⭐️⭐️⭐️⭐️⭐️';
	} else if (product.star <= 4 && product.star > 3) {
		rating.textContent = '⭐️⭐️⭐️⭐️';
	} else if (product.star <= 3 && product.star > 2) {
		rating.textContent = '⭐️⭐️⭐️';
	} else if (product.star <= 2 && product.star > 1) {
		rating.textContent = '⭐️⭐️';
	} else if (product.star <= 1 && product.star > 0) {
		rating.textContent = '⭐️';
	} else {
		rating.textContent = 'notogri qiymat';
	}

	li.appendChild(img);
	li.appendChild(title);
	li.appendChild(price);
	li.appendChild(rating);

	elResult.appendChild(li);
}

const user = {
	userName: 'John',
	isAdmin: true,
	age: 23,
	hobbies: ['running', 'swimming'],
	salomBer() {
		return 'salom';
	},
	sayHi: function () {
		return 'xayr';
	},
};
