function UpdateTransform() {
    ComputeDisplacements();
    LoopIndex();
    slider.style.transform = 'translateX(' + (-size * index) + 'px)';
}

function ComputeDisplacements() {
    size = slider.clientWidth / cards.length;
    cardsInDisplay = Math.floor(sliderContainer.clientWidth / cards[0].clientWidth);
}

function LoopIndex() {
    console.log(cardsInDisplay);
    if (index < 0) {
        index = cards.length-cardsInDisplay;
    }

    if (index > cards.length-cardsInDisplay) {
        index = 0;
    }
}

const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');

const prevButton = document.querySelector('#prevButton i');
const nextButton = document.querySelector('#nextButton i');

let index = 0;
let size = slider.clientWidth / cards.length;
let cardsInDisplay = Math.floor(sliderContainer.clientWidth / cards[0].clientWidth);

UpdateTransform();

nextButton.addEventListener('click',()=>{
    index++;
    UpdateTransform();
});

prevButton.addEventListener('click',()=>{
    index--;
    UpdateTransform();
});