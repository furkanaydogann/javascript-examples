const correctAnswer = ['8', '10', '3', '25'];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');
const successMessage = document.querySelector('#success-message');
const button = document.querySelector('.btn');



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
        result.querySelector('#percent').textContent = `${puan}%`;

        if (puan == score) {
            clearInterval(bastir)
            if (score == 100){
                successMessage.classList.remove('d-none');
                button.setAttribute('disabled','');
            }
        } else {
            puan++;
        }
    }, 10);
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

