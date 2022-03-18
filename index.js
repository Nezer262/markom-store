import { mainPage } from "./pages/main-page/main-page";

const mainComponent = {
  render: () => {
    return mainPage();
  },
};

const catalogComponent = {
  render: () => {
    return `
    <section>
        <h1>Page 2</h1>
        <p>This is just a test</p>
    </section>
    `;
  },
};

const aboutCompanyComponent = {
  render: () => {
    return `
    <section>
        <h1>Page 2</h1>
        <p>This is just a test</p>
    </section>
    `;
  },
};

const contactsComponent = {
  render: () => {
    return `
    <section>
        <h1>Page 2</h1>
        <p>This is just a test</p>
    </section>
    `;
  },
};

const deliveryComponent = {
  render: () => {
    return `
    <section>
        <h1>Page 2</h1>
        <p>This is just a test</p>
    </section>
    `;
  },
};

const payComponent = {
  render: () => {
    return `
    <section>
        <h1>Page 2</h1>
        <p>This is just a test</p>
    </section>
    `;
  },
};

const cabComponent = {
  render: () => {
    return `
    <section>
        <h1>Page 2</h1>
        <p>This is just a test</p>
    </section>
    `;
  },
};

const blogComponent = {
  render: () => {
    return `
    <section>
        <h1>Page 2</h1>
        <p>This is just a test</p>
    </section>
    `;
  },
};

const ErrorComponent = {
  render: () => {
    return `
    <section>
        <h1>Error</h1>
        <p>This is just a test</p>
    </section>
    `;
  },
};

const routes = [
  { path: "/", component: mainComponent },
  { path: "/catalog", component: catalogComponent },
  { path: "/aboutCompany", component: aboutCompanyComponent },
  { path: "/contacts", component: contactsComponent },
  { path: "/delivery", component: deliveryComponent },
  { path: "/pay", component: payComponent },
  { path: "/cab", component: cabComponent },
  { path: "/blog", component: blogComponent },
];

const parseLocation = () => location.hash.slice(1).toLowerCase() || "/";

const findComponentByPath = (path, routes) =>
  routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, "gm"))) ||
  undefined;

const router = () => {
  // Find the component based on the current path
  const path = parseLocation();
  // If there's no matching route, get the "Error" component
  const { component = ErrorComponent } =
    findComponentByPath(path, routes) || {};
  // Render the component in the "app" placeholder
  document.querySelector("#root").innerHTML = "";
  document.querySelector("#root").append(component.render());
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
