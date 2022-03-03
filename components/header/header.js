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
                        ${list}
                    </div>
                    <div class="nav-right">
                        ${tel}
                    </div>
                </div>
            </nav>
            <div class="menu">
                ${Logo}
                ${Btn}
                ${Search}
                ${Controls}
            </div>
        </div>
    </div>
    `;
}