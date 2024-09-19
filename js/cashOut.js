document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOut = getInputFieldValueById("input-cash-out");
    const pinNumber = getInputFieldValueById("input-cash-out-pin");

    if (isNaN(cashOut)) {
      alert("Failed to cash out !");
      return;
    }

    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");
      if (cashOut > balance) {
        alert("You Do not have enough balance");
        return;
      }
      const newBalance = balance - cashOut;
      document.getElementById("account-balance").innerText = newBalance;

      //add to transaction history

      const div = document.createElement("div");
      div.classList.add("bg-yellow-300");
      div.innerHTML = `
      <h4 class="text-2xl font-semibold">Cash Out</h4>
      <p>${cashOut} Tk Withdraw. New Balance: ${newBalance} </p> 
      `;
      document.getElementById("transaction-form").appendChild(div);
    } else {
      alert("Failed to cash out !");
    }
  });
