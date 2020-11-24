const { sumRequest } = require('../data/sumRepository');
const { multiplicationRequest } = require('../data/multiplicationRepository');
const { divisionRequest } = require('../data/divisionRepository');
const { subtractionRequest } = require('../data/subtractionRepository');

const processOperation = (req) => {
    for (let operation in req.body.operations) {
        sendOperation(parseOperationToArray(req.body.operations[operation]));
    }
    return {code: httpOk, message: 'Queued'};
};

const parseOperationToArray = (operation) => {
    let expression = operation;
    let copy = expression;
    expression = expression.replace(/[0-9]+/g, "#").replace(/[\(|\|\.)]/g, "");
    let numbers = copy.split(/[^0-9\.]+/);
    let operators = expression.split("#").filter(n => n);
    let operationArray = [];
    for(let i = 0; i < numbers.length; i++){
        operationArray.push(numbers[i]);
        if (i < operators.length) operationArray.push(operators[i]);
    }
    return operationArray;
};

const sendOperation = (operation) => {
    if (operation.indexOf('*') !== -1) {
        multiplicationRequest('a','b');
    } else if (operation.indexOf('/') !== -1) {
        divisionRequest('a', 'b');
    } else if (operation.indexOf('-') !== -1) {
        subtractionRequest('c', 'b');
    } else if (operation.indexOf('+') !== -1) {
        sumRequest('a','b');
    }
};

module.exports = { processOperation };

