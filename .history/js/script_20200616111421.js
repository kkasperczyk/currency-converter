console.log("Hi all developers! Nice to see you here.");


let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = document.querySelector(".js-form__amount").value;
  let convertFrom = document.querySelector(".js-convertFrom").value;
  let convertTo = document.querySelector(".js-convertTo").value;
  let convertedValue = document.querySelector(".js-convertedValue").value;
  let pln, usd, gbp, eur, currency, message;

  
});
