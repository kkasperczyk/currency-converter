console.log("Hi all developers! Nice to see you here.");

let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.
})

let amount = document.querySelector(".js-form__amount").value;
let convertFrom = document.querySelector(".js-convertFrom").value;
let convertTo = document.querySelector(".js-convertTo").value;
let convertedValue = document.querySelector(".js-convertedValue").value;

amount.focus();

if ((convertFrom.value === "PLN") & (convertTo.value === "USD")) {
  convertedValue = amount.value * 4.4566;

  convertedValue.innerText = `${amount.value} ${convertFrom.value} = ${convertedValue.value} ${convertTo.value}`;

  console.log(convertedValue.innerText);
}
