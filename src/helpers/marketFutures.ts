import { env, binance } from './commom';

const apiURL = env.MARKET_FUTURE_API;
const URL_BASE = `${apiURL}/fapi/v1`;

/* MARKET DATA ENDPOINTS */

async function test_connectivity() {
    return binance.api(`${URL_BASE}/ping`);
}

async function check_server_time() {
    return binance.api(`${URL_BASE}/time`);
}

async function exchange_information() {
    return binance.api(`${URL_BASE}/exchangeInfo`);
}

async function order_book(symbol = 'BTCUSDT', limit = '500') {
    return binance.api(`${URL_BASE}/depth`, {
        symbol, limit
    });
}

async function recent_trades_list(symbol = 'BTCUSDT', limit = '500') {
    return binance.api(`${URL_BASE}/trades`, {
        symbol, limit
    });
}

async function get_candlestick_data(symbol = 'BTCUSDT', interval = '1m', params = {}) {
    try {
      const response = await binance.api(`${URL_BASE}/klines`, { symbol, interval, ...params });
      return response.map((candle: any) => {
        return {
            open: candle[1],
            high: candle[2],
            low: candle[3],
            close: candle[4],
            volume: candle[5],
            close_time: new Date(candle[6]),
            open_time: new Date(candle[0]),
            quote_asset_volume: candle[7],
            number_of_trades: candle[8],
            taker_buy_volume: 9,
            taker_buy_quote_asset_volume: candle[10],
            interval,
            symbol
        }
      });
    } catch (err) {
        console.log(err)
    }
}

async function get_countinuous_contract_kline(pair = 'BTCUSDT', contractType = 'PERPETUAL', interval = '1m', params = {}) {
    return binance.api(`${URL_BASE}/continuousKlines`, { pair, contractType, interval, ...params });
}

async function index_price_kline(pair = 'BTCUSDT', interval = '1m', params = {}) {
    return binance.api(`${URL_BASE}/indexPriceKlines`, { pair, interval, ...params });
}

async function mark_price_klines(symbol = 'BTCUSDT', interval = '1m', params = {}) {
    return binance.api(`${URL_BASE}/markPriceKlines`, { symbol, interval, ...params });
}

async function mark_price(symbol = 'BTCUSDT') {
    return binance.api(`${URL_BASE}/premiumIndex`, { symbol });
}

async function get_funding_rate_history(symbol = 'BTCUSDT', params = {}) {
    return binance.api(`${URL_BASE}/fundingRate`, { symbol, ...params });
}

async function ticker_price_change_statics(symbol = 'BTCUSDT', params = {}) {
    return binance.api(`${URL_BASE}/ticker/24hr`, { symbol, ...params });
}

async function symbol_price_ticker(symbol = 'BTCUSDT', params = {}) {
    return binance.api(`${URL_BASE}/ticker/price`, { symbol, ...params });
}

async function symbol_order_book_ticker(symbol = 'BTCUSDT', params = {}) {
    return binance.api(`${URL_BASE}/ticker/bookTicker`, { symbol, ...params });
}

async function open_interest(symbol = 'BTCUSDT', params = {}) {
    return binance.api(`${URL_BASE}/openInterest`, { symbol, ...params });
}

async function open_interest_statics(symbol = 'BTCUSDT', period = "1m", params = {}) {
    return binance.api(`${apiURL}/futures/data/openInterestHist`, { symbol, period, ...params });
}

async function top_trader_ratio_accounts(symbol = 'BTCUSDT', period = "1m", params = {}) {
    return binance.api(`${apiURL}/futures/data/topLongShortAccountRatio`, { symbol, period, ...params });
}

async function top_trader_ratio_positions(symbol = 'BTCUSDT', period = "1m", params = {}) {
    return binance.api(`${apiURL}/futures/data/topLongShortPositionRatio`, { symbol, period, ...params });
}

async function trader_ratio(symbol = 'BTCUSDT', period = "1m", params = {}) {
    return binance.api(`${apiURL}/futures/data/globalLongShortAccountRatio`, { symbol, period, ...params });
}

async function taker_volume(symbol = 'BTCUSDT', period = "1m", params = {}) {
    return binance.api(`${apiURL}/futures/data/takerlongshortRatio`, { symbol, period, ...params });
}

/* ACCOUNT/TRADES ENDPOINTS */


module.exports = {
    test_connectivity,
    check_server_time,
    exchange_information,
    order_book,
    recent_trades_list,
    get_candlestick_data,
    get_countinuous_contract_kline,
    index_price_kline,
    mark_price_klines,
    mark_price,
    get_funding_rate_history,
    ticker_price_change_statics,
    symbol_price_ticker,
    symbol_order_book_ticker,
    open_interest,
    open_interest_statics,
    top_trader_ratio_positions,
    top_trader_ratio_accounts,
    trader_ratio,
    taker_volume
}; 
