//İlk p etiketini seçer
// const hata = document.querySelector('p');

//İlk class error seçer
// const hata = document.querySelector('.error');

// const hata = document.querySelector('div.error');
// console.log(hata);

const hatalar = document.querySelectorAll('p');
console.log(hatalar);
console.log(hatalar[2]);

hatalar.forEach(hata => {
    console.log(hata);
})