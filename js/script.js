// const modal = document.querySelector('[data-modal]');
// const modalOpenBtn = document.querySelector('[data-modal-open]');
// const modalCloseBtn = document.querySelector('[data-modal-close]');

// modalOpenBtn.addEventListener('click', () => {
// 	modal.classList.add('is-open');
// });

// modalCloseBtn.addEventListener('click', () => {
// 	modal.classList.remove('is-open');
// });

const burger = document.querySelector('[data-burger]');
const burgerOpenBtn = document.querySelector('[data-burger-open]');
const burgerCloseBtn = document.querySelector('[data-burger-close]');

burgerOpenBtn.addEventListener('click', () => {
	burger.classList.add('burger-open');
});

burgerCloseBtn.addEventListener('click', () => {
	burger.classList.remove('burger-open');
});
