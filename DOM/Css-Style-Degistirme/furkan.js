const icerik = document.querySelector('p');
console.log(icerik.classList);

icerik.classList.add('can');
icerik.classList.remove('error');

const pDegeri = document.querySelectorAll('P');

pDegeri.forEach(x => {
    if(x.textContent.includes('error')){
        x.classList.add('error');
    }
    if(x.textContent.includes('success')){
        x.classList.add('success');
    }
});