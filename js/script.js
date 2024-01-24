const modal = document.querySelector("[data-modal]");
const modalOpenBtn = document.querySelector("[data-modal-open]");
const modalCloseBtn = document.querySelector("[data-modal-close]");

modalOpenBtn.addEventListener('click', () => {
    modal.classList.add("is-open");
    console.log("test")
})

modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove("is-open");
})