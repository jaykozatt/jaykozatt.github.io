import { reviews } from './modules/data.js';

const imgUser = document.querySelector('.img-user'),
	userText = document.querySelector('.user-text'),
	proyectTitleTag = document.querySelector('.proyect-title'),
	thumbnails = document.querySelector('.thumbnails'),
	card = document.querySelectorAll('.card');

const prevBtn = document.querySelector('.row-left'),
	nextBtn = document.querySelector('.row-right');

let currentItem = 0;
let currentReview = 0;

const reviewsContent = (currentReview = 0) => {
	const review = reviews[currentReview],
		textActivated = review.thumb.descriptions[currentItem],
		imgActived = review.thumb.thumbImg[currentItem],
		titleActive = review.proyectTitle[currentItem];

	imgUser.src = imgActived;
	userText.textContent = textActivated;
	proyectTitleTag.textContent = titleActive;
	thumbImgGenerator(review);
};

const changeInfo = (e) => {
	imgUser.src = e.target.src;
	userText.textContent = e.target.dataset.description;
	proyectTitleTag.textContent = e.target.dataset.title;
	currentItem = e.target.dataset.count;
};

const thumbImgGenerator = (review) => {
	let count = 0;
	thumbnails.innerHTML = ' ';

	review.thumb.thumbImg.forEach((thumbI) => {
		count++;
		let thumbImg = document.createElement('img');
		thumbImg.classList.add('thumbnails-img');
		thumbImg.src = thumbI;
		thumbImg.dataset.title = review.proyectTitle[count - 1];
		thumbImg.dataset.description = review.thumb.descriptions[count - 1];
		thumbImg.dataset.count = count - 1;

		thumbImg.addEventListener('click', changeInfo);
		thumbnails.appendChild(thumbImg);
	});
};

const carouselContainer = document.querySelector('.carousel-container');
const btnRead = document.querySelectorAll('.btn-read');
document.addEventListener('DOMContentLoaded', (e) => {
	carouselContainer.style.display = 'none';

	/* Muestra el Carousel dependiendo del ancla que se active */
	const showCarousel = (e) => {
		let target = e.target;
		let currentHash = target.hash;
		if (currentHash !== '#' + carouselContainer.id) {
			return (carouselContainer.style.display = 'none');
		}
		currentReview = target.dataset.order - 1;

		carouselContainer.style.display = 'block';

		currentItem = 0;

		reviewsContent(currentReview);
	};

	$(btnRead).click(e, showCarousel);
});

const next = () => {
	currentItem++;
	if (currentItem > card.length - 1) currentItem = 0;
	reviewsContent(currentReview);
};

const prev = () => {
	currentItem--;
	if (currentItem < 0) currentItem = card.length - 1;
	reviewsContent(currentReview);
};

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);

document.addEventListener('DOMContentLoaded', (e) => {
	var swiper = new Swiper('.mySwiper', {
		slidesPerView: 1,
		spaceBetween: 30,
		slidesPerGroup: 1,
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
				slidesPerGroup: 2,
			},
		},
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: false,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});
