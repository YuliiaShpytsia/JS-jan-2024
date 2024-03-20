// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(({carts}) => {
        for (const cart of carts) {
           let box = document.createElement('div');
           box.classList.add('user');
           let id = document.createElement('p');
           let total = document.createElement('p');
           let discountedTotal = document.createElement('p');
           let totalProducts = document.createElement('p');
           let totalQuantity = document.createElement('p');
           let userId = document.createElement('p');
           id.innerText = `ID: ${cart.id}`;
           total.innerText = `Total price: ${cart.total}`;
           discountedTotal.innerText = `Total discount: ${cart.discountedTotal}`;
           totalProducts.innerText = `Products: ${cart.totalProducts}`;
           totalQuantity.innerText = `Quantity products: ${cart.totalQuantity}`;
           userId.innerText = `User: ${cart.userId}`;
           let box2 =  document.createElement('div');
           box.append(id, total, discountedTotal, totalProducts, totalQuantity, userId, box2);

            let products = cart.products
            for (const product of products) {
                let h3 = document.createElement("h3");
                let img = document.createElement("img");
                let p = document.createElement("p");
                h3.innerText = product.title;
                img.src = product.thumbnail;
                p.innerText = `Product ID - ${product.id}, Discount - ${product.discountPercentage}%, Discounted Price - ${product.discountedPrice}, Price - ${product.price}, Quantity - ${product.quantity}, Total - ${product.total}`;
                img.classList.add('pic')
                box2.append(h3, img, p)
            }
           document.body.append(box)
        }
    });
//
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((asd) => asd.json())
//     .then((users) => {
//         for (const {name,username,email} of users) {
//             document.write(`<div>
//                 ${name} ${username}
//             </div>`)
//
//         }
//     });
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
//
//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)