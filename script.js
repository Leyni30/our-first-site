const openModalButton = document.querySelector('.openModal');
const closeModalButton = document.querySelector('[data-close-button]');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');

openModalButton.addEventListener('click', () => {
    console.log("I've been clicked");
    openModal(modal);
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButton.addEventListener('click', () => {
    console.log("I've been clicked 2");
    closeModal(modal);
});

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}