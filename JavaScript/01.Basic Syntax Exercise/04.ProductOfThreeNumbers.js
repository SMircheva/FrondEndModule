function threeNumbers(param) {
    let num1 = param[0];
    let num2 = param[1];
    let num3 = param[2];

    let counter = 0;
    if (num1 < 0) {
        counter++;
    } else if (num1 === 0) {
        return "Positive";
    }
    if (num2 < 0) {
        counter++;
    } else if (num2 === 0) {
        return "Positive";
    }
    if (num3 < 0) {
        counter++;
    } else if (num3 === 0) {
        return "Positive";
    }

    switch (counter) {
        case 0: return "Positive";
        case 1: return "Negative";
        case 2: return "Positive";
        case 3: return "Negative";
    }
}