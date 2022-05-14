import ProductDetail from "../components/ProductDetail.js";
import { request } from "../utils/api.js";

export default function ProductDetailPage({ $target, initialState }) {
  const $page = document.createElement("div");
  $page.className = "ProductDetailPage";
  $page.innerHTML = "<h1>커피잔 상품 정보</h1>";
  $target.appendChild($page);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
  };

  this.fetchProduct = async () => {
    if (this.state.productId) {
      const product = await request(this.state.productId);
      this.setState({
        ...this.state,
        product: product,
      });
      new ProductDetail({
        $target: $page,
        initialState: product,
      });
    }
  };
  this.fetchProduct();
}
