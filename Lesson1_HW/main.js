// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let a = 'hello';
console.log(a);

let b = 'owu';
console.log(b);

let c = 'com';
console.log(c);

let d = 'ua';
console.log(d);

let e = 1;
console.log(e);

e = 10;
console.log(e);

e = -999;
console.log(e);

e = 123;
console.log(e);

e = 3.14;
console.log(e);

e = 2.7;
console.log(e)

e = 16;
console.log(e);

let f = true;
console.log(f)

let g = false;
console.log(g);

// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Yuliia';
let middleName = 'Vadymivna';
let lastName = 'Shpytsia'
let fullName = firstName + ' ' + middleName + ' ' + lastName
console.log(fullName)

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let x = 100;
let y = '100';
let z = true;
console.log(typeof x);
console.log(typeof y);
console.log(typeof z)

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('Enter your name')
console.log(name)
let fatherName = prompt('Enter your fatherName')
console.log(fatherName)
let age = prompt('Enter your age')
console.log(age)