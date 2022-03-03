import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header"
import { Main } from "../../components/main/main";

export const mainPage = () => {
    return `
    <body>
        <header>
            ${Header}
        </header>

        <main>
            ${Main}
        </main>

        <footer class="footer">
            ${Footer}
        </footer>
    </body>
    `;
};