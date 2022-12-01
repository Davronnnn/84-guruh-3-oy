const elForm = document.querySelector('#form');
const elPosts = document.querySelector('#posts');

function renderPosts(array = posts, parentNode = elPosts) {
	array.forEach(function (element) {
		const newDiv = document.createElement('div');

		const year = new Date(element.date).getFullYear();
		const month = new Date(element.date).getMonth() + 1;
		const day = new Date(element.date).getDate();

		const resultDate = element.date
			? `${day}-kun, ${month}-oy, ${year}-yil`
			: 'sana kiritilmagan';

		newDiv.className = 'card col-6 ';

		newDiv.innerHTML = `
                    <img src="${element.image}"  class="card-img-top w-100 h-50" alt="${element.title}" />
					<div class="card-body">
						<h5 class="card-title">${element.title}</h5>
						<p class="card-text">
							${element.subtitle}
						</p>
						<span>${resultDate} </span>
					</div>
                    `;

		parentNode.appendChild(newDiv);
	});
}

renderPosts();

elForm.addEventListener('submit', function (e) {
	e.preventDefault();
	elPosts.textContent = '';

	const elTitle = e.target.title.value;
	const elSubtitle = e.target.subtitle.value;
	const elImage = e.target.image.value;
	const elDate = e.target.date.value;

	const newPost = {
		title: elTitle,
		subtitle: elSubtitle,
		image: elImage,
		date: elDate,
	};
	posts.push(newPost);

	renderPosts();
});
