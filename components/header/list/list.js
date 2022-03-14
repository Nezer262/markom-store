export const list = (props) => {
    const {catalog, aboutCompany, contacts, delivery, pay, cab, blog} = props;
    return `
    <ul class="nav__link">
        <li><a class="nav__list" href="#">${catalog}</a></li>
        <li><a class="nav__list" href="#">${aboutCompany}</a></li>
        <li><a class="nav__list" href="#">${contacts}</a></li>
        <li><a class="nav__list" href="#">${delivery}</a></li>
        <li><a class="nav__list" href="#">${pay}</a></li>
        <li><a class="nav__list" href="#">${cab}</a></li>
        <li><a class="nav__list" href="#">${blog}</a></li>
    </ul>
    `
};