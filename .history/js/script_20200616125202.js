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
        case pln:
          result = amount * 1;
          convertedValueField.value = result.toFixed(2);
          break;
        case eur:
          result = amount / 4.4278;
          convertedValueField.value = result.toFixed(2);
          break;
        case usd:
          result = amount / 3.9058;
          convertedValueField.value = result.toFixed(2);
          break;
        case gbp:
          result = amount / 4.9384;
          convertedValueField.value = result.toFixed(2);
          break;
        case chf:
          result = amount / 4.1187;
          convertedValueField.value = result.toFixed(2);
          break;
      }
      break;
    case eur:
      switch (convertTo) {
        case pln:
          result = amount * 4.4278;
          convertedValueField.value = result.toFixed(2);
          break;
        case eur:
          result = amount * 1;
          convertedValueField.value = result.toFixed(2);
          break;
        case usd:
          result = amount * 1.1336;
          convertedValueField.value = result.toFixed(2);
          break;
        case gbp:
          result = amount * 0.8966;
          convertedValueField.value = result.toFixed(2);
          break;
        case chf:
          result = amount * 1.075;
          convertedValueField.value = result.toFixed(2);
          break;
      }
      break;
    case usd:
      switch (convertTo) {
        case pln:
          result = amount * 3.9058;
          convertedValueField.value = result.toFixed(2);
          break;
        case eur:
          result = amount * 0.8821;
          convertedValueField.value = result.toFixed(2);
          break;
        case usd:
          result = amount * 1;
          convertedValueField.value = result.toFixed(2);
          break;
        case gbp:
          result = amount * 0.7909;
          convertedValueField.value = result.toFixed(2);
          break;
        case chf:
          result = amount * 0.9483;
          convertedValueField.value = result.toFixed(2);
          break;
      }
      break;
    case gbp:
      switch (convertTo) {
        case pln:
          result = amount * 4.9384;
          convertedValueField.value = result.toFixed(2);
          break;
        case eur:
          result = amount * 1.1153;
          convertedValueField.value = result.toFixed(2);
          break;
        case usd:
          result = amount * 1.2644;
          convertedValueField.value = result.toFixed(2);
          break;
        case gbp:
          result = amount * 1;
          convertedValueField.value = result.toFixed(2);
          break;
        case chf:
          result = amount * 1.199;
          convertedValueField.value = result.toFixed(2);
          break;
      }
      break;
    case gbp:
      switch (convertTo) {
        case pln:
          result = amount * 4.9384;
          convertedValueField.value = result.toFixed(2);
          break;
        case eur:
          result = amount * 1.1153;
          convertedValueField.value = result.toFixed(2);
          break;
        case usd:
          result = amount * 1.2644;
          convertedValueField.value = result.toFixed(2);
          break;
        case gbp:
          result = amount * 1;
          convertedValueField.value = result.toFixed(2);
          break;
        case chf:
          result = amount * 1.199;
          convertedValueField.value = result.toFixed(2);
          break;
      }
      break;
  }
});
