console.log("Hi all developers! Nice to see you here.");

let amount = document.querySelector(".js-form__amount");
let convertFrom = document.querySelector(".js-convertFrom");
let convertTo = document.querySelector(".js-convertTo");
let convertedValue = document.querySelector(".js-convertedValue");

console.log(amount.value);
console.log(convertFrom.value);
console.log(convertTo.value);

amount.focus();

let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
});
