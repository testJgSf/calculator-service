const axios = require('axios');

let multiplicationRequest = async (request, headers) => {
    try {
        let response = await axios.post(process.env.URL_MULT, request);
        return response.data.result;
    } catch (e) {
        log.error(e);
        throw new Error("{code: 501, message: 'Operation not supported yed'}");
    }
};

module.exports = { multiplicationRequest };