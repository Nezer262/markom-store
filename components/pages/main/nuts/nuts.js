import { mainPageStore } from "../../../store/main-page/main-pageStore.js";
import { Product } from "../product/product.js";

export const loadDataNuts = (data) => {
    let newStr = "";
    data.nutsProductsData.forEach(item => {
        newStr += Product(item)
    })
    return newStr;
}

export const Nuts = () => {
    return `
    <div class="nuts">
        <h3 class="nuts__title title">Орехи</h3>
        <div class="nuts__products">
            ${loadDataNuts(mainPageStore)}
        </div>
    </div>
    `;
}