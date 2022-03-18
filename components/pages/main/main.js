import { sliderData } from "../../store/main-page/slider-data";
import { Arrival } from "./arrival/arrival";
import { Banner } from "./banner/banner";
import { Connection } from "./connection/connection";
import { Drinks } from "./drinks/drinks";
import { Nuts } from "./nuts/nuts";
import { Slider } from "./slider/slider";

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