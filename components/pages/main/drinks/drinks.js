import { Product } from "../product/product";
import { ProductCart } from "../product/productCart";

export const Drinks = () => {
    return `
    <div class="drinks">
        <h3 class="drinks__title title">Вода, соки, напитки</h3>
        <div class="drinks__products">
            ${Product({img: 'assets/img/orange-juice.jpg', name: 'Сок апельсин, 1 л', priceAfter: '120 ₽'})}
            ${Product({img: 'assets/img/banana-juice.png', name: 'Сок банан, 1 л', priceAfter: '120 ₽'})}
            ${Product({img: 'assets/img/pomegranate-juice.jpg', name: 'Сок гранат, 1 л', priceAfter: '140 ₽'})}
            ${Product({img: 'assets/img/grapefruit-juice.jpg', name: 'Сок грейпфут, 1 л', priceAfter: '120 ₽'})}
            ${Product({img: 'assets/img/apple-juice.jpg', name: 'Сок яблоко, 1 л', priceAfter: '>100 ₽'})}
            ${ProductCart({img: 'assets/img/ananas-juice.png', name: 'Сок ананас, 1 л', priceAfter: '120 ₽'}, isCard)}
        </div>
    </div>
    `;
}