const form = document.querySelector('.singupForm');
const message = document.querySelector('.message');
const userNamePattern = /^[a-z]{6,10}$/;


form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;

    if (userNamePattern.test(username)) {
        message.textContent = 'Başarılı';
    } else {
        message.textContent = 'Lütfen Hepsi küçük harf ve 6 ile 12 karakter arasında giriniz.';
    }

});

form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value);

    if (userNamePattern.test(e.target.value)) {
        // console.log("Başarılı");
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
});