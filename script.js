class Product{
    constructor(pic, name, descr, price){
        this.image = pic
        this.title = name
        this.description = descr
        this.price = price
    }
}
let eye = new Product(
    'https://u.makeup.com.ua/y/yw/ywc5thlwmnwj.jpg', 
    'Maybelline New York Lash Sensational Sky High', 
    'Туш для безмежного подовження та обєму вій', 
    460
)
let eye1 = new Product(
    'https://medias.yves-rocher.ua/medias/?context=bWFzdGVyfGltYWdlc3wxNTUxNjJ8aW1hZ2UvcG5nfHN5c19tYXN0ZXIvaW1hZ2VzL2gxMC9oNDgvOTMwNDIzMDk1Mjk5MHxmNzBlZjVjZjZiN2QyYmNlNzRiNjcxOGRhN2FlYTM2NmI1NjEwYjc3NGRmMTM4NTY2MzBkNTQ3MDcwZTc2ZWU5&twic=v1/resize=960/background=white',
    'Рідка Підводка для Контуру Очей',
    'Точне нанесення та чіткість ліній3 мл',
    409
)
let eye2 = new Product(
    'https://u.makeup.com.ua/6/6h/6he4dpoaczsp.jpg',
    'Eveline Cosmetics Variete Lashes Show Full Volume Ultra-Length Mascara',
    'Туш для вій',
    198
)
let eye3 = new Product(
    'https://ezebra.com.ua/rus_pl_LAMEL-MICRO-BROW-PENCIL-DVUHSTORONNII-KARANDASH-DLIA-BROVEI-403-147863_3.webp',
    'LAMEL Make Up Insta Micro Brow Pencil',
    'Олівець для брів',
    121
)


let eyebrow = new Product(
    'https://u.makeup.com.ua/g/gp/gpfbtjrjnvbm.jpg',
    'LOréal Paris Infaillible 24H Brow Lamination',
    'Стійка прозора туш для брів з ефектом ламінування',
    510
)
let eyebrow1 = new Product(
    'https://images.prom.ua/6380645757_w640_h640_karandash-dlya-brovej.jpg',
    'Yves Saint Laurent Dessin des Sourcils Eyebrow Pencil',
    'Олівець для брів',
    1053
)
let eyebrow2 = new Product(
    'https://u.makeup.com.ua/e/ee/eebkwyimhljy.jpg',
    'L`Oréal Paris Infallible 24H Brows',
    'Туш для брів для фіксації форми та надання кольору',
    358
)
let eyebrow3 = new Product(
    'https://pwa-api.eva.ua/img/512/512/resize/5/4/548535_1_1705502578.jpg',
    'Maybelline New York Brow Ultra Slim Eyebrow Pencil',
    'Автоматичний ультратонкий олівець для брів',
    292
)


let lips = new Product(
    'https://pwa-api.eva.ua/img/0/0/resize/7/7/776583_1_1730466673.jpg',
    'Maybelline New York SuperStay Vinyl Ink',
    'Cтійка рідка помада для губ з глянцевим фінішем',
    406
)
let lips1 = new Product(
    'https://u.makeup.com.ua/u/ul/ul0hrcbjocaa.jpg',
    'NYX Professional Makeup Slim Lip Pencil',
    'Тонкий олівець для губ',
    249
)
let lips2 = new Product(
    'https://images.prom.ua/4362628711_w640_h320_olijka-dlya-gub.jpg',
    'NYX Professional Makeup Fat Oil Lip Drip',
    'Блиск-олія для губ',
    439
)
let lips3 = new Product(
    'https://u.makeup.com.ua/r/ra/rab9kvgvogak.jpg',
    'Yves Saint Laurent Rouge Volupte Shine',
    'Губна помада',
    2429
)

let Face = new Product(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXFJHGXqPzKCUjmZJHgM-Gzsoe9nnwlnPokg&s',
    'Catrice HD Liquid Coverage Foundation',
    'Рідка тональна основа',
    292
)
let Face1 = new Product(
    'https://icosmo.com.ua/content/237159.webp',
    'L`Oréal Paris True Match',
    'Високопігментований консилер для обличчя',
    454
)
let Face2 = new Product(
    'https://ezebra.com.ua/rus_pl_MAYBELLINE-ERASER-ANTI-AGE-KORREKTOR-95-COOL-IVORY-6-8ML-148237_1.webp',
    'Maybelline New York Instant Eraser',
    'Мультифункціональний консилер для обличчя',
    400
)
let Face3 = new Product(
    'https://u.makeup.com.ua/i/in/in1ucknby2kd.jpg',
    'LAMEL Make Up BB Blush',
    'Кремові румяна для обличчя',
    179
)

let nail = new Product(
    'https://shelly.ua/image/cache/catalog/shellycare/images/products/1/2318/589826318/1-1000-auto_width_1000.jpg',
    'Олія для нігтів і кутикули з екстрактом суниці та вітаміном Е',
    'Shelly Nail & Cuticle Oil Pen',
    98
)
let nail1 = new Product(
    'https://shelly.ua/image/cache/catalog/VISUALRemuverdlyakutikuliSHELLY-1000x1000.jpg.webp',
    'Ремувер для кутикули',
    'Shelly',
    108
)
let nail2 = new Product(
    'https://u.makeup.com.ua/k/k8/k85fdrl5e00l.jpg',
    'Лак для нігтів, з гелевим ефектом',
    'JERDEN One Step Gel 3 In 1',
    70
)
let nail3 = new Product(
    'https://u.makeup.com.ua/u/ut/uteqcgoeojva.jpg',
    'Гель-лак',
    'Moon Full Air Nude',
    105
)

let palette = new Product(
    'https://content.rozetka.com.ua/goods/images/big/84232363.jpg',
    'NYX Professional Makeup Highlight & Contour Pro Palette',
    'Палетка для контурування',
    1099
)
let palette1 = new Product(
    'https://u.makeup.com.ua/n/nn/nnetzm6bzcbo.jpg',
    'NYX Professional Makeup Gimme Super Stars Highlighter Quad Moon Metals Palette',
    'Палетка хайлайтерів',
    1153
)
let palette2 = new Product(
    'https://u.makeup.com.ua/m/me/metquzqaopze.png',
    'NYX Professional Makeup Love Lust Disco Sweet Cheeks Blush Palette',
    'Палетка рум`ян',
    1140
)
let palette3 = new Product(
    'https://u.makeup.com.ua/x/x8/x8s5i26ux9lx.jpg',
    'Bless Beauty Duo Palette Highlighter Contour',
    'Палетка для макіяжу',
    135
)

let products = [
    eye, eye1, eye2, eye3,
    eyebrow, eyebrow1, eyebrow2, eyebrow3,
    lips, lips1, lips2, lips3, 
    Face, Face1, Face2, Face3,
    nail, nail1, nail2, nail3, 
    palette, palette1, palette2, palette3 
]

//Функція для отримання значення кукі за ім'ям
function getCookieValue(cookieName){
    // Розділяємо всі кукі на окремі частини
    const cookies = document.cookie.split(';');

    // Шукаємоо кукі з вказиним ім'ям 
    for (let i = 0; i<cookies.length; i++){
        const cookie = cookies[i].trim();

        // Перевіряємо чи починається поточне кукі
        if (cookies.startsWith(cookieName + '=')) {
            // Якщо так повертаємо значення кукі
            return cookie.substring(cookieName.length + 1);  //+1 для пропуску символу '='
        }
    }
    // Якщо кукі з вказаним іменем не знайдено, повертаємо порожній рядок або можна повернути null
    return '';
}

class Cart{
    constructon(){
        this.products = []
        this.cartCounter = document. querySelector('.cart-container span');
        this.loadCartFromCookies();
    }
    addItem(productIndex) {
        let productInCart = this.products.find(product => product.productIndex === productIndex);
        if (productInCart) {
            productInCart.quantity += 1;
        }else {
            this.pruducts.push({
                productIndex,
                quantity:1
            });
        }
        this.updateCounter();
        this.saveCartToCookies();
    }

    updateCounter(){
        let count = 0;
        for (let i = 0; i < this.products.length;i++) {
            count += this.products[i].quantity;
        }
        this.cartCounter.innerHTML = count;
    }
    
    updateQuantity(productIndex, newQuantity) {
        let productInCart = this.products.find(product => productIndex === productIndex);
        if (productInCart) {
            productInCart.quantity = newQuantity;
            if (productInCart.quantity == 0) {
                console.log(productInCart)
                this.products = this.products.filter(product => product.productIndex !== productIndex);
                console.log('fd',this.products)
            }
            this.updateCounter();
            this.saveCartToCookies();
        }
    }
    saveCartToCookies(){
        let cartJSON = JSCN.stringify(this.products);
        document.cookies = `cart=S{cartJsON}; max-age=${60 * 60 * 24 * 7};`
    }
    loadCartFromCoocies(){
        let cartCookie = getCookieValue('cart');
        if (cartCookie && cartCookie !== '') {
            this.products = JSON.parse(cartCookie);
            this.updateCounter();
        }
    }
    calculateTotal(){
        let total = 0;
        for(let i = 0;i < this.products.length;i++){
            total += products[this.products[i].productIndex].price * this.products[i].quantity;
        }
        return total;
    }
}
const cart = new Cart();

function getProductCart(product){
    return `<article class="item">
                    <div class="items-div-img"><img class="item-img" src="https://u.makeup.com.ua/y/yw/ywc5thlwmnwj.jpg"></div>
                    <h2 class="items-h2">Maybelline New York Lash Sensational Sky High</h2>
                    <p class="item-desc">Туш для безмежного подовження та обєму вій</p>
                    <p>460</p>
                    <button class="item-buy">
                        <img class="img_logo" src="https://cdn-icons-png.flaticon.com/128/1077/1077979.png">
                        Купити
                    </button>
                </article>`
}
function printProducts(_products) {
    let localProducts = _products ||products
    let itemsContainer = document.querySelector('.items');
    itemsContainer.innerHTML = '';
    if(!localProducts.length) {
        itemsContainer.innerHTML = '<h1>Нема товару</h1>';
        return;
    }

    for(let i = 0;i< localProducts.length;i++){
        itemsContainer.innerHTML += getProductCart(localProducts[i]);
    }

    let bueButtons = document.querySelectorAll('item-buy');
    for(let i = 0;i < buyButtons.length;i++){
        buyButtons[i].addEventListener('click',() => cart.addItem(i))
    }
}