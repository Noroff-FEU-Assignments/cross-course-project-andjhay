const checkoutForm = document.querySelector(".checkout-form");
const contactForm = document.querySelector(".contact-form");
const passedValidation = document.querySelector(".validation-passed");
const nameValue = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const emailValue = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const messageValue = document.querySelector("#message");
const messageError = document.querySelector("#message-error");

// FORM VALIDATION JAVASCRIPT
function validateContactForm() {
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

    // Message check
    if (checkLength(messageValue.value, 24) === true) {
      messageError.style.display = "none";
    } else {
      messageError.style.display = "block";
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

function checkEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

contactForm.addEventListener("submit", validateContactForm);
