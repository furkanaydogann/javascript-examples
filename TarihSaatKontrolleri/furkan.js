///////////////////////////////////////////////////
//Date
const now = new Date();
console.log(now);
console.log(typeof now);


//28.05.2023 Pazar 22:02
console.log('Year : ', now.getFullYear()); //2023
console.log('Mounth : ', now.getMonth() + 1); //5
console.log('Date : ', now.getDate()); //28
console.log('Day : ', now.getDay()); // 0  Pazar 0 inci indexte tututlur.
console.log('Hours : ', now.getHours()); // 22
console.log('Minutes : ', now.getMinutes()); //2
console.log('Seconds : ', now.getSeconds()); //16

console.log('timestamp: ', now.getTime()); // 1685300685904 Bu rakam 1 Ocak 1970 tarihinden itibaren günümüzdeki değer arasında milisaniye olarak ne kadar süre getiğini ifade ediyor.

console.log(now.toDateString()); // Sun May 28 2023
console.log(now.toTimeString()); //22:08:08 GMT+0300 (GMT+03:00)
console.log(now.toLocaleString()); // 28.05.2023 22:09:26


///////////////////////////////////////////////////
//Timestamp İki tarih Arasındaki farkı bulma

console.log('---------------------------------------------------------------');
const startDate = new Date('08/15/2018 9:45:00');
const now2 = new Date();
console.log(startDate); // Wed Aug 15 2018 09:45:00 GMT+0300 (GMT+03:00)

const diff = now.getTime() - startDate.getTime();
console.log(diff); //Milisaniye cinsinden 2 tarih arasındaki fark.

const mins = Math.round(diff / 1000 / 60);  // bölü 1000 ile second a bölü 60 ile dakikaya çeviririm. 

console.log(`Video çekmeye ${mins} dakika önce başladım.`); // Video çekmeye 2516435 dakika önce başladım.

const hours = Math.round(mins / 60); // dakikayı saate çevirdim.
console.log(`Video çekmeye ${hours} saat önce başladım.`); // Video çekmeye 41941 saat önce başladım.

const days = Math.round(hours / 24); // saati güne
console.log(`Video çekmeye ${days} gün önce başladım.`); // Video çekmeye 1748 gün önce başladım.

const years = Math.round(days / 365); // günü yıla
console.log(`Video çekmeye ${years} yıl önce başladım.`); // Video çekmeye 5 yıl önce başladım.

//Timestamp to Date
const timestamp = 1685300685904;
console.log(new Date(timestamp)); //Sun May 28 2023 22:04:45 GMT+0300 (GMT+03:00)


///////////////////////////////////////////////////
//Tarayucıda saat oluşturma

const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // console.log(hours, minutes, seconds);

    const html = 
    `
    <span> ${hours} </span> : 
    <span> ${minutes} </span> : 
    <span> ${seconds} </span>
    `

    clock.innerHTML = html;
};

setInterval(tick, 1000);



