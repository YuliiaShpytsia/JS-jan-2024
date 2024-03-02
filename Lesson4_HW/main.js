// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a, b) {
//     console.log(a * b);
//     return (a * b);
// }
// square(10, 12)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function area(pi, r) {
//     console.log(pi * r * r);
//     return (pi * r ** 2);
// }
// const pi = 3.14;
// area(pi, 7)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function area (pi, r, h) {
//     console.log(2 * pi * r * (h + r));
//     return (2 * pi * r * (h + r));
// }
// const pi = 3.14;
// area (pi, 6, 13);

// - створити функцію яка приймає масив та виводить кожен його елемент
// function user(name) {
//     console.log(name)
// }
// let names = ['masha', 'dasha', 'vasya', 'kolya', 'anna', 'olya', 'ksenya', 'pavel', 'ihor', 'ivan'];
// for (let name of names) {
//    user(name)
// }

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function textString (text) {
//     document.write(`<p>${text}</p>`)
// }
// textString('You are a wizard, Harry!')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function textString (text) {
//     document.write(`<ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
// </ul>`)
// }
// textString('You are a wizard, Harry!')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function textString (text, num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text} </li>`)
//     }
//     document.write(`</ul>`)
// }
// textString('Drakaris!', 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let words = ['sam', 'dean', 'baby', 16, 32, true, false];
// function list () {
//     document.write(`<ul>`)
//     for (let word of words) {
//         document.write(`<li>${word} </li>`)
//     }
//     document.write(`</ul>`)
// }
// list()

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {id: 1, name: 'Sam', age: 20},
//     {id: 2, name: 'Dean', age: 26},
//     {id: 3, name: 'Crowley', age: 300},
//     {id: 4, name: 'Kastiel', age: 2000},
//     {id: 5, name: 'Rowena', age: 325},
//     {id: 6, name: 'Gabriel', age: 2003},
//     {id: 7, name: 'Death', age: 6000},
// ];
// function listOfUsers(array) {
//     for (let user of array) {
//         document.write(`
//          <div>
//              Id - ${user.id},
//              Name - ${user.name} ,
//              Age - ${user.age}
//          </div>
//         `);
//     }
// }
// listOfUsers(users);

// - створити функцію яка повертає найменьше число з масиву
// let numbers = [10, 12, -13, 666, 22, -7]
// function minimal(numbers) {
//     let min = 0;
//     for (let item of numbers) {
//         if (item < min) {
//             min = item;
//         }
//     }
//     console.log(min)
//     return (min)
// }
// minimal(numbers)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->
// let arr = [10, 12, 13, 63, 22, 7];
// function sum () {
//     let count = 0;
//     for (const arrElement of arr) {
//
//         count  = count + arrElement;
//     }
//     console.log(count);
//     return(count);
// }
// sum(arr)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let arr = [10, 12, -13, 666, 22, -7]
// function swap(arr, index1, index2) {
//     [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
//     return arr;
// }
// console.log(swap(arr, 0, 1))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let arr = [
    {currency:'USD',value:40},
    {currency:'EUR',value:42},
    {currency:'ZL',value:9},
    {currency:'GB',value:47},
]
function exchange (sumUAN, arr, money) {
    for (let arrElement of arr) {
        if (arrElement.currency === money) {
            console.log(sumUAN * arrElement.value);
        }
    }
}
exchange (1500, arr, 'USD')