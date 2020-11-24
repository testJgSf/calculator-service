let sumRequest = async (request, headers) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Sum adapter request sent');
            resolve (1)
        }, 3000)
    })
};

module.exports = { sumRequest };