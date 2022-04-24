const displayCartItems = document.querySelector(".display-items");
const listCartItems = document.querySelector(".cart-grid");
const checkoutButton = document.querySelector(".to-checkout");

let cartTotal = localStorage.getItem("cartTotal");

function updatePageData(cartNum) {
  if (cartNum === null || cartNum === Array) {
    displayCartItems.innerHTML = `0`;
    listCartItems.innerHTML = "<h2> No Items in Cart </h2>";
    checkoutButton.style.display = "none";
  } else {
    displayCartItems.innerHTML = `${cartNum}`;
  }
}

updatePageData(cartTotal);

const inCart = JSON.parse(localStorage.getItem("cartItems"));

function createCart() {
  let priceTally = 0;
  inCart.forEach((cartItem, index) => {
    listCartItems.innerHTML += `<div">
            <h2>${cartItem.name} - ${cartItem.color}</h2>
            <img class="order" src="img/${cartItem.name}_${
      cartItem.color
    }.jpg" alt="picture of dark coloured jacket." />
            <div class="details">
              <p>Quantity: ${[cartItem.total]}</p>
              <p>Size: ${[cartItem.size]}</p>
              <p id="price">Price: ${[cartItem.price]}</p>
            </div>
            <button class="remove" data-id="${[index]}"> Remove Item </button>
          </div>`;

    priceTally += Number(cartItem.price.slice(0, -3));
  });
  listCartItems.innerHTML += `<h2 class="details">Total Price: ${priceTally} Kr</h2>`;
}

createCart();

const removeButton = document.querySelectorAll(".remove");

removeButton.forEach((button) => {
  button.addEventListener("click", removeClick);
});

function removeClick() {
  let item = this.dataset.id;
  inCart.splice(item, 1);
  localStorage.setItem("cartItems", JSON.stringify(inCart));
  listCartItems.innerHTML = "";
  createCart();
  location.reload();
  let cartAdd = 0;
  updateCart(inCart, cartAdd);
  let cartTotal = localStorage.getItem("cartTotal");
  updatePageData(cartTotal);
}

function updateCart(inCart, cartAdd) {
  if (inCart.length < 1) {
    localStorage.removeItem("cartTotal");
  } else {
    for (var i = 0; i < inCart.length; i++) {
      cartAdd += Number(inCart[i].total);
      window.localStorage.setItem("cartTotal", JSON.stringify(cartAdd));
    }
  }
}

submitCheckout.addEventListener("click", clearCart);

function clearCart() {
  localStorage.clear();
}
