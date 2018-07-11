function subtract() {
    let firstNum = Number(document.getElementById('firstNumber').value);
    let secondNum = Number(document.getElementById('secondNumber').value);

    let result = firstNum - secondNum;
    result = result.toString();
    let resultDiv = document.getElementById('result');
    resultDiv.textContent = result;
}