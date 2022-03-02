import { list } from "./list/list"
import { tel } from "./tel/tel"

export const Header = () => {
    return `
    <div class="root-header">
        <div class="wrapper">
            <nav class="nav">
                <div class="nav__menu">
                    <div class="nav-left">
                        ${list}
                    </div>
                    <div class="nav-right">
                        ${tel}
                    </div>
                </div>
            </nav>
            <div class="menu">
                <img class="menu__logo" src="assets/img/markom_logo.svg" alt="logo" width="215px" height="50px">
                <button class="menu__btn btn">
                    <div class="menu__burger">
                        <span class="menu__burger-link"></span>
                    </div>
                    Каталог
                </button>
                <div class="menu__search">
                    <form class="menu__search-form" action="" method="get">
                        <input class="menu__search-inp" type="text" placeholder="Поиск">
                        <button class="menu__search-btn" type="submit"><span class="menu__search-icon"></span></button>
                    </form>
                </div>
    
                <div class="menu__controls">
                    <div class="item-control"><a class="item-control__link" href="#"><img class="item-control__img" src="assets/img/user.svg" alt="icon" width="28px" height="28px"></a></div>
                    <div class="item-control">
                        <a class="item-control__link" href="#">
                            <img class="item-control__img" src="assets/img/statistic.svg" alt="icon" width="30px" height="30px">
                            <div class="item-control__sticker">0</div>
                        </a>
                    </div>
                    <div class="item-control">
                        <a class="item-control__link" href="#">
                            <img class="item-control__img" src="assets/img/cart.svg" alt="icon" width="35px" height="35px">
                            <div class="item-control__sticker">0</div>
                        </a>
                        <span class="cart-price"><a href="#">0 ₽</a></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}