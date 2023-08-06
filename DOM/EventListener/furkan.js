const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log("Tıklandı");
// });

const lielemanları = document.querySelectorAll('li');

lielemanları.forEach(eleman => {
    eleman.addEventListener('click', e => {
        // console.log(e);
        // console.log(e.target);
        // console.log("li ye tıklandı");
        // e.target.style.color = 'blue';
    });
});

const ul = document.querySelector('ul');
ul.addEventListener('click', e => {
    // console.log(e);
    console.log(e.target);
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
})

// ul.remove();

lielemanları.forEach(eleman => {
    eleman.addEventListener('click', e => {
        // e.stopPropagation();
        console.log(e.target);
        // e.target.remove();
    });
});

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Javascript';
    // ul.append(li); //sonuna ekler
    ul.prepend(li); // sonuna ekler
});