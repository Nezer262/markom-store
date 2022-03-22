import { listData } from "../store/main-page/list-data.js";
import { telData } from "../store/main-page/tel-data.js";
import { btnData } from "../store/main-page/btn-data.js";
import { controlsData } from "../store/main-page/controls-data.js";
import { Btn } from "./btn/btn.js";
import { Controls } from "./controls/controls.js";
import { list } from "./list/list.js"
import { Logo } from "./logo/logo.js";
import { Search } from "./search/search.js";
import { tel } from "./tel/tel.js"

export const Header = () => {
    return `
    <div class="root-header">
        <div class="wrapper">
            <nav class="nav">
                <div class="nav__menu">
                    <div class="nav-left">
                        ${list(listData)}
                    </div>
                    <div class="nav-right">
                        ${tel(telData)}
                    </div>
                </div>
            </nav>
            <div class="menu">
                ${Logo()}
                ${Btn(btnData)}
                ${Search()}
                ${Controls(controlsData)}
            </div>
        </div>
    </div>
    `;
}