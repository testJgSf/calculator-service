const { sumRequest } = require('./sumRepository');
const { multiplicationRequest } = require('./multiplicationRepository');
const { divisionRequest } = require('./divisionRepository');
const { subtractionRequest } = require('./subtractionRepository');
const { operationsDTOParser } = require('../dto/operationsReqDTO');

let requestOperation = async (operator, operation) => {
    switch (operator) {
      case '+':
          return await sumRequest(operationsDTOParser(operation), '');
      case '*':
          return await multiplicationRequest(operationsDTOParser(operation),'');
      case '/':
          return await divisionRequest(operationsDTOParser(operation),'');
      case '-':
          return await subtractionRequest(operationsDTOParser(operation),'');
      default:
          throw new Error("{code: 501, message: 'Operation not supported yed'}");
  }
};

module.exports = { requestOperation };