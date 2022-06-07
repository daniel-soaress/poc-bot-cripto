const env = require('dotenv').config().parsed
const axios = require("axios");

async function api(path, data, method = "GET"){
    try {
        const qs = data ? `?${new URLSearchParams(data).toString()}` : '';
        const response = await axios({
            method,
            url:`${env.API_URL}${path}${qs}`
        });
        
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

async function get_candles(symbol = 'BTCBUSD', interval = '1m') {
    return api('/v3/klines', { symbol, interval });
}

module.exports = { get_candles }