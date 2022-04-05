import { loadDataArrival } from "./components/pages/main/arrival/arrival.js";
import { loadDataDrinks } from "./components/pages/main/drinks/drinks.js";
import { loadDataNuts } from "./components/pages/main/nuts/nuts.js";
import { mainPageStore } from "./components/store/main-page/main-pageStore.js";
import { mainPage } from "./pages/main-page/main-page.js";

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
  routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, "gm"))) || undefined;

const router = () => {
  // Find the component based on the current path
  const path = parseLocation();
  // If there's no matching route, get the "Error" component
  const { component = ErrorComponent } =
    findComponentByPath(path, routes) || {};
  // Render the component in the "app" placeholder
  /* document.querySelector("#root").innerHTML = "";
  document.querySelector("#root").append(component.render()); */
  document.querySelector('#root').innerHTML = component.render();
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

function btnPressArrival() {
  const arrivalProducts = document.querySelector(".arrival__products");
  const products = document.querySelectorAll(".arrival__products .product");

  products.forEach(product => {
    product.addEventListener('click', function(event) {
      if (event.target.className !== 'product__btn') {
        return;
      }
      const currentProductId = this.dataset.order;
      mainPageStore.arrivalProductsData[currentProductId].isCard = true;
      const str = loadDataArrival(mainPageStore)
      arrivalProducts.innerHTML = str
    });
  });

  document.addEventListener('click', function() {
    const arrivalProducts = document.querySelector(".arrival__products");
    const products = document.querySelectorAll(".arrival__products .product");

    products.forEach(product => {
      product.addEventListener('click', function(event) {
        if (event.target.className !== 'product__btn') {
          return;
        }
        const currentProductId = this.dataset.order;
        mainPageStore.arrivalProductsData[currentProductId].isCard = true;
        const str = loadDataArrival(mainPageStore)
        arrivalProducts.innerHTML = str
      })
    })
  })
};

window.addEventListener('load', btnPressArrival);

function btnPressDrinks () {
  const drinksProducts = document.querySelector(".drinks__products");
  const products = document.querySelectorAll(".drinks__products .product");
  
  products.forEach(product => {
    product.addEventListener('click', function(event) {
      if (event.target.className !== "product__btn") {
        return;
      }
      const currentProductId = this.dataset.order;
      mainPageStore.drinksProductsData[currentProductId].isCard = true;
      const str = loadDataDrinks(mainPageStore);
      drinksProducts.innerHTML = str;
    })
  })

  document.addEventListener('click', function () {
    const drinksProducts = document.querySelector(".drinks__products");
    const products = document.querySelectorAll(".drinks__products .product");
  
    products.forEach(product => {
      product.addEventListener('click', function(event) {
        if (event.target.className !== "product__btn") {
          return;
        }
        const currentProductId = this.dataset.order;
        mainPageStore.drinksProductsData[currentProductId].isCard = true;
        const str = loadDataDrinks(mainPageStore);
        drinksProducts.innerHTML = str;
    })
  })
  })
}

window.addEventListener('load', btnPressDrinks);

function btnPressNuts () {
  const nutsProducts = document.querySelector(".nuts__products")
  const products = document.querySelectorAll(".nuts__products .product")

  products.forEach(product => {
    product.addEventListener('click', function(event) {
      if (event.target.className !== 'product__btn') {
        return;
      }
      const currentProductId = this.dataset.order;
      mainPageStore.nutsProductsData[currentProductId].isCard = true;
      const str = loadDataNuts(mainPageStore);
      nutsProducts.innerHTML = str;
    })
  })

  document.addEventListener('click', function () {
    const nutsProducts = document.querySelector(".nuts__products")
    const products = document.querySelectorAll(".product")

    products.forEach(product => {
      product.addEventListener('click', function(event) {
        if (event.target.className !== 'product__btn') {
          return;
        }
        const currentProductId = this.dataset.order;
        mainPageStore.nutsProductsData[currentProductId].isCard = true;
        const str = loadDataNuts(mainPageStore);
        nutsProducts.innerHTML = str;
      })
    })
  })
}

window.addEventListener('load', btnPressNuts);

function plusPressArrival () {
  const arrivalProducts = document.querySelector(".arrival__products")
  const products = document.querySelectorAll(".product .product__btn-plus")

  products.forEach(product => {
    product.addEventListener('click', function (event) {
      if (event.target.className !== 'product__btn-active') {
        return;
      }
      const currentProductId = this.dataset.order;
      mainPageStore.arrivalProductsData[currentProductId].kg += 1;
      const str = loadDataArrival(mainPageStore)
      arrivalProducts.innerHTML = str
    })
  })
}

window.addEventListener('load', plusPressArrival);