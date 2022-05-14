export default function ProductDetail({ $target, initialState }) {
  this.state = initialState;
  const $component = document.createElement("div");
  $component.className = "ProductDetail";
  $target.appendChild($component);

  this.render = () => {
    const product = this.state;
    console.log(product);
    $component.innerHTML = `
      <img src="${product.imageUrl}">
      <div class="ProductDetail__info">
        <h2>${product.name}</h2>
        <div class="ProductDetail__price">${product.price}원~</div>
        <select>
          <option>선택하세요.</option>
          ${product.productOptions.map(
            (option) => `
            ${
              option.stock === 0
                ? `<option disabled>(품절) ${product.name} ${option.name}</option>`
                : `<option>${product.name} ${option.name} ${
                    option.price > 0 ? `(+${option.price}원)` : ""
                  }</option>`
            } 
          `
          )}
        </select>
        <div class="ProductDetail__selectedOptions">
        </div>
      </div>
    `;
  };

  this.render();
}
