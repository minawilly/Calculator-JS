let result;

const operations = prompt("Calculator: What operation will you like to perform? (+, -, *, /, %)");
const num1 = parseFloat(prompt("Enter First Number"));
const num2 = parseFloat(prompt("Enter Second Number"));

switch (operations) {
    case "+":
        result = num1 + num2;
        console.log('${num1} + ${num2} = ${result}');
        break;

    case "-":
        result = num1 - num2;
        console.log('${num1} - ${num2} = ${result}');
        break;

    case "*":
        result = num1 * num2;
        console.log('${num1} * ${num2} = ${result}');
        break;

    case "/":
        result = num1 / num2;
        console.log('${num1} / ${num2} = ${result}');
        break;

    case "%":
        result = num1 % num2;
        console.log('${num1} % ${num2} = ${result}');
        break;

    default:
        console.log("Invalid operation");
        break;
}

alert("The result = "+result);