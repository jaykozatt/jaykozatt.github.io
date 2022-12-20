import { reviews } from './modules/data.js';

const imgUser = document.querySelector('.img-card'),
	userText = document.querySelector('.user-text'),
	proyectTitleTag = document.querySelector('.proyect-title'),
	thumbnails = document.querySelector('.thumbnails'),
	projectLink = document.querySelector('.project-link'),
	projectSrc = document.querySelector('.project-src'),
	card = document.querySelectorAll('.card');

const prevBtn = document.querySelector('.row-left'),
	nextBtn = document.querySelector('.row-right');

let currentItem = 0;
let currentReview = 0;

const reviewsContent = (currentReview = 0) => {
	const review = reviews[currentReview],
		textActivated = review.slides.descriptions[currentItem],
		imgActived = review.slides.thumbImg[currentItem],
		titleActive = review.slides.proyectTitle[currentItem],
		linkActive = review.projectLink,
		sourceActive = review.projectSrc;

	imgUser.src = imgActived;
	userText.textContent = textActivated;
	proyectTitleTag.textContent = titleActive;
	projectLink.href = linkActive;
	projectSrc.href = sourceActive;

	if (linkActive === "")
		projectLink.style.display = 'none';
	else
		projectLink.style.display = 'block';

	if (sourceActive === "")
		projectSrc.style.display = 'none';
	else
		projectSrc.style.display = 'block';

	// thumbImgGenerator(review);
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

	review.slides.thumbImg.forEach((thumbI) => {
		count++;
		let thumbImg = document.createElement('img');
		thumbImg.classList.add('thumbnails-img');
		thumbImg.src = thumbI;
		thumbImg.dataset.title = review.proyectTitle[count - 1];
		thumbImg.dataset.description = review.slides.descriptions[count - 1];
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
		prevBtn.classList.add("disabled");
		imgUser.scrollIntoView(true);

		reviewsContent(currentReview);
	};

	$(btnRead).click(e, showCarousel);
});

const next = () => {
	let slideCount = reviews[currentReview].slides.proyectTitle.length - 1;
	if (currentItem+1 <= slideCount)
	{
		currentItem++;
		checkItemState();
		reviewsContent(currentReview);
	}
};

const prev = () => {
	if (currentItem-1 >= 0)
	{
		currentItem--;
		checkItemState();
		reviewsContent(currentReview);
	}
};

const checkItemState = () => {
	let slideCount = reviews[currentReview].slides.proyectTitle.length - 1;
	
	if (currentItem-1 < 0) prevBtn.classList.add("disabled");
	else prevBtn.classList.remove("disabled");

	if (currentItem+1 > slideCount) nextBtn.classList.add("disabled");
	else nextBtn.classList.remove("disabled");
}

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
