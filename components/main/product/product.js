export const Product = (props) => {
    const {img, sticker, name, priceBefore, priceAfter} = props;
    return `
    <div class="product">
        <div class="product__link">
            <a class="product__img" href="#"><img src="${img}" alt="product" width="220px" height="210px"></a>
            <div class="product__sticker">${sticker}</div>
        </div>
        <div class="product__name"><a class="product__name-link" href="#">${name}</a></div>
        <div class="product__price">
            <div class="product__price-before">${priceBefore}</div>
            <div class="product__price-after">${priceAfter}</div>
        </div>
        <button class="product__btn">В корзину<img class="product__btn-img" src="assets/img/cart-white.png" alt="" width="18px"></button>
    </div>
    `;
}