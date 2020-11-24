const processOperation = (req, res) => {

};

const parseOperationToArray = (operation) => {
    let expression = operation;
    let copy = expression;
    expression = expression.replace(/[0-9]+/g, "#").replace(/[\(|\|\.)]/g, "");
    let numbers = copy.split(/[^0-9\.]+/);
    let operators = expression.split("#").filter(n => n);
    let result = [];
    for(let i = 0; i < numbers.length; i++){
        result.push(numbers[i]);
        if (i < operators.length) result.push(operators[i]);
    }
    return result;
};

const

