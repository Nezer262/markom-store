export const tel = (props) => {
    const {timeDelivery, number} = props;
    return `
        <div class="nav__timetable">${timeDelivery}</div>
        <div class="nav__number"><a href="tel:+78008008080">${number}</a></div>
        <div class="nav__language">
            <div class="language-en"><a href="#" class="nav__language-item">EN</a></div>
            <span class="nav__language-line"></span>
            <div class="language-es"><a href="#" class="nav__language-item">ES</a></div>
            <span class="nav__language-line"></span>
            <div class="language-ru"><a href="#" class="nav__language-item nav__language-item_active">RU</a></div>
    `
}