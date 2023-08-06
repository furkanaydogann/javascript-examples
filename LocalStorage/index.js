localStorage.setItem('Name', 'Furkan');
localStorage.setItem('Age', 25);


let ad = localStorage.getItem('Name');
let yas = localStorage.getItem('Age');

console.log(ad, yas);

localStorage.setItem('Name', 'Furkan Aydogan');
localStorage.Age = 26;

ad = localStorage.getItem('Name');
yas = localStorage.getItem('Age');

console.log(ad, yas);

// localStorage.removeItem('Name');
localStorage.clear();

ad = localStorage.getItem('Name');
yas = localStorage.getItem('Age');

console.log(ad, yas);


const variable = [
    {
        "hobby": "swimming",
        "person": "Furkan"
    },
    {
        "hobby": "playing card",
        "person": "Furkan"
    },
    {
        "hobby": "take a trip",
        "person": "Furkan"
    }
];

console.log(variable);

console.log(JSON.stringify(variable));


localStorage.setItem('todos', JSON.stringify(variable));

const storedData = localStorage.getItem('todos');

console.log(JSON.parse(storedData));

