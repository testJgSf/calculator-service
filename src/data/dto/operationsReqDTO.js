const operationsDTOParser = (operation) => {
    operation.splice(1,1);
    operation = operation.map((elem) => parseFloat(elem));
    return {
        factors: operation
    }
};

module.exports = { operationsDTOParser };