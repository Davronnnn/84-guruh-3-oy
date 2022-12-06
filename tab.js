const elList = document.querySelector('.list-group');
const elResult = document.querySelector('#result');

elList.addEventListener('click', (e) => {
	const elId = e.target.id;

	if (elId === 'sport') {
		elResult.textContent = 'Sportga oid postlar';
	} else if (elId === 'sanat') {
		elResult.textContent = 'Sanatga oid postlar';
	} else if (elId === 'jamiyat') {
		elResult.textContent = 'Jamiyatga oid postlar';
	}
});
