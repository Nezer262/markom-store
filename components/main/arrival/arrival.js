import { Product } from "../product/product";

export const Arrival = () => {
    return `
    <div class="arrival">
        <h3 class="arrival__title title">Новое поступление</h3>
        <div class="arrival__products">
            ${Product}
            ${Product}
            ${Product}
            ${Product}
            ${Product}
            <div class="product">
                <div class="product__link">
                    <a class="product__img" href="#"><img src="assets/img/peach.jpg" alt="product" width="220px" height="210px"></a>
                    <div class="product__sticker">-13%</div>
                </div>
                <div class="product__name"><a class="product__name-link" href="#">Персик, 1 кг</a></div>
                <div class="product__price">
                    <div class="product__price-before">110 ₽</div>
                    <div class="product__price-after">96 ₽</div>
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