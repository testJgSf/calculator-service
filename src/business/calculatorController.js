const { sumRequest } = require('../data/sumRepository');
const { multiplicationRequest } = require('../data/multiplicationRepository');
const { divisionRequest } = require('../data/divisionRepository');
const { subtractionRequest } = require('../data/subtractionRepository');

//TODO::VERIFICAR QUE LA OPERACION NO COMIENCE CON *, + o /


const processOperation = async (operation) => {
    let operations = parseOperationToArray(operation);
    operations = sanitizeNegativeValues(operations);
    let pivot = findPivot(operations);
    while(pivot.operator) {
        operations = await processOperationA(operations,pivot);
        pivot = findPivot(operations);
        console.log(operations);
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

const findPivot = (operation) => {
    console.log(operation);
    let indexMul = operation.indexOf('*');
    let indexDiv = operation.indexOf('/');
    let indexSub = operation.indexOf('-');
    let indexSum = operation.indexOf('+');
    let pivot = {operator: '', index: Infinity};
    const notExists = -1;
    if (indexMul !== notExists) {
        pivot = {operator: '*', index: indexMul};
    }
    if (indexDiv !== notExists && indexDiv < pivot.index) {
        pivot = {operator: '/', index: indexDiv};
    }
    if (indexSub !== notExists && indexDiv === notExists && indexMul === notExists) {
        pivot = {operator: '-', index: indexSub};
    }
    if (indexSum !== notExists && indexDiv === notExists && indexMul === notExists && indexSub === notExists) {
        pivot = {operator: '+', index: indexSum};
    }
    if (pivot.index === Infinity) {
        pivot = {operator: false, index: false}
    }
    return pivot;
};

const sanitizeNegativeValues = (operation) => {
    if (!operation[0]) {
        operation.splice(0, 2); //removes firsts 2 values from array
        operation[0]= `-${operation[0]}`; // add negative symbol to the first element
    }
    return operation
};

const processOperationA = async (operations, pivot) => {
    let toSolve = operations.splice(pivot.index-1, 3);
    let result = eval(toSolve.join(''));
    operations.splice(pivot.index-1,0,result);
    resolve (operations);

};

module.exports = { processOperation };

