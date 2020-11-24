let divisionRequest = async (request, headers) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Division adapter request sent');
            resolve (1)
        }, 3000)
    })
};

module.exports = { divisionRequest };