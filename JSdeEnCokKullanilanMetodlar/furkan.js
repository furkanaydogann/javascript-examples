//Filter
const points = [70, 75, 25, 35, 10, 80, 27];
const filterUl = document.querySelector('#filter');
const filterUl1 = document.querySelector('#filter1');


points.forEach(x => {
    let li = document.createElement('li');
    li.textContent = x;
    filterUl.append(li);
});

// const studentPassed = points.filter(point => {
//     return point > 50;
// });

const studentPassed = points.filter(point => point > 50);


studentPassed.forEach(x => {
    let li = document.createElement('li');
    li.textContent = x;
    filterUl1.append(li);
});

const students = [
    { name: 'furkan', passed: true },
    { name: 'seyda', passed: false },
    { name: 'hatice', passed: false },
    { name: 'elif', passed: true },
];

// const passingStudent = students.filter(student => {
//     return student.passed;
// });

const passingStudent = students.filter(student => student.passed);

console.log(passingStudent);

///////////////////////////////////////////////////////////////////////////////////////////////
//Map
const newPoints = points.map(point => {
    return point + 10;
});

console.log(newPoints);

const studentsforMap = [
    { name: 'furkan', point: 40 },
    { name: 'seyda', point: 60 },
    { name: 'hatice', point: 30 },
    { name: 'elif', point: 100 }
];

// const newStudentsPoints = studentsforMap.map(student => {
//     if (student.point < 50) {
//         return { name: student.name, point: student.point + 15  }
//     }else{
//         return  student;
//     }
// });

const newStudentsPoints = studentsforMap.map(student => {
    if (student.point < 50) {
        student.point += 15;
    }
    return student;
});

console.log(newStudentsPoints);
///////////////////////////////////////////////////////////////////////////////////////////////
//Reduce
const result = points.reduce((value, point) => {
    if (point > 50) {
        value++;
    }
    return value;
}, 0); //value değerim 0 oldu.

console.log(result);

const studentsforReduce = [
    { name: 'furkan', point: 40 },
    { name: 'seyda', point: 60 },
    { name: 'hatice', point: 30 },
    { name: 'elif', point: 100 },
    { name: 'furkan', point: 80 },
    { name: 'seyda', point: 30 },
    { name: 'hatice', point: 60 },
    { name: 'elif', point: 40 }
];

const furkanTotal = studentsforReduce.reduce((value, student) => {
    if (student.name == 'furkan') {
        value += student.point;
    }
    return value;
}, 0);

console.log(furkanTotal);

///////////////////////////////////////////////////////////////////////////////////////////////
//Find

const highPoint = points.find(point => {
    return point > 70;
});

///////////////////////////////////////////////////////////////////////////////////////////////
//Push Pop

points.push(90);
console.log(points);

points.pop();
console.log(points);

///////////////////////////////////////////////////////////////////////////////////////////////
//FindIndex

const pointsforFindIndex = [70, 75, 25, 35, 10, 80, 27];

const arrayIndex = pointsforFindIndex.findIndex(point => point == 35);
points[arrayIndex] = 45;

console.log(points);



const studentsforFindIndex = [
    { name: 'furkan', point: 40 },
    { name: 'seyda', point: 60 },
    { name: 'hatice', point: 30 },
    { name: 'elif', point: 100 },
];

const objectIndex = studentsforFindIndex.findIndex(student => student.name == 'elif');
studentsforFindIndex[objectIndex].name = 'Hakan';
console.log(studentsforFindIndex);

///////////////////////////////////////////////////////////////////////////////////////////////
//ReverseSort

const names = ['can', 'furkan', 'tuba', 'elif', 'gaye', 'osman'];

names.sort();
console.log(names); //Log => Array(6)0: "can"1: "elif": "furkan"3: "gaye"4: "osman"5: "tuba"

names.reverse();
console.log(names); //Log => (6) ['tuba', 'osman', 'gaye', 'furkan', 'elif', 'can']

const pointsforReverseSort = [70, 75, 25, 3, 10, 80, 27];

pointsforReverseSort.sort();
console.log(pointsforReverseSort); //Log => (7) [10, 25, 27, 3, 70, 75, 80] !!Karakter dizisinde olduğu gibi ilk sayıya bakıyor.

pointsforReverseSort.reverse();
console.log(pointsforReverseSort); //Log => (7) [80, 75, 70, 3, 27, 25, 10] !!Karakter dizisinde olduğu gibi ilk sayıya bakıyor.

//Nasıl tüm sayıyı okuyacak şekilde sıralayacağım ?

pointsforReverseSort.sort((a, b) => b - a);
console.log(pointsforReverseSort); // Log =>  (7) [80, 75, 70, 27, 25, 10, 3]

pointsforReverseSort.sort((a, b) => a - b);
console.log(pointsforReverseSort); // Log =>  (7) [3, 10, 25, 27, 70, 75, 80]



const studentsforReverseSort = [
    { name: 'furkan', point: 40 },
    { name: 'seyda', point: 60 },
    { name: 'hatice', point: 30 },
    { name: 'elif', point: 100 },
];


//Sort Mantığı bu şekilde çalışıyor.
// studentsforReverseSort.sort((a,b) => {
//     if(a.point > b.point){
//         return -1;
//     }
//     else if(b.point > a.point){
//         return 1;
//     }else{
//         return 0;
//     }
// });


//Kısaltılmış hali
studentsforReverseSort.sort((a, b) => b.point - a.point); //b a dan büyükse return 1 dönüyor. b, a dan küçükse -1 dönüyor. eşitse bir şey dönmüyor.

console.log(studentsforReverseSort); // Log => (4) [{…}, {…}, {…}, {…}]0: {name: 'elif', point: 100}1: {name: 'seyda', point: 60}2: {name: 'furkan', point: 40}3: {name: 'hatice', point: 30}

///////////////////////////////////////////////////////////////////////////////////////////////
//Multi Js Metodu Kullanama


const studentsforMulti = [
    { name: 'furkan', point: 40 },
    { name: 'seyda', point: 60 },
    { name: 'hatice', point: 30 },
    { name: 'elif', point: 100 },
    { name: 'deniz', point: 55 },
    { name: 'osman', point: 33 },
    { name: 'dilan', point: 88 },
    { name: 'isa', point: 11 }
];

//Puanı 50 den düşük öğrencilere puan eklemek istiyorum 15 puan ve bunlarin yei notu basılmak isteniyor.

const filtered = studentsforMulti.filter(student => student.point < 50);
const plusPoint = filtered.map(student => {
    return `${student.name} adlı öğrencinin yeni notu ${student.point + 15}`;
});

console.log(plusPoint); // 0: "furkan adlı öğrencinin yeni notu 55"1: "hatice adlı öğrencinin yeni notu 45"2: "osman adlı öğrencinin yeni notu 48"3:"isa adlı öğrencinin yeni notu 26"


//İç içe kullanımı doğru yazımı..
const newNotes = studentsforMulti.filter(student => student.point < 50)
.map(student =>  `${student.name} adlı öğrencinin yeni notu ${student.point + 15}`);

console.log(newNotes);// 0: "furkan adlı öğrencinin yeni notu 55"1: "hatice adlı öğrencinin yeni notu 45"2: "osman adlı öğrencinin yeni notu 48"3:"isa adlı öğrencinin yeni notu 26"