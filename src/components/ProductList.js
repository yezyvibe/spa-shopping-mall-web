import { routeChange } from "../utils/router.js";

export default function ProductList({ $target, initialState }) {
  this.state = initialState;
  const $component = document.createElement("ul");
  $target.appendChild($component);
  console.log(this.state);
  this.render = () => {
    $component.innerHTML = `
      ${this.state
        .map(
          (product) => `
        <li class="Product" data-product-id="${product.id}">
          <img src="${product.imageUrl}">
          <div class="Product__info">
            <div>${product.name}</div>
            <div>${product.price}원~</div>
          </div>
        </li>
      `
        )
        .join("")}
    `;
  };
  this.render();

  $component.addEventListener("click", (e) => {
    const $li = e.target.closest("li");
    const { productId } = $li.dataset;
    if (productId) {
      routeChange(`/web/products/${productId}`);
    }
  });
}
