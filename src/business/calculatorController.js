const { sumRequest } = require('../data/sumRepository');
const { multiplicationRequest } = require('../data/multiplicationRepository');
const { divisionRequest } = require('../data/divisionRepository');
const { subtractionRequest } = require('../data/subtractionRepository');

//TODO::VERIFICAR QUE LA OPERACION NO COMIENCE CON *, + o /


const processOperation = async (operation) => {
    let operations = parseOperationToArray(operation);
    console.log('Original');
    console.log(operations);
    console.log('Solucion: *****');
    let pivot = findPivot(operations);
    while(pivot.operator) {
        operations = await solveOperation(operations,pivot);
        pivot = findPivot(operations);
        console.log(operations);
    }
    console.log(operations);
    return {code: httpOk, message: 'Queued'};
};

const parseOperationToArray = (operation) => {
    operation = operation.replace(/^-|([+\-*/])-/g, "$1#")
        .split(/([+\-*/])/)
        .map(e => e.replace("#", "-"));
    return operation;
};

const findPivot = (operation) => {
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

const solveOperation = async (operations, pivot) => {
    const toSolve = operations.splice(pivot.index-1, 3);
    let result = eval(toSolve.join(''));
    operations.splice(pivot.index-1,0,result);
    return (operations);

};

const entrada = '12/9';
processOperation(entrada);


module.exports = { processOperation };

