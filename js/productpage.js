// CART UPDATING CODE

const addToCart = document.querySelector(".add-to-cart");
const selectQuantity = document.querySelector("#quantity");
const selectSize = document.querySelector("#size");
const productName = document.querySelector(".product-name");
const productBlack = document.querySelector(".color_select input#black");
const productGrey = document.querySelector(".color_select input#grey");
const productOrange = document.querySelector(".color_select input#orange");
const productGreen = document.querySelector(".color_select input#green");
const displayCartItems = document.querySelector(".display-items");

let cartTotal = localStorage.getItem("cartTotal");

function updatePageData(cartNum) {
  if (cartNum === null) {
    displayCartItems.innerHTML = `0`;
  } else {
    displayCartItems.innerHTML = `${cartNum}`;
  }
}

updatePageData(cartTotal);

function checkSelectedColour() {
  if (productBlack.checked === true) {
    console.log(productBlack.value);
    let selectedColour = productBlack.value;
    return selectedColour;
  } else {
    if (productGrey.checked === true) {
      console.log(productGrey.value);
      let selectedColour = productGrey.value;
      return selectedColour;
    } else {
      if (productOrange.checked === true) {
        console.log(productGreen.value);
        let selectedColour = productOrange.value;
        return selectedColour;
      } else {
        if (productGreen.checked === true) {
          let selectedColour = productGreen.value;
          return selectedColour;
        }
      }
    }
  }
}

function checkCart(cart) {
  if (cart === null) {
    let cart = [];
    return cart;
  } else {
    return cart;
  }
}

addToCart.addEventListener("click", function addToCart() {
  let checkedCart = localStorage.getItem("cartItems");
  let currentCart = JSON.parse(checkedCart);
  console.log(currentCart);
  let cart = checkCart(currentCart);
  console.log(cart);
  let selectedColour = checkSelectedColour();
  cart.push({
    name: productName.innerHTML,
    colour: selectedColour,
    size: selectSize.value,
    total: selectQuantity.selectedIndex + 1,
  }),
    window.localStorage.setItem("cartItems", JSON.stringify(cart));
  const retrieveCart = localStorage.getItem("cartItems");
  const inCart = JSON.parse(retrieveCart);
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
