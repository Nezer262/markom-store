export const Product = () => {
    return `
    <div class="product">
        <div class="product__link">
            <a class="product__img" href="#"><img src="assets/img/foreign.png" alt="product" width="220px" height="210px"></a>
            <div class="product__sticker">-56%</div>
        </div>
        <div class="product__name"><a class="product__name-link" href="#">Авокадо, 1 шт</a></div>
        <div class="product__price">
            <div class="product__price-before">135 ₽</div>
            <div class="product__price-after">59 ₽</div>
        </div>
        <button class="product__btn">В корзину<img class="product__btn-img" src="assets/img/cart-white.png" alt="" width="18px"></button>
    </div>
    `;
}