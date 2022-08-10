const futures = require('../helpers/marketFutures');
const indicators = require('../helpers/indicators');

export default async function run(){
    const candles_hour = await futures.get_candlestick_data('BTCUSDT', '1h');
    const candles_day = await futures.get_candlestick_data('BTCUSDT', '1d');

    console.log('RSI_HOUR:', (indicators.rsi(candles_hour.map((el: any) => el.close))).toFixed(2));
    console.log('RSI_DAY:', (indicators.rsi(candles_day.map((el: any) => el.close))).toFixed(2));
}
