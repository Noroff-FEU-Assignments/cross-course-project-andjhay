const productCard = document.querySelector(".product-gallery-grid");

import { products } from "./fetchproducts.js";

products.forEach((current, index) => {
  current.attributes[0].terms.forEach((attribute) => {
    let priceStart = products[index].prices.price.slice(0, -2);
    let priceDecimals = products[index].prices.price.slice(3);
    let price = [priceStart + "," + priceDecimals];

    productCard.innerHTML += `<div class="product-card"><h2>${products[index].name}</h2>
    <a href="product.html"> <img class="product-gallery" 
      src="img/${products[index].name}_${attribute.name}.jpg" alt="picture of dark coloured jacket." />
    </a>
    <div class="weather-icons">
      <span class="material-icons md-24">ac_unit</span>
      <span class="material-icons md-24">water_drop</span>
      <span class="material-icons md-24">air</span>
    </div><h2>Price - ${price} NOK</h2>
    <a href="product.html?id=${index}&color=${attribute.name}" class="cta-button">More Details</a>
    </div>`;
  });
});
