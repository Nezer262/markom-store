import { Product } from "../product/product";
import { ProductCart } from "../product/productCart";

export const Nuts = () => {
    return `
    <div class="nuts">
        <h3 class="nuts__title title">Орехи</h3>
        <div class="nuts__products">
            ${Product({img: 'assets/img/hazelnut.jpg', name: 'Фундук очищенный, 1 кг', priceAfter: '1600 ₽'})}
            ${Product({img: 'assets/img/walnuts.jpg', name: 'Грецкий орех, 1 кг', priceAfter: '1110 ₽'})}
            ${Product({img: 'assets/img/pistachios.jpg', name: 'Фисташки в скорлупе, 1 кг', priceAfter: '900 ₽'})}
            ${Product({img: 'assets/img/cashew.jp', name: 'Кешью, 1 кг', priceAfter: '1128 ₽'})}
            ${Product({img: 'assets/img/almond.jpg', name: 'Миндаль, 1 кг', priceAfter: '>1500 ₽'})}
            ${ProductCart({img: 'assets/img/hazelnut-shell.jpg', name: 'Фундук в скорлупе, 1 кг', priceAfter: '1000 ₽'}, isCard)}
        </div>
    </div>
    `;
}