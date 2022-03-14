export const Btn = (props) => {
    const {name} = props;
    return `
    <button class="btn menu__btn">
        <div class="burger">
            <span class="burger-link"></span>
        </div>
        ${name}
    </button>
    `
};