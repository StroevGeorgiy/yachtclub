
document.getElementById('burger').addEventListener('click', function () {
    document.querySelector('header').classList.toggle('header-open')

})

document.getElementById('modal__contmap-open').addEventListener('click', function () {
    document.getElementById('modal__contmap').classList.add('modal__contmap-open');

})

document.querySelector('#modal__contmap .modal__box').addEventListener('click', e => {
    e._isClickWithInModal = true;
});
document.getElementById('modal__contmap').addEventListener('click', e => {
    if (e._isClickWithInModal) return;
    e.currentTarget.classList.remove('modal__contmap-open');
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('modal__contmap').classList.remove('modal__contmap-open')
    }
});