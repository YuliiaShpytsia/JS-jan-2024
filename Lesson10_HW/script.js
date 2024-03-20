// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
//
// let f1 = document.forms['f1'];
//
// f1.onsubmit = function (e) {
//     e.preventDefault();
//     let cont = document.createElement('div');
//     let name = document.createElement('h3');
//     let surname = document.createElement('h3');
//     let age = document.createElement('h3');
//
//     name.innerText = `Name: ${this.username.value}`
//     surname.innerText = `Surname: ${this.surname.value}`
//     age.innerText = `Age: ${this.age.value}`
//
//     cont.append(name, surname, age);
//     document.body.appendChild(cont);
// };

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// let cont = document.createElement('div');
// let count = localStorage.getItem('count')|| '0';
// let newCount = (+count +1).toString();
// cont.innerText = newCount;
// localStorage.setItem("count", newCount );
// document.body.appendChild(cont);
// ==========================

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
//     let arrayOfSessions = JSON.parse(localStorage.getItem('sessions')) || [];
//
//     let date = new Date();
//     arrayOfSessions.push({
//         day: date.getDate(),
//         hour: date.getHours(),
//         minutes: date.getMinutes(),
//         seconds: date.getSeconds()
//     });
//
//     localStorage.setItem('sessions', JSON.stringify(arrayOfSessions));

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
// function User (id, name, surname) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
// }
// let arrUsers = [];
//     for (let i = 0; i < 100; i++) {
//         arrUsers.push(new User(i + 1, 'Masha', 'Ivanova'));
//     }
// let index =0;
// let prev = document.getElementById('prev');
// let next = document.getElementById('next');
// function list(index){
//     let users = [];
//     let box = document.getElementById('div');
//
//     for (let i = index; i < index+10 ; i++) {
//         let block = document.createElement('div');
//         let li = document.createElement('li');
//                 li.innerText = `User: id - ${arrUsers[i].id}, name - ${arrUsers[i].name}, surname - ${arrUsers[i].surname}`;
//                 block.appendChild(li);
//         users.push(block);
//
//     }
//     box.replaceChildren(...users);
//
// }
// list(index)
//
// next.addEventListener('click', ()=> list(index+= 10))
// prev.addEventListener('click', ()=> list(index -=10));


// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// let text =document.getElementById('text');
// let button = document.getElementById('button');
// button.onclick = function (e){
//       e.preventDefault();
//       if(text.style.display === 'none'){
//           text.style.display = 'block ';
//       }else {
//           text.style.display = 'none';
//       }
// };

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let input = document.getElementById('i1')
// let button = document.getElementById('check')
// let h1 = document.getElementById('text')
//
// button.addEventListener('click', function (e){
//     e.preventDefault()
//     let age = parseInt(input.value)
//     if (age<18){
//         h1.innerText = 'You are too young!'
//     }
//     else{
//         h1.innerText = 'Welcome!'
//     }
// })


//// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let inp1 = document.getElementById('str');
let inp2 = document.getElementById('cols');
let inp3 = document.getElementById('text');
let button = document.getElementById('work');

button.onclick = function (e) {
    let table = document.createElement('table')
    table.classList.add('class')
    document.body.appendChild(table)
    for (let i = 0; i <= inp1.value; i++) {
        let row = document.createElement('tr');
        row.classList.add('class')
        table.appendChild(row);
        for (let i = 0; i <= inp2.value; i++) {
            let column = document.createElement('td')
            column.classList.add('class')
            row.appendChild(column);
            column.innerText = inp3.value;
        }
    }
};
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
// window.addEventListener('load', () => {
//     let localData = localStorage.getItem('counter');
//     if (!localData) {
//         localData = {
//             count: 100,
//             date: new Date().getTime()
//         }
//     }else{
//         localData = JSON.parse(localData)
//     }
//     const now = new Date().getTime()
//     if (now - localData.date > 10 * 1000) {
//         localData.count = localData.count + 10;
//     }
//     localData.date = now;
//
//     document.getElementById('counter').innerText = localData.count + "Гривень"
//     localStorage.setItem('counter', JSON.stringify(localData));
// });