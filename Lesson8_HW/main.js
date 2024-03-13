// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let Users = () => {
    let arrUsers = [];
    for (let i = 0; i < 10; i++) {
        arrUsers.push(new User(i + 1, 'Masha', 'Ivanova', 'mi@gmail.com', '+48788746891'));
    }
    return arrUsers;
}
console.log(Users());
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filterUsers = () => {
    return Users().filter(item => item.id % 2 === 0);
}
console.log(filterUsers())
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sortUsers = () => {
    return Users().sort((a, b) => b.id - a.id);
}
console.log(sortUsers());
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phome = phone;
        this.order = order;
    }
}
let clients = [
    new Client(1, 'anna', 'kravchyk', 'annakr@outlook.com', '+380962673425', ['melon', 'blueberry', 'raspberry']),
    new Client(2, 'inna', 'kokosova', 'innakokosova@outlook.com', '+380961234789', ['pizza', 'kiwi', 'orange', 'lime']),
    new Client(3, 'masha', 'abrikosova', 'mashabr@gmail.com', '+380962556743', ['salad', 'milk']),
    new Client(4, 'katia', 'malinina', 'katia23@outlook.com', '+380637289076', ['meat']),
    new Client(5, 'dasha', 'kalinina', 'dashalin@gmail.com', '+380957893267', ['sugar', 'butter', 'flour', 'milk', 'eggs', 'apple']),
    new Client(6, 'larysa', 'popova', 'larka@outlook.com', '+380962345896', ['bear', 'chips', 'fish']),
    new Client(7, 'ihor', 'ivanov', 'ihorOk@gmail.com.com', '+380923456789', ['whiskey', 'meat', 'camamber', 'brie']),
    new Client(8, 'misha', 'kravchyk', 'mishania@outlook.com', '+380960987654', ['eggs', 'cheese', 'milk', 'yogurt']),
    new Client(9, 'ivan', 'ternow', 'teren@outlook.com', '+380962098762', ['banana', 'kokos', 'kiwi', 'lime', 'berry', 'mango', 'grapes']),
    new Client(10, 'lera', 'wilnewa', 'valery@outlook.com', '+380969876543', ['coffee'])
];
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClients = (arr) => {
    return arr.sort((a, b) => a.order.length - b.order.length)
};
console.log(sortClients(clients));
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car (model, producer, year, maxSpeed, engineСapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineСapacity = engineСapacity;
//     this.driver = []
//     this.drive = () => {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] === 'function') continue;
//             console.log(key + ' - ', this[key])
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         console.log(maxSpeed += newSpeed);
//     }
//     this.changeYear = function (newValue) {
//         console.log(year += newValue);
//
//     }
//     this.addDriver = function (name, surname) {
//         this.driver.push(name, surname)
//     }
// }
// let car = new Car('Z4', 'BMW', 2016, 170, '3,8')
// car.drive();
// car.info();
// car.increaseMaxSpeed(30);
// car.changeYear(7);
// car.addDriver('Ivan', 'Ivanov')

//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car{
    constructor (model, producer, year, maxSpeed, engineСapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineСapacity = engineСapacity;
    this.driver = []
    this.drive = () => {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] === 'function') continue;
            console.log(key + ' - ', this[key])
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        console.log(maxSpeed += newSpeed);
    }
    this.changeYear = function (newValue) {
        console.log(year += newValue);

    }
    this.addDriver = function (name, surname) {
        this.driver.push(name, surname)
    }
}
}
let car = new Car('Z4', 'BMW', 2016, 170, '3,8')
car.drive();
car.info();
car.increaseMaxSpeed(30);
car.changeYear(7);
car.addDriver('Ivan', 'Ivanov')
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
     constructor(name, age, footSize) {
         this.name = name;
         this.age = age;
         this.footSize = footSize;
     }
}
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let Cinderellas = [
    new Cinderella('Anna', 17, 34),
    new Cinderella('Inna', 19, 36),
    new Cinderella('Mary', 22, 38),
    new Cinderella('Rosy', 18, 33),
    new Cinderella('Valery', 27, 35),
    new Cinderella('Helga', 21, 37),
    new Cinderella('Ruby', 26, 32),
    new Cinderella('Jess', 31, 39),
    new Cinderella('Nicole', 25, 31),
    new Cinderella('Bridget', 28, 40),
]
let prince = new Prince('Will', 27, 35)
console.log(Cinderellas.filter(Cinderella=> Cinderella.footSize === prince.shoe));
console.log(Cinderellas.find(Cinderella=> Cinderella.footSize ===prince.shoe));