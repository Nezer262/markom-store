import { Product } from "../product/product";

export const Nuts = () => {
    return `
    <div class="nuts">
        <h3 class="nuts__title title">Орехи</h3>
        <div class="nuts__products">
            ${Product}
            ${Product}
            ${Product}
            ${Product}
            ${Product}
            <div class="product">
                <div class="product__link">
                    <a class="product__img" href="#"><img src="assets/img/hazelnut-shell.jpg" alt="product" width="220px" height="210px"></a>
                </div>
                <div class="product__name"><a class="product__name-link" href="#">Фундук в скорлупе, 1 кг</a></div>
                <div class="product__price">
                    <div class="product__price-after">1000 ₽</div>
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