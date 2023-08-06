const form = document.querySelector('.singupForm');
const userName = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault(); //Submit eventi sayfanın yenilenmesine sabep olur. e.preventDefault() bunun önüne geçer.
    // console.log('Form Gönderildi..');
    // console.log(userName.value);
    console.log(form.username.value);
}); 