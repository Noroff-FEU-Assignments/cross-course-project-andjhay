const checkoutForm = document.querySelector(".checkout-form");
const contactForm = document.querySelector(".contact-form");
const passedValidation = document.querySelector(".validation-passed");
const nameValue = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const emailValue = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const phoneValue = document.querySelector("#phone");
const phoneError = document.querySelector("#phone-error");
const addressValue = document.querySelector("#address");
const addressError = document.querySelector("#address-error");
const cityValue = document.querySelector("#city");
const cityError = document.querySelector("#city-error");
const postcodeValue = document.querySelector("#postcode");
const postcodeError = document.querySelector("#postcode-error");
const cardnumberValue = document.querySelector("#cardnumber");
const cardnumberError = document.querySelector("#card-error");
const expValue = document.querySelector("#exp-date");
const expError = document.querySelector("#exp-error");
const csvValue = document.querySelector("#csv");
const csvError = document.querySelector("#csv-error");

// FORM VALIDATION
function validateCheckoutForm() {
  try {
    event.preventDefault();

    // Name check
    if (checkLength(nameValue.value, 0) === true) {
      nameError.style.display = "none";
    } else {
      nameError.style.display = "block";
    }

    // Email check
    if (checkEmail(emailValue.value) === true) {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "block";
    }

    // Phone check
    if (checkNumber(phoneValue.value) === true) {
      phoneError.style.display = "none";
    } else {
      phoneError.style.display = "block";
    }

    // Address check
    if (checkLength(addressValue.value, 24) === true) {
      addressError.style.display = "none";
    } else {
      addressError.style.display = "block";
    }

    // City check
    if (checkLength(cityValue.value, 0) === true) {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "block";
    }

    // Postcode check
    if (checkNumber(emailValue.value) === true) {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "block";
    }

    // Card # check
    if (checkNumber(emailValue.value, 16) === true) {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "block";
    }

    // Expiration date check
    if (checkExp(expValue.value) === true) {
      expError.style.display = "none";
    } else {
      expError.style.display = "block";
    }

    // CSV check
    if (checkNumber(csvValue.value, 3) === true) {
      csvError.style.display = "none";
    } else {
      csvError.style.display = "block";
    }

    if (
      checkLength(nameValue.value, 0) &&
      checkLength(messageValue.value, 24) &&
      checkEmail(emailValue.value) === true
    ) {
      passedValidation.style.display = "block";
    } else {
      passedValidation.style.display = "none";
    }

    console.log(event);
  } catch (error) {
    console.log(error);
    window.confirm(error);
  }
}

function checkLength(value, characters) {
  if (value.trim().length > characters) {
    return true;
  } else {
    return false;
  }
}

function checkNumber(value, characters) {
  if (value.trim().length > characters && value === Number) {
    return true;
  } else {
    return false;
  }
}

function checkExp(value) {
  if (value === Number + "/" + Number) {
    return true;
  } else {
    return false;
  }
}

function checkEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

checkoutForm.addEventListener("submit", validateCheckoutForm);
