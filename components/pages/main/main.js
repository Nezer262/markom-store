import { sliderData } from "../../store/main-page/slider-data.js";
import { Arrival } from "./arrival/arrival.js";
import { Banner } from "./banner/banner.js";
import { Connection } from "./connection/connection.js";
import { Drinks } from "./drinks/drinks.js";
import { Nuts } from "./nuts/nuts.js";
import { Slider } from "./slider/slider.js";

export const Main = () => {
    return `
    <div class="root-main">
        <div class="wrapper">
            ${Slider(sliderData)}
            ${Arrival()}
            ${Banner()}
            ${Drinks()}
            ${Nuts()}
            ${Connection()}
        </div>
    </div>
    `;
}