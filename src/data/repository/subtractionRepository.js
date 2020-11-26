const axios = require('axios');

let subtractionRequest = async (request, headers) => {
    try {
        let response = await axios.post(process.env.URL_SUB, request);
        return response.data.result;
    } catch (e) {
        log.error(e);
        return ({code: 501, message: 'Operation not supported yed'});
    }
};

module.exports = { subtractionRequest };