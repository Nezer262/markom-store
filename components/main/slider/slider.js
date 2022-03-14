export const Slider = (props) => {
    const {name} = props;
    return `
    <div class="slider">
        <a class="slider__link" href="#">
            <img class="slider__img" src="assets/img/slider.jpg" alt="slider" width="100%" height="450px">
            <div class="slider__text">${name}</div>
            <div class="slider__arrow-left"><img src="assets/img/arrow.png" alt=""></div>
            <div class="slider__arrow-right"><img src="assets/img/arrow.png" alt="logo"></div>
        </a>
    </div>
    `;
}