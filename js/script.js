{
  const welcome = () => {
    console.log("Hi all developers! Nice to see you here. Enjoy!");
  };

  const calculateResult = (convertFrom, convertTo, amount) => {
    const eurRate = 4.4278;
    const usdRate = 3.9058;
    const gbpRate = 4.9384;
    const chfRate = 4.1187;
    let plnValue;

    switch (convertFrom) {
      case "pln":
        plnValue = +amount;
        break;
      case "eur":
        plnValue = amount * eurRate;
        break;
      case "usd":
        plnValue = amount * usdRate;
        break;
      case "gbp":
        plnValue = amount * gbpRate;
        break;
      case "chf":
        plnValue = amount * chfRate;
        break;
    }

    switch (convertTo) {
      case "pln":
        return plnValue;
      case "eur":
        return plnValue / eurRate;
      case "usd":
        return plnValue / usdRate;
      case "gbp":
        return plnValue / gbpRate;
      case "chf":
        return plnValue / chfRate;
    }
  };

  const updateResultValue = (result) => {
    const convertedValueField = document.querySelector(".js-convertedValue");

    convertedValueField.value = result.toFixed(2);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountField = document.querySelector(".js-form__amount");
    const convertFromField = document.querySelector(".js-convertFrom");
    const convertToField = document.querySelector(".js-convertTo");

    const amount = amountField.value;
    const convertFrom = convertFromField.value;
    const convertTo = convertToField.value;

    const result = calculateResult(convertFrom, convertTo, amount);

    updateResultValue(result);
  };

  const init = () => {
    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
    welcome();
  };

  init();
}
