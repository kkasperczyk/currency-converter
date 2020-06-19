console.log("Hi all developers! Nice to see you here.");

let amountField = document.querySelector(".js-form__amount");
let convertFromField = document.querySelector(".js-convertFrom");
let convertToField = document.querySelector(".js-convertTo");
let convertedValueField = document.querySelector(".js-convertedValue");
let submitButton = document.querySelector(".js-form__button");
let form = document.querySelector(".js-form");

console.log(form);

amountField.focus();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = amountField.value;
  let convertFrom = convertFromField.value;
  let convertTo = convertToField.value;
  let result;

  console.log(amount, convertFrom, convertTo);

  switch (convertFrom) {
      case pln:
          switch (convertTo) {
              case eur:
                  result = amount / 4.4278;
                    converted
          }
  }
});
