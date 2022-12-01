const elForm = document.querySelector('#form');
const elPosts = document.querySelector('#posts');

function renderPosts(array = posts, parentNode = elPosts) {
	parentNode.textContent = '';
	array.forEach(function (element) {
		const newDiv = document.createElement('div');

		const year = new Date(element.date).getFullYear();
		const month = new Date(element.date).getMonth() + 1;
		const day = new Date(element.date).getDate();

		const resultDate = element.date
			? `${day}-kun, ${month}-oy, ${year}-yil`
			: 'sana kiritilmagan';

		newDiv.className = 'card col-6 p-3 ';
		newDiv.style.height = 'auto';

		newDiv.innerHTML = `
                    <img src="${element.image}"  class="card-img-top w-100 h-50" alt="${element.title}" />
					<div class="card-body">
						<h5 class="card-title">${element.title}</h5>
						<p class="card-text">
							${element.subtitle}
						</p>
						<span>${resultDate} </span>
					</div>
					<div className="row">
						<button style="width:"30%" class="btn btn-danger d-inline-block" data-id=${element.id} >Delete</button>
						<button data-id=${element.id} style="width:"30%" class="btn btn-info d-inline-block">Edit</button>
					</div>
                    `;

		parentNode.appendChild(newDiv);
	});
}

renderPosts();

elForm.addEventListener('submit', function (e) {
	e.preventDefault();

	const elTitle = e.target.title.value;
	const elSubtitle = e.target.subtitle.value;
	const elImage = e.target.image.value;
	const elDate = e.target.date.value;

	const newPost = {
		id: posts.length,
		title: elTitle,
		subtitle: elSubtitle,
		image: elImage,
		date: elDate,
	};

	posts.push(newPost);

	renderPosts();
});

elPosts.addEventListener('click', function (e) {
	const element = e.target;

	if (element.matches('.btn-danger')) {
		const id = element.dataset.id;

		const filteredArray = posts.filter(function (element) {
			if (element.id !== Number(id)) {
				return element;
			}
		});
		posts = filteredArray;

		renderPosts(posts);
	}

	if (element.matches('.btn-info')) {
		const id = element.dataset.id;

		const filteredArray = posts.filter(function (element) {
			if (element.id !== Number(id)) {
				return element;
			}
		});
		posts = filteredArray;

		renderPosts(posts);
	}
});
