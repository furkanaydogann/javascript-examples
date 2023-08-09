// const userOne = {
//     userName: 'Furkan',
//     email: 'fff@hotmail.com',
//     login() {
//         console.log('Furkan Aydoğan Giriş Yaptı.');
//     },
//     logout() {
//         console.log('Furkan Aydoğan Çıkış Yaptı.');
//     }
// }

// console.log(userOne.email, userOne.userName);
// console.log(userOne);
// userOne.login();


// const userTwo = {
//     userName: 'Osman',
//     email: 'ooo@hotmail.com',
//     login() {
//         console.log('Osman Giriş Yaptı.');
//     },
//     logout() {
//         console.log('Osman Çıkış Yaptı.');
//     }
// }

// console.log(userTwo.email, userTwo.userName);
// console.log(userTwo);
// userTwo.login();


class User {
    constructor(username, email) {
        //this objeyi ifade ediyor.
        this.userName = username;
        this.email = email
    }

    login() {
        console.log(`${this.userName} Giriş Yaptı.`);
        return this;
    }

    logout() {
        console.log(`${this.userName} Çıkış Yaptı.`);
        return this;
    }
}

class Admin extends User {
    constructor(username, email, title) {
        //Ekstra parametre kullanmak istediğimde Admine 
        //spesifik bir parametre tamımlamak istiyorsak 
        //Parent class içinde gödermem gereken parametreleri Super ile yollamalıyız.
        super(username, email)
        this.title = title;
    }
    deleteUser(userArrived) {
        users = users.filter(user => user.userName !== userArrived.userName)
    }
}

const userOneClass = new User('furkan', 'fff@gmail.com');
const userTwoClass = new User('nida', 'nida@hotmail.com');
const userThreeClass = new Admin('osman', 'osman@hotmail.com', 'HarryPotter');

let users = [
    userOneClass,
    userTwoClass,
    userThreeClass
]

userThreeClass.deleteUser(userOneClass);

userThreeClass.login().logout();

console.log(userThreeClass);

// console.log(userOneClass.login(), userTwoClass.logout());

// userOneClass.login().logout().login().logout().logout();

// console.log(userOneClass.login().logout());