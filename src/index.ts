const env = require('dotenv').config().parsed
const futures = require('./helpers/marketFutures');
const analyse = require('./helpers/analysis');
const patterns = require('./helpers/patterns');
const indicators = require('./helpers/indicators');


async function run(){
    const candles = await futures.get_candlestick_data('BTCUSDT', '1h')
    const analyses = [
        analyse.analysis_candle(candles[candles.length - 4]),
        analyse.analysis_candle(candles[candles.length - 3]),
        analyse.analysis_candle(candles[candles.length - 2])];
        
    console.log('Candle:', patterns.getPattern(analyses));
    console.log('RSI:', indicators.rsi(candles.map((el: any) => el.close)));
}

setInterval(run, env.CRAWLER_INTERVAL);

run();