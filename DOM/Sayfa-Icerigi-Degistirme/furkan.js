// const pdegeri = document.querySelector('p');
// console.log(pdegeri.innerText);

// pdegeri.innerText = 'Furkan Fullstack Developer';

/////////////////
// const pdegeri = document.querySelectorAll('p');

// pdegeri.forEach(a => {
//     console.log(a.innerText);
//     a.innerText += ' yeni alan';
// });

const icerik = document.querySelector('.icerik');
console.log(icerik.innerHTML);

icerik.innerHTML += '<h2> Vue JS, React Js, Angular Js</h2>';

const ogrenciler = ['Can', 'Tuba', 'Elif', 'Furkan'];

ogrenciler.forEach(ogrenci => {
    icerik.innerHTML += ` <p> ${ogrenci} </p>`
});