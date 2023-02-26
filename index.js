const inputBar = document.querySelector(".input-bar");
const buttons = document.querySelectorAll(".button");
let result = " ";

// inputBar.addEventListener("input", (e) => {
//   const inputText = e.target.value;
//   Array.from(buttons).forEach((button) => {
//     button.addEventListener("click", (inputText, e) => {
//       try {
//         if (e.target.innerHTML === "=") {
//           result = eval(inputText);
//           inputBar.value = result;
//         }
//       } catch {
//         result = "Invalid Input";
//         inputBar.value = result;
//       }
//     });
//   });
// });

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

      // if (operandOrOperator === "=") {
      //   result = eval(result);
      //   inputBar.value = result;

      // } else if (operandOrOperator === "C") {
      //   result = " ";
      //   inputBar.value = result;
      // } else if (operandOrOperator === "⌫") {
      //   result = result.substring(0, result.length - 1);
      //   inputBar.value = result;
      // } else if (operandOrOperator === "^") {
      //   result += e.target.value;
      //   inputBar.value = result;
      // } else {
      //   result += operandOrOperator;
      //   inputBar.value = result;
      // }
    } catch {
      result = "Invalid Input";
      inputBar.value = result;
    }
  });
});

//  if (operandOrOperator === "=") {
//    result = eval(result);
//    inputBar.value = result;
//  } else if (operandOrOperator === "C") {
//    result = " ";
//    inputBar.value = result;
//  } else if (operandOrOperator === "⌫") {
//    result = result.substring(0, result.length - 1);
//    inputBar.value = result;
//  } else if (operandOrOperator === "^") {
//    result += e.target.value;
//    inputBar.value = result;
//  } else {
//    result += operandOrOperator;
//    inputBar.value = result;
//  }
