// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(({carts}) => {
//         for (const cart of carts) {
//            let box = document.createElement('div');
//            box.classList.add('user');
//            let id = document.createElement('p');
//            let total = document.createElement('p');
//            let discountedTotal = document.createElement('p');
//            let totalProducts = document.createElement('p');
//            let totalQuantity = document.createElement('p');
//            let userId = document.createElement('p');
//            id.innerText = `ID: ${cart.id}`;
//            total.innerText = `Total price: ${cart.total}`;
//            discountedTotal.innerText = `Total discount: ${cart.discountedTotal}`;
//            totalProducts.innerText = `Products: ${cart.totalProducts}`;
//            totalQuantity.innerText = `Quantity products: ${cart.totalQuantity}`;
//            userId.innerText = `User: ${cart.userId}`;
//            let box2 =  document.createElement('div');
//            box.append(id, total, discountedTotal, totalProducts, totalQuantity, userId, box2);
//
//             let products = cart.products
//             for (const product of products) {
//                 let h3 = document.createElement("h3");
//                 let img = document.createElement("img");
//                 let p = document.createElement("p");
//                 h3.innerText = product.title;
//                 img.src = product.thumbnail;
//                 p.innerText = `Product ID - ${product.id}, Discount - ${product.discountPercentage}%, Discounted Price - ${product.discountedPrice}, Price - ${product.price}, Quantity - ${product.quantity}, Total - ${product.total}`;
//                 img.classList.add('pic')
//                 box2.append(h3, img, p)
//             }
//            document.body.append(box)
//         }
//     });
//

//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
fetch('https://dummyjson.com/recipes?limit=50')
    .then(res => res.json())
    .then(value => {
        let {recipes} = value;
        for (const recipe of recipes) {
            let div = document.createElement('div');
            let p = document.createElement('p');
            let h2 = document.createElement('h2');
            let p2 = document.createElement('p');
            let img = document.createElement('img');
            p.innerText = recipe.id;
            h2.innerText = recipe.name;
            p2.innerText = 'Ingredients:'
            img.src = recipe.image;
            img.classList.add('photo');
            div.classList.add('recipe');
            let ul = document.createElement('ul');
            let ingredients = recipe.ingredients;
            for (const ingredient of ingredients) {
                let li = document.createElement('li');
                li.innerText = ingredient;
                ul.appendChild(li);
            }
        div.append(p, h2, img, p2, ul);
        document.body.appendChild(div);
        }
    })

