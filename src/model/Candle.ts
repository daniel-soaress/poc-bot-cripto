export interface Candle {
    open: number;
    close: number;
    high: number;
    low: number;
}

export interface CandleAnalysis {
    open: number;
    close: number;
    high: number;
    low: number;
    status: number;
    upperWick: number;
    lowWick: number;
    body: number;
    type: string;
}