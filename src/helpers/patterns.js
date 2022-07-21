"use strict";
exports.__esModule = true;
function isBullish(candle) {
    return candle.status === 1 ? true : false;
}
function isBearish(candle) {
    return candle.status === -1 ? true : false;
}
function isPowerCandle(candle) {
    var body = 65;
    if (candle.body >= body) {
        return true;
    }
    return false;
}
function isRejectionCandle(candle) {
    var body = 50;
    if (candle.body <= body) {
        return true;
    }
    return false;
}
function isDoubtCandle(candle) {
    var body = 30;
    if (candle.body <= body &&
        candle.upperWick > body &&
        candle.lowWick > body) {
        return true;
    }
    return false;
}
function bearish_pin_bars(data) {
    var shadow = 66.68;
    var body = 33.34;
    if (data.upperWick >= shadow && data.body <= body) {
        return true;
    }
    return false;
}
function bullish_pin_bars(data) {
    var shadow = 66.68;
    var body = 33.34;
    if (data.lowWick >= shadow && data.body <= body) {
        return true;
    }
    return false;
}
function bullish_harami(firstCandle, secondCandle) {
    if (isBearish(firstCandle) &&
        isBullish(secondCandle) &&
        isPowerCandle(firstCandle) &&
        secondCandle.high < firstCandle.high &&
        secondCandle.low > firstCandle.low) {
        return true;
    }
    return false;
}
function bearish_harami(firstCandle, secondCandle) {
    if (isBullish(firstCandle) &&
        isBearish(secondCandle) &&
        isPowerCandle(firstCandle) &&
        secondCandle.high < firstCandle.high &&
        secondCandle.low > firstCandle.low) {
        return true;
    }
    return false;
}
function bullish_engulfing(firstCandle, secondCandle) {
    if (isBearish(firstCandle) &&
        isBullish(secondCandle) &&
        isPowerCandle(secondCandle) &&
        firstCandle.high < secondCandle.high &&
        firstCandle.low > secondCandle.low) {
        return true;
    }
    return false;
}
function bearish_engulfing(firstCandle, secondCandle) {
    if (isBullish(firstCandle) &&
        isBearish(secondCandle) &&
        isPowerCandle(secondCandle) &&
        firstCandle.high < secondCandle.high &&
        firstCandle.low > secondCandle.low) {
        return true;
    }
    return false;
}
function morning_star(firstCandle, secondCandle, thirdCandle) {
    if (isBearish(firstCandle) &&
        isBullish(secondCandle) &&
        isBullish(thirdCandle) &&
        isPowerCandle(firstCandle) &&
        isDoubtCandle(secondCandle) &&
        isPowerCandle(thirdCandle) &&
        secondCandle.close <= firstCandle.close) {
        return true;
    }
    return false;
}
function evening_star(firstCandle, secondCandle, thirdCandle) {
    if (isBullish(firstCandle) &&
        isBearish(secondCandle) &&
        isBearish(thirdCandle) &&
        isPowerCandle(firstCandle) &&
        isDoubtCandle(secondCandle) &&
        isPowerCandle(thirdCandle) &&
        secondCandle.close <= firstCandle.open) {
        return true;
    }
    return false;
}
module.exports = {
    bearish_pin_bars: bearish_pin_bars,
    bullish_pin_bars: bullish_pin_bars,
    bullish_harami: bullish_harami,
    bearish_harami: bearish_harami,
    bullish_engulfing: bullish_engulfing,
    bearish_engulfing: bearish_engulfing,
    morning_star: morning_star,
    evening_star: evening_star,
    isDoubtCandle: isDoubtCandle,
    isRejectionCandle: isRejectionCandle,
    isPowerCandle: isPowerCandle,
    isBearish: isBearish,
    isBullish: isBullish
};
