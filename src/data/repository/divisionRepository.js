const axios = require('axios');

let divisionRequest = async (request, headers) => {
    try {
        let response = await axios.post(process.env.URL_DIV, request);
        return response.data.result;
    } catch (e) {
        log.error(e.message);
        throw new Error("{code: 501, message: 'Operation not supported yed'}");
    }
};

module.exports = { divisionRequest };