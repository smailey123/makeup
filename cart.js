let cart_items_element = document.querySelector('.cart-items');
let cart_total = document.querySelector('.total-price')

function get_cart_item(item) {
    return `<article class="cart-item">
                    <div class="cart-items-left">
                        <img src='${products[item.productIndex].image}'>
                        <h2>${products[item.productIndex].title}</h2>
                    </div>
                    <div class="cart-items-middole">
                        <span>Кількість</span>
                        <input class="quantity-input" type="number" value='${item.quantity}'>
                    </div>
                    <p class="cart-item-total">${products[item.productIndex].price * item.quantity}грн</p>
            </article> `
}

function showCartList() {
    cart_items_element.innerHTML =''
    for (let i = 0;i< cart.products.length;i++){// проходимо по всіх ключах об`єкта cart_item

    }
}