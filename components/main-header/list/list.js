export const list = () => {
    const navLeft = document.querySelector(".nav-left");
    const navMenu = document.querySelector(".nav__menu");
    navLeft.innerHTML = `
    <div class="nav-left">
        <ul class="nav__link">
            <li><a class="nav__list" href="#">Каталог</a></li>
            <li><a class="nav__list" href="#">О компании</a></li>
            <li><a class="nav__list" href="#">Контакты</a></li>
            <li><a class="nav__list" href="#">Доставка</a></li>
            <li><a class="nav__list" href="#">Оплата</a></li>
            <li><a class="nav__list" href="#">Личный кабинет</a></li>
            <li><a class="nav__list" href="#">Блог</a></li>
        </ul>
    </div>
    `
    navMenu.append(navLeft);
};