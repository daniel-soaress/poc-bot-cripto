import { CandleAnalysis } from "../model/Candle";

function isBullish(candle: CandleAnalysis): boolean {
    return candle.status === 1 ? true : false
}

function isBearish(candle: CandleAnalysis): boolean {
    return candle.status === -1 ? true : false
}

function isPowerCandle(candle: CandleAnalysis): boolean {
    const body = 65;
    if (candle.body >= body) {
        return true;
    }
    return false;
}

function isRejectionCandle(candle: CandleAnalysis): boolean {
    const body = 50;
    if (candle.body <= body) {
        return true;
    }
    return false;
}

function isDoubtCandle(candle: CandleAnalysis): boolean {
    const body = 30;
    if (candle.body <= body &&
        candle.upperWick > body &&
        candle.lowWick > body) {
        return true;
    }
    return false;
}

function bearish_pin_bars(data: CandleAnalysis): boolean {
    const shadow = 66.68;
    const body = 33.34;
    if (data.upperWick >= shadow && data.body <= body) {
        return true;
    }
    return false;
}

function bullish_pin_bars(data: CandleAnalysis): boolean {
    const shadow = 66.68;
    const body = 33.34;
    if (data.lowWick >= shadow && data.body <= body) {
        return true;
    }
    return false;
}

function bullish_harami(firstCandle: CandleAnalysis, secondCandle: CandleAnalysis): boolean {
    if (isBearish(firstCandle) &&
        isBullish(secondCandle) &&
        isPowerCandle(firstCandle) &&
        secondCandle.high < firstCandle.high &&
        secondCandle.low > firstCandle.low) {
        return true
    }
    return false;
}

function bearish_harami(firstCandle: CandleAnalysis, secondCandle: CandleAnalysis): boolean {
    if (isBullish(firstCandle) &&
        isBearish(secondCandle) &&
        isPowerCandle(firstCandle) &&
        secondCandle.high < firstCandle.high &&
        secondCandle.low > firstCandle.low) {
        return true
    }
    return false;
}

function bullish_engulfing(firstCandle: CandleAnalysis, secondCandle: CandleAnalysis): boolean {
    if (isBearish(firstCandle) &&
        isBullish(secondCandle) &&
        isPowerCandle(secondCandle) &&
        firstCandle.high < secondCandle.high &&
        firstCandle.low > secondCandle.low) {
        return true
    }
    return false;
}

function bearish_engulfing(firstCandle: CandleAnalysis, secondCandle: CandleAnalysis): boolean {
    if (isBullish(firstCandle) &&
        isBearish(secondCandle) &&
        isPowerCandle(secondCandle) &&
        firstCandle.high < secondCandle.high &&
        firstCandle.low > secondCandle.low) {
        return true
    }
    return false;
}

function morning_star(firstCandle: CandleAnalysis, secondCandle: CandleAnalysis, thirdCandle: CandleAnalysis): boolean {
    if (isBearish(firstCandle) &&
        isBullish(secondCandle) &&
        isBullish(thirdCandle) &&
        isPowerCandle(firstCandle) &&
        isDoubtCandle(secondCandle) &&
        isPowerCandle(thirdCandle) &&
        secondCandle.close <= firstCandle.close) {
        return true
    }
    return false;
}

function evening_star(firstCandle: CandleAnalysis, secondCandle: CandleAnalysis, thirdCandle: CandleAnalysis): boolean {
    if (isBullish(firstCandle) &&
        isBearish(secondCandle) &&
        isBearish(thirdCandle) &&
        isPowerCandle(firstCandle) &&
        isDoubtCandle(secondCandle) &&
        isPowerCandle(thirdCandle) &&
        secondCandle.close <= firstCandle.open) {
        return true
    }
    return false;
}

module.exports = {
    bearish_pin_bars,
    bullish_pin_bars,
    bullish_harami,
    bearish_harami,
    bullish_engulfing,
    bearish_engulfing,
    morning_star,
    evening_star,
    isDoubtCandle,
    isRejectionCandle,
    isPowerCandle,
    isBearish,
    isBullish
}