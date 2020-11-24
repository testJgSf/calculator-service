let subtractionRequest = async (request, headers) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Multiplication adapter request sent');
            resolve (1)
        }, 3000)
    })
};

module.exports = { subtractionRequest };