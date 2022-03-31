import { mainPageStore } from "../../../store/main-page/main-pageStore.js";
import { Product } from "../product/product.js";

export const loadDataDrinks = (data) => {
    let newStr = "";
    data.drinksProductsData.forEach(item => {
        newStr += Product(item)
    })
    return newStr;
};

export const Drinks = () => {
    return `
    <div class="drinks">
        <h3 class="drinks__title title">Вода, соки, напитки</h3>
        <div class="drinks__products">
            ${loadDataDrinks(mainPageStore)}
        </div>
    </div>
    `;
}