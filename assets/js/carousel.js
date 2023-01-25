import { projects } from './modules/data.js';

const presentationMedia = document.querySelector('.slide-media'),
	presentationTitle = document.querySelector('.slide-title'),
	presentationText = document.querySelector('.slide-text'),
	projectLink = document.querySelector('.project-link'),
	projectSrc = document.querySelector('.project-src');

const prevBtn = document.querySelector('.row-left'),
	nextBtn = document.querySelector('.row-right');

let currentItem = 0;
let currentProject = 0;

const getProjectContent = (currentProject = 0) => {
	const project = projects[currentProject],
		mediaActived = project.slides[currentItem].media,
		titleActive = project.slides[currentItem].title,
		textActivated = project.slides[currentItem].text,
		linkActive = project.projectLink,
		sourceActive = project.projectSrc;

	presentationMedia.innerHTML = mediaActived;
	presentationTitle.textContent = titleActive;
	presentationText.innerHTML = textActivated;
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
		currentProject = target.dataset.order - 1;

		carouselContainer.style.display = 'block';

		currentItem = 0;
		// prevBtn.classList.add("disabled");
		presentationMedia.scrollIntoView(true);

		getProjectContent(currentProject);
	};

	$(btnRead).click(e, showCarousel);
});

const next = () => {
	let slideCount = projects[currentProject].slides.length - 1;
	if (currentItem+1 <= slideCount)
	{
		currentItem++;
		getProjectContent(currentProject);
	}
	else
	{
		currentItem = 0;
		getProjectContent(currentProject);
	}
};

const prev = () => {
	let slideCount = projects[currentProject].slides.length - 1;
	if (currentItem-1 >= 0)
	{
		currentItem--;
		getProjectContent(currentProject);
	}
	else
	{
		currentItem = slideCount;
		getProjectContent(currentProject);
	}
};

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);

document.addEventListener('DOMContentLoaded', (e) => {
	var swiper = new Swiper('.mySwiper', {
		slidesPerView: 1,
		spaceBetween: 30,
		slidesPerGroup: 1,
		breakpoints: {
			924: {
				slidesPerView: 2,
				spaceBetween: 20,
				slidesPerGroup: 1,
			},
		},
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: false,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		simulateTouch: false,
	});
});
