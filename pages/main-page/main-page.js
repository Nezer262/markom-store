import { Footer } from "../../components/footer/footer.js";
import { Header } from "../../components/header/header.js";
import { Main } from "../../components/pages/main/main.js";

export const mainPage = () => {
    return `
        <header>
            ${Header()}
        </header>

        <main>
            ${Main()}
        </main>

        <footer class="footer">
            ${Footer()}
        </footer>
    `;
};