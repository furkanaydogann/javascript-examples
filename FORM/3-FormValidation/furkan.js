const form = document.querySelector('.singupForm');
const message = document.querySelector('.message');

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;
    const userNamePattern = /^[a-z]{6,10}$/;

    if (userNamePattern.test(username)) {
        message.textContent = 'Başarılı';
    } else {
        message.textContent = 'Lütfen Hepsi küçük harf ve 6 ile 12 karakter arasında giriniz.';
    }

});