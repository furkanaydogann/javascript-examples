// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log("Furkan");
// }, 2000);
// console.log(3);
// console.log(4);

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

// const getTodos = (resources) => {

//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();
//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//                 // callback(undefined, data);
//             } else if (request.readyState === 4) {
//                 reject("Başarılı Cevap Alamadık !")
//                 // callback("Başarılı Cevap Alamadık", undefined);
//             }
//         });
//         request.open('GET', resources);
//         request.send();
//     })
// };

// getTodos('Example/can.json').then(data => {
//     console.log("Promise 1 ",data);
//     return getTodos('Example/furkan.json')
// }).then(data => {
//     console.log("Promise 2", data);
//     return getTodos('Example/index.json')
// }).then(data => {
//     console.log("Promise 3", data);
// }).catch(err => {
//     console.log(err);
// });


// const getIt = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Başarılı Data");
//         // reject('Başarısız Data');
//     })
// }

// getIt().then(data => {
//         console.log("Başarılı", data);
//     }).catch(err => {
//         console.log("Başarısız", err);
//     });


// getIt().then(
//     data => {
//         console.log("Başarılı", data);
//     },
//     err => {
//         console.log("Başarısız", err);
//     })



// console.log(3);
// console.log(4);


// 1
// index.js:30 2
// index.js:41 3
// index.js:42 4
// index.js:37 [
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "quis ut nam facilis et officia qui",
//     "completed": false
//   },
//   { ...getTodos.






// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => {
//         return response.json();
//     })
//     .then(json => console.log(json))


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))


// fetch('Example/can.json').then(response => {
//     return response.json(); //promise döndürüyor.
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })


//Async bir fonksiyon geriye herzaman promise döndürür.
//await promise chain işlemi yapıyor. Çekilene kadar atamasını yapmıyor.
// Ne zaman fetch ile işi bitti promise döndü 
const getTodos = async () => {
    let response = await fetch('Example/can.json'); 
    if (response.status != 200 ) {
        throw new Error("Doğru Endpointe istek atmadınız.")
    }
    const data = await response.json();                  
    return data;
}

getTodos().then(response => {
    console.log(response);
}).catch(err => {
    console.log(err.message);
})

