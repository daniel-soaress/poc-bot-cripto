function rsi(closes: Array<number>): number {
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

function exponential_moving_average(): number {
    //EMA atual = [Preço de fechamento – EMA (período de tempo anterior)] x Multiplicador + EMA (período de tempo anterior)
    //(Média Móvel Exponencial Anterior) * (2 / (n + 1)) + Média Móvel Exponencial Anterior.
    return 0
}

function simple_moving_average(closes: Array<number>): number {
    let total = 0;
    for(let i = closes.length; i < closes.length; i++) {
        total = total + closes[i];
    }
    return total/closes.length;
}

module.exports = {
    rsi
}