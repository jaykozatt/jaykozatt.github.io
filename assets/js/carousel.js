// Local review data

const reviews = [
	{
		id: 1,
		img: 'images/test.png',
		proyectTitle: ['The Prisioner 1', 'The Prisioner 2', 'The Prisioner 3'],
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. D',
		thumb: {
			thumbImg: [
				'assets/css/images/proyects-img/the-prisioner-1.1.png',
				'assets/css/images/proyects-img/the-prisioner-1.2.png',
				'assets/css/images/proyects-img/the-prisioner-1.3.png',
			],
			descriptions: [
				'1.1 Lorem ipsum dolor sit amet consectetur adipisicing elit.  fugitsed vel tempore ea',
				'1.2 orem ipsum dolor sit amet consectetur adipilit. Dolores fugitsed vel tempore ea, qui maxime accusantium',
				'1.3 orem ipsum dolor sit amet ctur adipisicing elit.  qui maxime accusantium',
			],
		},
	},
	{
		id: 2,
		img: 'https://simg.nicepng.com/png/small/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png',
		proyectTitle: [
			'All Bets Are Off 1',
			'All Bets Are Off 2',
			'All Bets Are Off 3',
		],
		text: 'All Bets Are Off! is a deathmatch arena in which you slice and dice poker chip stacks by means of entangling them with a chain mace in the shape of a die, giving a new meaning to the phrase "rolling dice".',
		thumb: {
			thumbImg: [
				'assets/css/images/proyects-img/all-bets-are-off-2.1.png',
				'assets/css/images/proyects-img/all-bets-are-off-2.2.png',
				'assets/css/images/proyects-img/all-bets-are-off-2.3.png',
			],
			descriptions: [
				'2.1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugitsed vel tempore ea',
				'2.2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugitsed vel tempore ea, qui maxime accusantium',
				'2.3 Lorem ipsum dolor sit amet consectetur adipisicing elit.  qui maxime accusantium',
			],
		},
	},
	{
		id: 3,
		img: 'https://simg.nicepng.com/png/small/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png',
		proyectTitle: [
			'All Bets Are Off',
			'All Bets Are Off',
			'All Bets Are Off',
			'All Bets Are Off',
		],
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugitsed vel tempore ea, qui maxime accusantium deleniti consectetur iustoveniam hic, voluptates quasi iure quos porro laborum, inventoreprovident?',
		thumb: {
			thumbImg: ['images/test.png', 'images/test.png', 'images/test.png'],
			descriptions: [
				'3.1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugitsed vel tempore ea',
				'3.2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugitsed vel tempore ea, qui maxime accusantium',
				'3.3 Lorem ipsum dolor sit amet consectetur adipisicing elit.  qui maxime accusantium',
				'3.4 Lorem ipsum dolor sit amet consectetur adipisicing elit.  qui maxime accusantium',
				'3.5 Lorem ipsum dolor sit amet consectetur adipisicing elit.  qui maxime accusantium',
			],
		},
	},
	{
		id: 4,
		img: 'https://simg.nicepng.com/png/small/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png',
		proyectTitle: [
			'All Bets Are Off',
			'All Bets Are Off',
			'All Bets Are Off',
			'All Bets Are Off',
		],
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugitsed vel tempore ea, qui maxime accusantium deleniti consectetur iustoveniam hic, voluptates quasi iure quos porro laborum, inventoreprovident?',
		thumb: {
			thumbImg: ['images/test.png', 'images/test.png', 'images/test.png'],
			descriptions: [
				'4.1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugitsed vel tempore ea',
				'4.2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugitsed vel tempore ea, qui maxime accusantium',
				'4.3 Lorem ipsum dolor sit amet consectetur adipisicing elit.  qui maxime accusantium',
			],
		},
	},
];

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
		slidesPerView: 2,
		spaceBetween: 30,
		slidesPerGroup: 2,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: false,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});
