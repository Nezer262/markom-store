export const Product = (props) => {
    const {img, sticker, name, priceBefore, priceAfter, isCard, id} = props;
    const btnDefault = `<button class="product__btn">В корзину<img class="product__btn-img" src="assets/img/cart-white.png" alt="" width="18px"></button>`;
    const btnActive = `
    <div class="product__btn-active">
        <button class="product__btn-minus">-</button>
        <button class="product__btn-text">В корзине 1 кг Перейти</button>
        <button class="product__btn-plus">+</button>
    </div>`;
    const btnChoose = isCard ? btnActive : btnDefault;
    return `
    <div class="product" data-order=${id}>
        <div class="product__link">
            <a class="product__img" href="#"><img src="${img}" alt="product" width="220px" height="210px"></a>
            <div class="product__sticker">${sticker}</div>
        </div>
        <div class="product__name"><a class="product__name-link" href="#">${name}</a></div>
        <div class="product__price">
            <div class="product__price-before">${priceBefore}</div>
            <div class="product__price-after">${priceAfter}</div>
        </div>
        ${btnChoose}
    </div>
    `;
}