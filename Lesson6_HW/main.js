// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let hw = 'hello world';
// console.log(hw.length);
// let lorem = 'lorem ipsum';
// console.log(lorem.length);
// let js = 'javascript is cool';
// console.log(js.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let hw = 'hello world';
// console.log(hw.toUpperCase());
// let lorem = 'lorem ipsum';
// console.log(lorem.toUpperCase());
// let js = 'javascript is cool';
// console.log(js.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let hw = 'HELLO WORLD';
// console.log(hw.toLowerCase());
// let lorem = 'LOREM IPSUM';
// console.log(lorem.toLowerCase());
// let js = 'JAVASCRIPT IS COOL';
// console.log(js.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.substring(1, str.length - 3));

//метод взяла не з лекції, він просто ідеально підходить до цього завдання
// let str = ' dirty string   ';
// console.log(str.trim())

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// function stringToArray(str) {
//     console.log(str.split(' '));
// }
// stringToArray(str)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let nums = [10,8,-7,55,987,-1011,0,1050,0];
// let map = nums.map((num,) => {
//     num = num.toString();
//     return num;
// }
// );
// console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// function sortNums (nums, direction) {
//      if (direction === 'ascending') {
//          return nums.sort((firstNum, secNum) =>firstNum - secNum)
//      }
//      else if (direction === 'descending'){
//         return nums.sort((firstNum, secNum) =>secNum - firstNum)
//      }
// }
// sortNums (nums, 'ascending')
// console.log(sortNums (nums, 'ascending'))

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//
// let sort = coursesAndDurationArray.sort((first, sibling) => {
//      return (sibling.monthDuration - first.monthDuration);
// })
// console.log(sort)
//
// let filter = coursesAndDurationArray.filter((item) => item.monthDuration > 5);
// console.log(filter);
//
// let map = coursesAndDurationArray.map((item, index) => ({id: index + 1, ...item}));
// console.log(map)

//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// let cards = [
//     {cardSuit: 'spade', value: '6', color: 'black'},
//     {cardSuit: 'spade', value: '7', color: 'black'},
//     {cardSuit: 'spade', value: '8', color: 'black'},
//     {cardSuit: 'spade', value: '9', color: 'black'},
//     {cardSuit: 'spade', value: '10', color: 'black'},
//     {cardSuit: 'spade', value: 'jack', color: 'black'},
//     {cardSuit: 'spade', value: 'queen', color: 'black'},
//     {cardSuit: 'spade', value: 'king', color: 'black'},
//     {cardSuit: 'spade', value: 'ace', color: 'black'},
//     {cardSuit: 'diamond', value: '6', color: 'red'},
//     {cardSuit: 'diamond', value: '7', color: 'red'},
//     {cardSuit: 'diamond', value: '8', color: 'red'},
//     {cardSuit: 'diamond', value: '9', color: 'red'},
//     {cardSuit: 'diamond', value: '10', color: 'red'},
//     {cardSuit: 'diamond', value: 'jack', color: 'red'},
//     {cardSuit: 'diamond', value: 'queen', color: 'red'},
//     {cardSuit: 'diamond', value: 'king', color: 'red'},
//     {cardSuit: 'diamond', value: 'ace', color: 'red'},
//     {cardSuit: 'heart', value: '6', color: 'red'},
//     {cardSuit: 'heart', value: '7', color: 'red'},
//     {cardSuit: 'heart', value: '8', color: 'red'},
//     {cardSuit: 'heart', value: '9', color: 'red'},
//     {cardSuit: 'heart', value: '10', color: 'red'},
//     {cardSuit: 'heart', value: 'jack', color: 'red'},
//     {cardSuit: 'heart', value: 'queen', color: 'red'},
//     {cardSuit: 'heart', value: 'king', color: 'red'},
//     {cardSuit: 'heart', value: 'ace', color: 'red'},
//     {cardSuit: 'clubs', value: '6', color: 'black'},
//     {cardSuit: 'clubs', value: '7', color: 'black'},
//     {cardSuit: 'clubs', value: '8', color: 'black'},
//     {cardSuit: 'clubs', value: '9', color: 'black'},
//     {cardSuit: 'clubs', value: '10', color: 'black'},
//     {cardSuit: 'clubs', value: 'jack', color: 'black'},
//     {cardSuit: 'clubs', value: 'queen', color: 'black'},
//     {cardSuit: 'clubs', value: 'king', color: 'black'},
//     {cardSuit: 'clubs', value: 'ace', color: 'black'}
// ]
// - знайти піковий туз
// let ace = cards.find (card => card.cardSuit === 'spade' && card.value === 'ace')
// console.log(ace)

// - всі шістки
// let six = cards.filter(card => card.value === '6');
// console.log(six)

// - всі червоні карти
// let allRed = cards.filter(card => card.color === 'red');
// console.log(allRed)

// - всі буби
// let diamonds = cards.filter(card => card.cardSuit === 'diamond');
// console.log(diamonds)

// - всі трефи від 9 та більше
// let index1 = cards.findIndex((card, index) => card.cardSuit === 'clubs' && card.value === '9');
// console.log(index1);
// let index2 = cards.findIndex((card, index) => card.cardSuit === 'clubs' && card.value === 'ace');
// console.log(index2);
// let allClubs = cards.slice(30, 36);
// console.log(allClubs)
// =========================
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// let reduce = cards.reduce((bigBox, card) => {
//     if (card.cardSuit === 'spade') {
//         bigBox.spades.push(card);
//     } else if (card.cardSuit === 'diamond') {
//         bigBox.diamonds.push(card);
//     } else if (card.cardSuit === 'heart') {
//         bigBox.hearts.push(card);
//     } else if (card.cardSuit === 'clubs') {
//         bigBox.clubs.push(card);
//     }
//     return bigBox;
// },
//     {spades: [], diamonds: [],  hearts: [], clubs: []});
// console.log(reduce);

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// let findSass = coursesArray.filter(value => value.modules.includes('sass'));
// console.log(findSass)
//
// let searchDocker = coursesArray.filter(value => value.modules.includes('docker'));
// console.log(searchDocker)
