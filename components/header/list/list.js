export const list = (props) => {
    const {catalog, aboutCompany, contacts, delivery, pay, cab, blog} = props;
    return `
    <ul class="nav__link">
        <li><a class="nav__list" href="#/catalog">${catalog}</a></li>
        <li><a class="nav__list" href="#/aboutCompany">${aboutCompany}</a></li>
        <li><a class="nav__list" href="#/contacts">${contacts}</a></li>
        <li><a class="nav__list" href="#/delivery">${delivery}</a></li>
        <li><a class="nav__list" href="#/pay">${pay}</a></li>
        <li><a class="nav__list" href="#/cab">${cab}</a></li>
        <li><a class="nav__list" href="#/blog">${blog}</a></li>
    </ul>
    `
};