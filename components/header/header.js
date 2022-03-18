import { listData } from "../store/main-page/list-data";
import { telData } from "../store/main-page/tel-data";
import { btnData } from "../store/main-page/btn-data";
import { controlsData } from "../store/main-page/controls-data";
import { Btn } from "./btn/btn";
import { Controls } from "./controls/controls";
import { list } from "./list/list"
import { Logo } from "./logo/logo";
import { Search } from "./search/search";
import { tel } from "./tel/tel"

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
                ${Logo}
                ${Btn(btnData)}
                ${Search}
                ${Controls(controlsData)}
            </div>
        </div>
    </div>
    `;
}