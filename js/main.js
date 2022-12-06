const elForm = document.querySelector('#form');
const elForm2 = document.querySelector('#modal-form');
const elPosts = document.querySelector('#posts');
const modalImg = document.querySelector('#modal-img');
const editBtn = document.querySelector('#edit');
const modal = document.querySelector('.modal');

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
						<button data-id=${element.id} style="width:"30%" class="btn btn-info d-inline-block" data-bs-target="#exampleModal" 	data-bs-toggle="modal" class="btn btn-primary">Edit</button>
						
					</div>
                    `;

		parentNode.appendChild(newDiv);
	});
}

renderPosts();

function addPost(form) {
	const elTitle = form.title.value;
	const elSubtitle = form.subtitle.value;
	const elImage = form.image.value;
	const elDate = form.date.value;

	const newPost = {
		id: posts.length,
		title: elTitle,
		subtitle: elSubtitle,
		image: elImage,
		date: elDate,
	};

	posts.push(newPost);

	renderPosts();
}
elForm.addEventListener('submit', (e) => {
	e.preventDefault();
	addPost(e.target);
});

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

		renderPosts(posts);
	}
});

const array = [12, 34, 12, 34, 123, 34];
