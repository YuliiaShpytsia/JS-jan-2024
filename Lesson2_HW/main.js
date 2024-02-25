// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let name = ['masha', 'dasha', 'vasya', 'kolya', 'anna', 'olya', 'ksenya', 'pavel', 'ihor', 'ivan'];
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);
console.log(name[7]);
console.log(name[8]);
console.log(name[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1 = {
//     title: 'LotR',
//     pageCount: 900,
//     genre: 'fantasy'
// };
// let book2 = {
//     title: 'Omen',
//     pageCount: 360,
//     genre: 'horror'
// }
// let book3 = {
//     title: 'ZoeBentley',
//     pageCount: 432,
//     genre: 'thriller'
// }

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title: 'LotR',
    pageCount: 900,
    genre: 'fantasy',
    authors: [ author1 = {name: 'TolkienD', age: 90}, author2 = {name: 'TolkienK', age: 45}]
};
let book2 = {
    title: 'Omen',
    pageCount: 360,
    genre: 'horror',
    authors: [ author1 = {name: 'Alexis', age: 43}, author2 = {name: 'Stiven', age: 27}]
};
let book3 = {
    title: 'ZoeBentley',
    pageCount: 432,
    genre: 'thriller',
    authors: [ author1 = {name: 'Mark', age: 45}, author2 = {name: 'Omer', age: 43}]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    user1 = {
        name: 'Anna',
        username: 'Annie',
        password: 'qwerty'
    },
    user2 = {
        name: 'Ksenia',
        username: 'Ksyu',
        password: 'battle'
    },
    user3 = {
        name: 'Alice',
        username: 'Acid',
        password: 'mango'
    },
    user4 = {
        name: 'Ivan',
        username: 'Ford',
        password: 'gdhsdc'
    },
    user5 = {
        name: 'Sem',
        username: 'Moose',
        password: 'brother'
    },
    user6 = {
        name: 'Dean',
        username: 'Impala',
        password: 'baby'
    },
    user7 = {
        name: 'Anna',
        username: 'Annie',
        password: 'qwerty'
    },
    user8 = {
        name: 'Crowley',
        username: 'King',
        password: 'dog'
    },
    user9 = {
        name: 'Kastiel',
        username: 'Angel',
        password: 'heaven'
    },
    user10 = {
        name: 'Lucifer',
        username: 'Devil',
        password: 'hell'
    }
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = 1;
if (a > 0) {
    document.write('<h2>Correct</h2>')
}
else {
    document.write('<h2>Incorrect</h2>')
}
a = 0;
if (a > 0) {
    document.write('<h2>Correct</h2>')
}
else {
    document.write('<h2>Incorrect</h2>')
}
a = -3;
if (a > 0) {
    document.write('<h2>Correct</h2>')
}
else {
    document.write('<h2>Incorrect</h2>')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 56;
if (time > 0 && time <= 15){
    document.write('<h3>Перша чверть</h3>')
} else if (time > 15 && time <= 30) {
    document.write('<h3>Друга чверть</h3>')
} else if (time > 30 && time <= 45) {
    document.write('<h3>Третя чверть</h3>')
} else if (time > 45 && time <= 59) {
    document.write('<h3>Четверта чверть</h3>')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 12;
if (day > 0 && day <= 10){
    document.write('<h3>Перша декада</h3>')
} else if (day > 10 && day <= 20) {
    document.write('<h3>Друга декада</h3>')
} else if (day > 20 && day <= 31) {
    document.write('<h3>Третя декада</h3>')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let num = 7;
switch (num) {
    case 1:
        console.log('Lecture 3 JS');
        break;
    case 2:
        console.log('Consultation 2 JS')
        break;
    case 3:
        console.log('Lecture 4 JS');
        break;
    case 4:
        console.log('Consultation 3 JS')
        break;
    case 5:
        console.log('Consultation 5 JS')
        break;
    case 6:
        console.log('English')
        break;
    case 7:
        console.log('brain death')
        break;
    default:
        console.log('Enter correct number')
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.