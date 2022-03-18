import { Product } from "../product/product";
import { ProductCart } from "../product/productCart";

export const Arrival = () => {
    return `
    <div class="arrival">
        <h3 class="arrival__title title">Новое поступление</h3>
        <div class="arrival__products">
            ${Product({img: 'assets/img/foreign.png', sticker: '-56%', name: 'Авокадо, 1 шт', priceBefore: '135 ₽', priceAfter: '59 ₽'})}
            ${Product({img: 'assets/img/ananas.jpg', name: 'Ананас, 1 шт', priceAfter: '146 ₽'})}
            ${Product({img: 'assets/img/pomegranate.jpg', sticker: '-9%', name: 'Гранат, 1 кг', priceBefore: '320 ₽', priceAfter: '290 ₽'})}
            ${Product({img: 'assets/img/grapefruit.jpg', sticker: '-26%', name: 'Грейпфрут, 1 кг', priceBefore: '190 ₽', priceAfter: '140 ₽'})}
            ${Product({img: 'assets/img/pear.jpg', name: 'Груша дюшес, 1 кг', priceAfter: '89 ₽'})}
            ${ProductCart({img: 'assets/img/peach.jpg', sticker: '-13%', name: 'Персик, 1 кг', priceBefore: '110 ₽', priceAfter: '96 ₽'}, isCard)}
        </div>
    </div>
    `;
}