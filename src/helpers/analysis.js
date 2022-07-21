"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function analysis_candle(candle) {
    var open = candle.open;
    var close = candle.close;
    var status = close >= open ? 1 : -1;
    var type = status === 1 ? "Bull" : "Bear";
    var upperWick = parseFloat(getUpperWick(candle, status).toFixed(2));
    var lowWick = parseFloat(getLowWick(candle, status).toFixed(2));
    var body = parseFloat((100 - lowWick - upperWick).toFixed(2));
    return __assign({ status: status, upperWick: upperWick, lowWick: lowWick, body: body, type: type }, candle);
}
;
function getUpperWick(candle, status) {
    var total = candle.high - candle.low;
    var value = status === 1 ? candle.close : candle.open;
    var top = candle.high - value;
    return top / (total / 100);
}
function getLowWick(candle, status) {
    var total = candle.high - candle.low;
    var value = !(status === 1) ? candle.close : candle.open;
    var bottom = value - candle.low;
    return bottom / (total / 100);
}
module.exports = {
    analysis_candle: analysis_candle
};
