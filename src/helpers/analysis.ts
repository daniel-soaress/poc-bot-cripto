import { Candle, CandleAnalysis } from "../model/Candle";


function analysis_candle(candle: Candle): CandleAnalysis {
    const open = candle.open;
    const close = candle.close;

    const status = close >= open ? 1 : -1;
    const type = status === 1 ? "Bull" : "Bear";
    const upperWick = parseFloat(getUpperWick(candle, status).toFixed(2));
    const lowWick = parseFloat(getLowWick(candle, status).toFixed(2));
    const body = parseFloat((100 - lowWick - upperWick).toFixed(2));

    return {
        status,
        upperWick,
        lowWick,
        body,
        type,
        ...candle
    }
};

function getUpperWick(candle: Candle, status: number): number {
    const total = candle.high - candle.low;
    const value = status === 1 ? candle.close : candle.open;
    const top = candle.high - value;
    return top / (total / 100);
}

function getLowWick(candle: Candle, status: number): number {
    const total = candle.high - candle.low;
    const value = !(status === 1) ? candle.close : candle.open;
    const bottom = value - candle.low;
    return bottom / (total / 100);
}

module.exports = {
    analysis_candle
}