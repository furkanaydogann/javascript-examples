const username = 'furkan';
const pattern = /^[a-z]{6,10}$/;
// let sonuc = pattern.test(username);

// // console.log(sonuc);

// if(sonuc){
//     console.log('Başarılı');
// }else{
//     console.log('Başarısız');
// }

let sonuc= username.search(pattern); //Yoksa -1 döner varsa 0 ve 0 dan büyük değerler döner.
console.log(sonuc);