import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header"
import { Main } from "../../components/pages/main/main";

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