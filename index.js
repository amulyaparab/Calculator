const inputBar = document.querySelector(".input-bar");
const buttons = document.querySelectorAll(".button");
let result = " ";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let operandOrOperator = e.target.innerHTML;
    try {
      if (operandOrOperator === "=") {
        result = eval(result);
        inputBar.value = result;
      } else if (operandOrOperator === "C") {
        result = " ";
        inputBar.value = result;
      } else if (operandOrOperator === "⌫") {
        result = result.substring(0, result.length - 1);
        inputBar.value = result;
      } else if (operandOrOperator === "^") {
        result += e.target.value;
        inputBar.value = result;
      } else {
        result += operandOrOperator;
        inputBar.value = result;
      }
    } catch {
      result = "Invalid Input";
      inputBar.value = result;
    }
  });
});
