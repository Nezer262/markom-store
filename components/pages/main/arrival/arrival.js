import { mainPageStore } from "../../../store/main-page/main-pageStore.js";
import { Product } from "../product/product.js";

export const loadDataArrival = (data) => {
    let newStr = "";
    data.arrivalProductsData.forEach(item => {
        newStr += Product(item);
    })
    return newStr;
};

export const Arrival = () => {
    return `
    <div class="arrival">
        <h3 class="arrival__title title">Новое поступление</h3>
        <div class="arrival__products">
            ${loadDataArrival(mainPageStore)}
        </div>
    </div>
    `;
}