const axios = require('./api');

async function get_candles(symbol = 'BTCBUSD', interval = '1m') {
    return axios.api('/v3/klines', { symbol, interval });
}

async function get_account_info() {
    return axios.apiWithKey('/v3/account');
}

async function newOrder(symbol = 'BTCBUSD', price, side = 'BUY', type = 'MARKET') {
    const data = { symbol, side, type, quantity };
    if (price) data.price = price;
    if (type === 'LIMIT') data.timeInForce = 'GTC';

    return axios.apiWithKey('/v3/order', data, 'POST');
}

module.exports = { newOrder, get_account_info, get_candles }; 
