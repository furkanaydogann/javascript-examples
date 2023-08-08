const correctAnswer = ['E', 'E', 'E', 'E'];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswer.forEach((answer, index) => {
        if (answer === correctAnswer[index]) {
            score += 25;
        }
    });

    result.classList.remove('d-none');
    let puan = 0;

    const bastir = setInterval(() => {
        result.querySelector('span').textContent = `${puan}%`;

        if (puan == score) {
            clearInterval(bastir)
        } else {
            puan++;
        }
    }, 15);
});

//set timeot da yazılan kod bir defa çalışır set intervalde her seferinde çalışıyor.

// setTimeout(() =>{
//     console.log("frkn");
// },2000)

// setInterval(() => {
//     console.log("frkn");
// }, 1000);
//Bunu durdurmanın yöntemi clear interval bunun için set interval bir değişkene atılmalı.

// let i = 0;
// const bastır = setInterval(() => {
//     console.log("frkn");
//     i++;
//     if (i == 4) {
//         clearInterval(bastır);
//     }
// }, 1000);

