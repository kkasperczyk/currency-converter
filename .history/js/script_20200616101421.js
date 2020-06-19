console.log("Hi all developers! Nice to see you here.");

let amount = document.querySelector(".js-form__amount");
let convertFrom = document.querySelector(".js-convertFrom");
let convertTo = document.querySelector(".js-convertTo");
let convertedValue = document.querySelector(".js-convertedValue");

amount.focus();

if ((convertFrom.value === "PLN") & (convertTo.value === "USD")) {
    convertedValue = amount.value * 4.4566;

    convertedValue.innerText = `${amount.value} ${convertFrom.value} = ${convertedValue.value} ${con}`
}
