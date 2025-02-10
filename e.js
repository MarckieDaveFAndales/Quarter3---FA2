function calc(opr) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultText = document.getElementById('res');
    let res;

    if (isNaN(num1) || isNaN(num2)) {
        resultText.innerText = "Please enter valid numbers.";
        return;
    }

    switch (opr) {
        case '+':
            res = num1 + num2;
            resultText.innerText = `The sum of ${num1} and ${num2} is ${res}.`;
            break;
        case '-':
            res = num1 - num2;
            resultText.innerText = `The difference between ${num1} and ${num2} is ${res}.`;
            break;
        case '*':
            res = num1 * num2;
            resultText.innerText = `The product of ${num1} and ${num2} is ${res}.`;
            break;
        case '/':
            if (num2 === 0) {
                resultText.innerText = "Cannot divide by zero.";
            } else {
                res = num1 / num2;
                resultText.innerText = `The quotient of ${num1} and ${num2} is ${res}.`;
            }
            break;
        case '%':
            res = num1 % num2;
            resultText.innerText = `The remainder of ${num1} divided by ${num2} is ${res}.`;
            break;
        default:
            resultText.innerText = "Invalid operation.";
    }
}
