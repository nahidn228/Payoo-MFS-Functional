function getInputFieldValueById(id) {
  let inputValue = document.getElementById(id).value;
  inputValue = parseFloat(inputValue);
  return inputValue;
}

function getTextFieldValueById(id) {
  let textValue = document.getElementById(id).innerText;
  textValue = parseFloat(textValue);
  return textValue;
}

function showSectionById(id) {
  //Hide all the section
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById("transaction-form").classList.add("hidden");

  //show the section with provided id

  document.getElementById(id).classList.remove("hidden");
}
