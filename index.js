const env = require('dotenv').config().parsed
const futures = require('./src/helpers/marketFutures');


const VALUE_SELL = 36291;
const VALUE_BUY = 35764;

async function process(){
    const log =  await futures.check_server_time()
    console.log(log)
}



setInterval(process, env.CRAWLER_INTERVAL);

process();