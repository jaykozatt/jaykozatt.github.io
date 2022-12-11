const carousel1 = document.querySelector('#carousel1'),
	carousel2 = document.querySelector('#carousel2'),
	carousel3 = document.querySelector('#carousel3');
const carouselContainer = document.querySelectorAll('.carousel-container');
const btnRead = document.querySelectorAll('.btn-read');
const carousel = document.querySelector('.carousel');

const image1 = ['images/test.png', '/images/test.png', 'images/test.png'];

const image2 = ['images/test.png', 'images/test.png', 'images/test.png'];

const image3 = ['images/test.png', 'images/test.png', 'images/test.png'];

for (elem in image1) {
	let img = document.createElement('img');
	$(img).addClass('carousel-item');
	carousel.appendChild(img);
	let imgValue = image1[elem];
	$(img).attr('src', imgValue);
}

document.addEventListener('DOMContentLoaded', (e) => {
	carouselContainer.forEach((container) => (container.style.display = 'none'));

	const showCarousel = (e) => {
		let currentHash = e.target.hash;
		carouselContainer.forEach((container) => {
			if (currentHash !== '#' + container.id) {
				return (container.style.display = 'none');
			}

			container.style.display = 'block';
		});
	};

	$(btnRead).click(e, showCarousel);

	carouselContainer.forEach((container) => {});

	// document.querySelectorAll('.carousel').forEach((carousel) => {
	// 	const items = document.querySelectorAll('.carousel-item');
	// 	const buttonsHtml = Array.from(items, () => {
	// 		return `<span class="carousel-button"></span>`;
	// 	});

	// 	carousel.insertAdjacentHTML(
	// 		'beforeend',
	// 		`
	//     <div class="carousel-nav">
	//         ${buttonsHtml.join('')}
	//     </div>
	// `
	// 	);
	// });
});
