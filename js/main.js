const elForm = findElement('#form');
const elForm2 = findElement('#modal-form');
const elPosts = findElement('#posts');
const modalImg = findElement('#modal-img');
const editBtn = findElement('#edit');
const modal = findElement('.modal');
const elSearch = findElement('#search');
const elCategory = findElement('#category-search');
const elFilter = findElement('.filter');
const isPosts = findElement('.posts-page');

let posts = [] && JSON.parse(localStorage.getItem('posts'));

function renderPosts(array = posts, parentNode = elPosts) {
	parentNode.textContent = null;

	array.forEach(function (element) {
		const newDiv = document.createElement('div');

		const year = new Date(element.date).getFullYear();
		const month = new Date(element.date).getMonth() + 1;
		const day = new Date(element.date).getDate();

		const resultDate = element.date
			? `${day}-kun, ${month}-oy, ${year}-yil`
			: 'sana kiritilmagan';

		newDiv.className = 'card col-12 col-md-6 p-3 ';
		newDiv.style.height = 'auto';

		const categories = element.category;

		const ul = document.createElement('ul');

		ul.className = 'mt-3';
		categories.forEach((element) => {
			const li = document.createElement('li');
			li.textContent = element;
			ul.appendChild(li);
		});

		newDiv.innerHTML = `
                    <img src="${
						element.image
					}"  class="card-img-top w-100 h-50" alt="${
			element.title
		}" />
					<div class="card-body">
						<h5 class="card-title">${element.title}</h5>
						<p class="card-text">
							${element.subtitle}
						</p>
						<span>${resultDate} </span>
					</div>
					${
						!isPosts
							? `<div className="row">
						<button style="width:"30%" class="btn btn-danger d-inline-block" data-id=${element.id}>Delete</button>
						<button data-id=${element.id} style="width:"30 % " class="btn btn-info d-inline-block" data-bs-target="#exampleModal" 	data-bs-toggle="modal" class="btn btn-primary">Edit</button>
					</div >`
							: ''
					}
                    `;
		newDiv.appendChild(ul);
		parentNode.appendChild(newDiv);
	});
}

function renderCategories(posts) {
	const categories = [];

	const ul = document.createElement('ul');
	ul.className = 'd-flex justify-content-around bg-warning';
	elFilter?.appendChild(ul);

	posts.forEach((post) => {
		post.category.forEach((category) => {
			if (!categories.includes(category)) {
				categories.push(category);
			}
		});
	});

	categories.forEach((category) => {
		const li = document.createElement('li');
		li.textContent = category;
		li.className = 'bg-primary text-light p-2 pointer btn';
		li.setAttribute('role', 'button');

		ul.appendChild(li);
	});
}

function addPost(form) {
	const elTitle = form.title.value;
	const elSubtitle = form.subtitle.value;
	const elImage = form.image.value;
	const elDate = form.date.value;

	const categories = [];
	form.category.forEach((element) => {
		if (element.checked) {
			categories.push(element.value);
		}
	});

	const newPost = {
		id: posts.length,
		title: elTitle,
		subtitle: elSubtitle,
		image: elImage,
		date: elDate,
		category: categories,
	};

	posts.push(newPost);

	localStorage.setItem('posts', JSON.stringify(posts));
	renderPosts();
}

// Add post
elForm.addEventListener('submit', (e) => {
	e.preventDefault();
	addPost(e.target);
});

// post edit delete
elPosts.addEventListener('click', (e) => {
	const element = e.target;

	if (element.matches('.btn-danger')) {
		const id = element.dataset.id;

		const filteredArray = posts.filter((element) => {
			if (element.id !== Number(id)) {
				return element;
			}
		});
		posts = filteredArray;

		localStorage.setItem('posts', JSON.stringify(posts));
		renderPosts(posts);
	}

	if (element.matches('.btn-info')) {
		const id = element.dataset.id;

		const title = elForm2.modalTitle;
		const subTitle = elForm2.modalSubtitle;
		const date = elForm2.modalDate;
		const img = elForm2.modalImage;

		posts.forEach((element) => {
			if (element.id === Number(id)) {
				title.value = posts[id].title;
				subTitle.value = posts[id].subtitle;
				date.value = posts[id].date;
				img.value = posts[id].image;
				modalImg.src = posts[id].image;

				editBtn.addEventListener('click', () => {
					posts[id].title = title.value;
					posts[id].subtitle = subTitle.value;
					posts[id].image = img.value;
					posts[id].date = date.value;

					renderPosts();
				});
			}
		});
		localStorage.setItem('posts', JSON.stringify(posts));

		renderPosts(posts);
	}
});

elSearch?.addEventListener('input', () => {
	const value = elSearch.value;

	filteredArray = posts.filter((element) => {
		if (
			element.title.toLowerCase().match(value.toLowerCase()) ||
			element.subtitle.toLowerCase().match(value.toLowerCase())
		) {
			return element;
		}
	});
	renderPosts(filteredArray);
});

// post filter
elCategory?.addEventListener('change', () => {
	const inputCategory = elCategory.value;

	if (inputCategory === 'all') {
		renderPosts(posts);
	} else {
		const filteredArray = [];
		posts.forEach((post) => {
			post.category.filter((category) => {
				if (category.toLowerCase() === inputCategory.toLowerCase()) {
					filteredArray.push(post);
				}
			});
		});
		renderPosts(filteredArray);
	}
});

renderCategories(posts);
renderPosts();
