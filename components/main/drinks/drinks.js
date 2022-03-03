import { Product } from "../product/product";

export const Drinks = () => {
    return `
    <div class="drinks">
        <h3 class="drinks__title title">Вода, соки, напитки</h3>
        <div class="drinks__products">
            ${Product}
            ${Product}
            ${Product}
            ${Product}
            ${Product}
            <div class="product">
                <div class="product__link">
                    <a class="product__img" href="#"><img src="assets/img/ananas-juice.png" alt="product" width="220px" height="210px"></a>
                </div>
                <div class="product__name"><a class="product__name-link" href="#">Сок ананас, 1 л</a></div>
                <div class="product__price">
                    <div class="product__price-after">120 ₽</div>
                </div>
                <!-- <button class="product__btn">В корзину<img class="product__btn-img" src="assets/img/cart-white.png" alt="" width="18px"></button> -->
                <div class="product__btn-active">
                    <button class="product__btn-minus">-</button>
                    <button class="product__btn-text">В корзине 1 кг Перейти</button>
                    <button class="product__btn-plus">+</button>
                </div>
            </div>
        </div>
    </div>
    `;
}