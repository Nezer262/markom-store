import { mainPageStore } from "../../../store/main-page/main-pageStore.js";
import { Product } from "../product/product.js";

const loadData = () => {
    let newStr = "";
    mainPageStore.drinksProductsData.forEach(item => {
        newStr += Product(item)
    })
    return newStr;
};

export const Drinks = () => {
    return `
    <div class="drinks">
        <h3 class="drinks__title title">Вода, соки, напитки</h3>
        <div class="drinks__products">
            ${loadData()}
        </div>
    </div>
    `;
}