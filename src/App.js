import ProductDetailPage from "./pages/ProductDetailPage.js";
import ProductListPage from "./pages/ProductListPage.js";
import { init } from "./utils/router.js";

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = window.location;
    console.log(pathname, "url 시작");
    $target.innerHTML = "";
    if (pathname === "/web/") {
      new ProductListPage({ $target });
    } else if (pathname.slice(0, 14) === "/web/products/") {
      const [, , , productId] = pathname.split("/");
      new ProductDetailPage({
        $target,
        initialState: {
          productId: productId,
          product: null,
        },
      });
    }
  };

  this.route();
  init(this.route);

  window.addEventListener("popstate", this.route);
}
