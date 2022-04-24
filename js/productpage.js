import { products } from "./fetchproducts.js";
const productPageGrid = document.querySelector(".product-page-grid");

let cartTotal = localStorage.getItem("cartTotal");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");
const productColor = params.get("color");
window.localStorage.setItem("selectedColor", JSON.stringify(productColor));

const htmlTitle = document.querySelector("title");
const navProduct = document.querySelector(".nav-product");
htmlTitle.innerHTML = `Rainydays - ${products[productId].name}`;
navProduct.innerHTML = `${products[productId].name}`;

let price = products[productId].prices.price.slice(0, -2);
let priceDecimals = products[productId].prices.price.slice(3);
let productPrice = price + "," + priceDecimals;

productPageGrid.innerHTML += `<div></div>
        <div class="product-detail">
          <h1 class="product-name">${products[productId].name}</h1>
          <div class="color-select"></div>
          <div>
            <span class="material-icons md-24">ac_unit</span>
            <span class="material-icons md-24">water_drop</span>
            <span class="material-icons md-24">air</span>
          </div>
          <h2>Price - ${productPrice} Kr</h2>
          <div class="details text-left">
            <label for="size">Size:</label>
            <select name="size" id="size"></select>
          </div>
          <button class="cta-button add-to-cart vertical-cta-button" id="add-to-cart">Add to Cart</button>
          <a href="shopping_cart.html"><button class="cta-button vertical-cta-button">View Cart Items</button></a>
          ${products[productId].description}
        </div>`;

const colorSelect = document.querySelector(".color-select");
const addToCart = document.querySelector(".add-to-cart");
const selectSize = document.querySelector("#size");
const productName = document.querySelector(".product-name");
const displayCartItems = document.querySelector(".display-items");

// COLOR SELECT LOOP

products[productId].attributes[0].terms.forEach((color) => {
  colorSelect.innerHTML += `<input type="radio" id="${color.name.toLowerCase()}" name="color-select" 
  value="${color.name}"/> <label for="${color.name}">${color.name}</label>`;
  // colorSelect.input.checked.style.border = "12px solid black";
});

// COLOR SELECT LOOP

// DISPLAY PRODUCT IMG

colorSelect.innerHTML += `<div class="product-img"><img class="product-img-sizer" src="img/${products[
  productId
].name.toLowerCase()}_${productColor.toLowerCase()}.jpg" alt="" /></div>`;

const productImg = document.querySelector(".product-img");

productImg.style.background = `url(./img/${products[productId].name}_${productColor}.jpg) no-repeat`;
productImg.style.backgroundSize = `cover`;

// DISPLAY PRODUCT IMG

// SIZE SELECT LOOP

products[productId].attributes[1].terms.forEach((size) => {
  selectSize.innerHTML += `<option value="${size.name}">${size.name}</option>`;
});

// SIZE SELECT LOOP

function updatePageData(cartNum) {
  if (cartNum === null) {
    displayCartItems.innerHTML = `0`;
  } else {
    displayCartItems.innerHTML = `${cartNum}`;
  }
}

updatePageData(cartTotal);

// CHECK COLOR

let colorRadioSelected = document.getElementsByName("color-select");

colorRadioSelected.forEach((radio) => {
  radio.addEventListener("change", function checkRadio() {
    let radioSelected = document.querySelector('.color-select input[name="color-select"]:checked');
    let radioNotSelected = document.querySelectorAll('.color-select input[name="color-select"]');
    if (radioSelected.checked === true) {
      radioNotSelected.forEach((notSelected) => {
        notSelected.style.border = `3px solid black`;
        radioSelected.style.border = `12px solid ${radioSelected.value}`;
      });
    }

    productImg.style.background = `url(./img/${products[productId].name}_${radioSelected.value}.jpg) no-repeat`;
    productImg.style.backgroundSize = `cover`;
    window.localStorage.setItem("selectedColor", JSON.stringify(radioSelected.value));
  });
});

// CHECK COLOR

function checkCart(cart) {
  if (cart === null) {
    let cart = [];
    return cart;
  } else {
    return cart;
  }
}

addToCart.addEventListener("click", function addToCart() {
  const radioSelected = JSON.parse(localStorage.getItem("selectedColor"));
  let currentCart = JSON.parse(localStorage.getItem("cartItems"));
  let cart = checkCart(currentCart);
  cart.push({
    name: productName.innerHTML,
    color: radioSelected,
    price: productPrice,
    size: selectSize.value,
    total: 1,
  }),
    window.localStorage.setItem("cartItems", JSON.stringify(cart));
  const inCart = JSON.parse(localStorage.getItem("cartItems"));
  let cartAdd = 0;
  updateCart(inCart, cartAdd);
  let cartTotal = localStorage.getItem("cartTotal");
  updatePageData(cartTotal);
});

function updateCart(inCart, cartAdd) {
  for (var i = 0; i < inCart.length; i++) {
    cartAdd += Number(inCart[i].total);
    window.localStorage.setItem("cartTotal", JSON.stringify(cartAdd));
  }
}
