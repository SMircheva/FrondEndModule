function setValues (param) {
    let arrLength = Number(param[0]);
    let array = new Array(arrLength).fill(0);
    for (let i = 1; i < param.length; i++) {
        let tokens = param[i].split(' ');
        let index = tokens[0];
        array[index] = tokens[2];
    }

    for (let i = 0; i < array.length; i++) {
        console.log (i);
    }
}