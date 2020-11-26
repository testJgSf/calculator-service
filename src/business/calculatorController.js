//TODO::VERIFICAR QUE LA OPERACION NO COMIENCE CON *, + o /
const { requestOperation } = require('../data/repository/operationsRepository');

const main = async (operationList)=> {
    let results = [];
    for (let index in operationList) {
        results.push(processOperation(operationList[index]));
    }
    let response = await Promise.allSettled(results).then((results) => results);
    response = response.filter((res) => res.value).map(res => res.value);
    return {code:  200, message: response};

};

const processOperation = async (operation) => {
    try {
        let operations = parseOperationToArray(operation);
        let pivot = findPivot(operations);
        while(pivot.operator) {
            operations = await solveOperation(operations,pivot);
            pivot = findPivot(operations);
        }
        return `${operation.replace(/\*/g, 'x')}=${operations}`
    } catch (e) {
        return false;
    }
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
    try {
        const toSolve = operations.splice(pivot.index-1, 3);
        let result = await requestOperation(pivot.operator, toSolve);
        operations.splice(pivot.index-1,0,result);
        return (operations);
    } catch (e) {
        throw e;
    }
};

module.exports = { main };

