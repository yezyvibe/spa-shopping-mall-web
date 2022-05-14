import ProductList from "../components/ProductList.js";
import { request } from "../utils/api.js";

export default function ProductListPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "ProductListPage";
  $target.appendChild($page);

  this.render = () => {
    $page.innerHTML = `
      <h1>상품목록</h1>
    `;
  };

  this.setState = (nextState) => {
    this.state = nextState;
  };

  this.init = async () => {
    const result = await request();
    if (result.length > 0) {
      this.setState(result);
      new ProductList({
        $target: $page,
        initialState: result,
      });
    }
  };
  this.render();
  this.init();
}
