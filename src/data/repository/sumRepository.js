const axios = require('axios');

let sumRequest = async (request, headers) => {
    try {
        let response = await axios.post(process.env.URL_SUM, request);
        return response.data.result;
    } catch (e) {
        log.error(e);
        throw new Error("{code: 501, message: 'Operation not supported yed'}");
    }
};

module.exports = { sumRequest };