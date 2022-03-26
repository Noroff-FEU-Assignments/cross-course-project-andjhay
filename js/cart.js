const displayCartItems = document.querySelector(".display-items");
const listCartItems = document.querySelector(".cart_grid");

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
            <button class="remove" data-id="${[index]}"> Remove Item </button>
          </div>`;
  });
}

createCart();

const removeButton = document.querySelectorAll(".remove");

removeButton.forEach((button) => {
  button.addEventListener("click", removeClick);
});

function removeClick() {
  let item = this.dataset.id;
  console.log(event);
  inCart.splice(item, 1);
  localStorage.setItem("cartItems", JSON.stringify(inCart));
  listCartItems.innerHTML = "";
  createCart();
  location.reload();
  // bit crude but for some reason after clicking once the eventlistner would not respond therefor i added a refresh the page here
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
