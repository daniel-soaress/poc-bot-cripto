const env = require('dotenv').config().parsed
const axios = require("axios");
const crypto = require('crypto');

const apiKey = env.API_KEY;
const apiSecret = env.SECRET_KEY;
const apiURL = env.MARKET_FUTURE_API;

async function apiWithKey(path, data, method = "GET") {
    const timestamp = Date.now();
    const signature = crypto.createHmac('sha256', apiSecret)
        .update(`${new URLSearchParams({ ...data, timestamp }).toString()}`)
        .digest('hex');

    const newData = { ...data, timestamp, signature };
    const qs = `?${new URLSearchParams(newData).toString()}`;

    try {
        const response = await axios({
            method,
            url: `${path}${qs}`,
            headers: { 'X-MBX-APIKEY': apiKey }
        });

        return response.data;
    } catch (err) {
        console.log(err);
    }
}

async function api(path, data, method = "GET") {
    try {
        const qs = data ? `?${new URLSearchParams(data).toString()}` : '';
        const response = await axios({
            method,
            url: `${path}${qs}`
        });

        return response.data;
    } catch (err) {
        console.log(err);
    }
}

module.exports = { api, apiWithKey };

