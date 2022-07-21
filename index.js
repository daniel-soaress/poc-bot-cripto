const env = require('dotenv').config().parsed
const futures = require('./src/helpers/marketFutures');
const analyse = require('./src/helpers/analysis');

async function process(){
    const log =  await futures.check_server_time();
    const analyses = analyse.analysis_candle({
        high: 500.45,
        open: 497.75,
        low: 486.35,
        close: 487.8,
    })
    console.log(log, analyses)
}

setInterval(process, env.CRAWLER_INTERVAL);

process();