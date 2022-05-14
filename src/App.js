import ProductListPage from "./pages/ProductListPage.js";

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = window.location;
    $target.innderHTML = "";
    if (pathname === "/web/") {
      new ProductListPage({ $target });
    }
  };

  this.route();
}
