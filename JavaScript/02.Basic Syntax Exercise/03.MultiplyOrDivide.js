function multiplyOrDivide (param) {
    let num1 = param[0];
    let num2 = param[1];

    if (num2 >= num1){
        return num1 * num2;
    } else {
        return num1 / num2;
    }
}
