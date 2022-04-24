const displayCartItems = document.querySelector(".display-items");
const listCartItems = document.querySelector(".cart-grid");
const submitCheckout = document.querySelector(".checkout-button");

let cartTotal = localStorage.getItem("cartTotal");

function updatePageData(cartNum) {
  if (cartNum === null || cartNum === Array) {
    displayCartItems.innerHTML = `0`;
    listCartItems.innerHTML = "<h2> No Items in Cart </h2>";
  } else {
    displayCartItems.innerHTML = `${cartNum}`;
  }
}

updatePageData(cartTotal);
