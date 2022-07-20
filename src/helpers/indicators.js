async function process(){
    /*const candles =  await common.get_candles();
     const closes = candles.map(candle => parseFloat(candle[4]));
     const price = closes[0];
 
     const rsi = calcRSI(closes);
     console.log(rsi);
 
     indicateRSI(rsi);
     choice(price);*/
 }

function calcRSI(closes) {
    let gains = 0;
    let losses = 0;

    for(let i = closes.length - 14; i < closes.length; i++) {
        const diff = closes[i] - closes[i - 1];
        if(diff >= 0) {
            gains += diff;
        } else {
            losses -= diff;
        }
    }

    const rs = gains / losses;
    return 100 - (100 / (1 + rs));
}

function indicateRSI(rsi) {
    if(rsi > 70) {
        console.log("Sobrecomprado!");
    } else if (rsi < 30) {
        console.log("Sobrevendido!");
    }
}

function choice(price){
    if(price >= VALUE_SELL) {
        console.log("Vender");
    }else if (price <= VALUE_BUY) {
        console.log("Comprar");
    }else {
        console.log("Aguardar");
    }
}