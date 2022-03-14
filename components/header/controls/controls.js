export const Controls = (props) => {
    const {statisticValue, cartValue} = props;
    return `
    <div class="controls">
        <div class="item-control"><a class="item-control__link" href="#"><img class="item-control__img" src="assets/img/user.svg" alt="icon" width="28px" height="28px"></a></div>
        <div class="item-control">
            <a class="item-control__link" href="#">
                <img class="item-control__img" src="assets/img/statistic.svg" alt="icon" width="30px" height="30px">
                <div class="item-control__sticker">${statisticValue}</div>
            </a>
        </div>
        <div class="item-control">
            <a class="item-control__link" href="#">
                <img class="item-control__img" src="assets/img/cart.svg" alt="icon" width="35px" height="35px">
                <div class="item-control__sticker">${cartValue}</div>
            </a>
        </div>
        <span class="cart-price"><a class="cart-price__link" href="#">0 ₽</a></span>
    </div>
    `
};