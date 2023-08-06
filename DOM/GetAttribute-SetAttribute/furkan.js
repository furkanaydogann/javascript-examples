const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.udemy.com/course/javascript-egitimi/learn/lecture/36902110#overview');

link.textContent = 'FRKN TRAINING';

const pDegeri = document.querySelector('p');
console.log(pDegeri.getAttribute('class'));
pDegeri.setAttribute('class', 'erorrr');
pDegeri.setAttribute('style', 'color:blue');