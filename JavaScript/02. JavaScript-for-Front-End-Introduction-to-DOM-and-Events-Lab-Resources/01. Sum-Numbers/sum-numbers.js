function calc() {
   let firstNumber = Number(document.getElementById('num1').value);
   let secondNumber = Number(document.getElementById('num2').value);
   let sum = firstNumber + secondNumber;

   let result = document.getElementsByTagName('input')[2].value = sum;
}