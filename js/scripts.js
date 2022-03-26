const displayCartItems = document.querySelector(".display-items");
const listCartItems = document.querySelector(".cart_grid");
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

const retrieveCart = localStorage.getItem("cartItems");
const inCart = JSON.parse(retrieveCart);

function createCart() {
  inCart.forEach((cartItem, index) => {
    listCartItems.innerHTML += `<div">
            <h2>Jacket - ${cartItem.colour}</h2>
            <img class="order" src="img/jacket_${cartItem.colour}.jpg" alt="picture of dark coloured jacket." />
            <div class="selectors">
              <p>Quantity: ${[cartItem.total]}</p>
              <p>Size: ${[cartItem.size]}</p>
            </div>
          </div>`;
  });
}

createCart();

submitCheckout.addEventListener("click", clearCart);

function clearCart() {
  localStorage.clear();
}
